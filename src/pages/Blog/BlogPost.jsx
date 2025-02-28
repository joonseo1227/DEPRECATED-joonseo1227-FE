import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import "./BlogPost.css";
import {meta} from "../../content_option.js";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Container} from "react-bootstrap";
import supabase from "/src/utils/supabase.js";

function BlogPost() {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const {data, error} = await supabase
                    .from('posts')
                    .select(`
                        *,
                        post_categories (
                            categories (
                                name
                            )
                        )
                    `)
                    .eq('id', postId)
                    .single();

                if (error) {
                    console.error('Supabase 에러:', error);
                    setError(error.message);
                    return;
                }

                setPost(data);
            } catch (err) {
                console.error('예외 발생:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [postId]);

    if (isLoading) {
        return (
            <Container className="blog-post">
                <p>로딩 중...</p>
            </Container>
        );
    }

    if (error || !post) {
        return (
            <Container className="blog-post">
                <h1 className="title-text">존재하지 않는 포스트입니다.</h1>
            </Container>
        );
    }

    return (
        <HelmetProvider>
            <Container className="blog-post">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> {post.title} | {meta.title} </title>
                    <meta name="description" content={post.summary || meta.description}/>
                </Helmet>

                <div
                    className="post-header"
                    style={{
                        backgroundImage: post.thumbnail_url ? `url(${post.thumbnail_url})` : 'none'
                    }}
                >
                    <h1 className="title-text">{post.title}</h1>
                    <p className="post-date">
                        {new Date(post.created_at).toLocaleDateString('ko-KR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </p>
                </div>

                <div className="post-content">
                    {post.content || "내용이 없습니다."}
                </div>
            </Container>
        </HelmetProvider>
    );
}

export default BlogPost;