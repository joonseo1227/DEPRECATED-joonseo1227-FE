import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Portfolio.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Container} from "react-bootstrap";
import {meta} from "../../content_option";
import supabase from "/src/utils/supabase.js";

export const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const {data, error} = await supabase
                    .from('project')
                    .select('*')
                    .order('start_date', {ascending: false});

                if (error) {
                    console.error('Supabase 에러:', error);
                    setError(error.message);
                    return;
                }

                setProjects(data || []);
            } catch (err) {
                console.error('예외 발생:', err);
                setError(err.message);
            }
        };

        fetchProjects();
    }, []);


    if (error) {
        return <div>에러가 발생했습니다: {error}</div>;
    }

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> Portfolio | {meta.title} </title>
                    <meta name="description" content={meta.description}/>
                </Helmet>

                <h1 className="title-text">Portfolio</h1>

                {projects.length === 0 ? (
                    <div>로딩 중...</div>
                ) : (
                    <div className="mb-5 po_items">
                        {projects.map((project) => (
                            <div className="po_item" key={project.id}>
                                <Link to={`/portfolio/${project.id}`}>
                                    <img src={project.img_url} alt={project.title}/>
                                    <div className="content">
                                        <p className="mb-0">{project.title}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </HelmetProvider>
    );
};