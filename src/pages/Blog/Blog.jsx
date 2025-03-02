import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Blog.css';
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Container} from "react-bootstrap";
import {meta} from "../../content_option.js";
import supabase from "/src/utils/supabase.js";

function Blog() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 카테고리 목록 가져오기
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const {data, error} = await supabase
                    .from('categories')
                    .select('*')
                    .order('name');

                if (error) throw error;
                setCategories(data || []);
            } catch (err) {
                console.error('카테고리를 불러오는데 실패했습니다:', err);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                let query = supabase
                    .from('posts')
                    .select(`
                    *,
                    post_categories (
                        categories (
                            id,
                            name
                        )
                    )
                `)
                    .order('created_at', {ascending: false});

                if (selectedCategory) {
                    // 선택된 카테고리의 포스트만 필터링
                    const {data: postIds} = await supabase
                        .from('post_categories')
                        .select('post_id')
                        .eq('category_id', selectedCategory);

                    if (postIds) {
                        query = query.in('id', postIds.map(item => item.post_id));
                    }
                }

                const {data, error} = await query;

                if (error) throw error;
                setPosts(data || []);
            } catch (err) {
                setError('포스트를 불러오는데 실패했습니다.');
                console.error('Error:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [selectedCategory]);

    // 카테고리 변경 핸들러
    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    return (
        <HelmetProvider>
            <Container className="blog">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Blog | {meta.title}</title>
                    <meta name="description" content={meta.description}/>
                    <meta property="og:site_name" content={meta.title}/>
                    <meta property="og:title" content={`Blog | ${meta.title}`}/>
                    <meta property="og:image"
                          content="https://avtqiifssheaiyrcujbi.supabase.co/storage/v1/object/sign/images/thumbnail.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvdGh1bWJuYWlsLmpwZyIsImlhdCI6MTc0MDkyOTc3MywiZXhwIjozMzI0NTM5Mzc3M30.Zg43Io1d1YbvvOZ42m3CQKbwhPT-u62Bz8T_yYsqDus"/>
                    <meta property="og:description" content={meta.description}/>
                    <meta property="og:type" content="blog"/>
                </Helmet>

                <h1 className="title-text">Blog</h1>

                {/* 카테고리 필터 */}
                <div className="category-filter">
                    <button
                        className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
                        onClick={() => handleCategoryChange(null)}
                    >
                        전체보기
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <p>로딩 중...</p>
                ) : error ? (
                    <p className="error-message">{error}</p>
                ) : posts.length === 0 ? (
                    <p className="no-posts">게시물이 없습니다.</p>
                ) : (
                    <div className="post-list">
                        {posts.map((post) => (
                            <article className="post-tile" key={post.id}>
                                <Link className="post-link" to={`/blog/${post.id}`}>
                                    {post.thumbnail_url && (
                                        <img
                                            src={post.thumbnail_url}
                                            alt={post.title}
                                            className="post-thumbnail"
                                        />
                                    )}
                                    <div className="post-info">
                                        <h2>{post.title}</h2>
                                        <p>{post.summary}</p>
                                        <p className="post-date">
                                            {new Date(post.created_at).toLocaleDateString('ko-KR')}
                                        </p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </Container>
        </HelmetProvider>
    );
}

export default Blog;