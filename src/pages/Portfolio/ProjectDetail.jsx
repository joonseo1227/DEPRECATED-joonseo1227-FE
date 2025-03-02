import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import supabase from "/src/utils/supabase.js";
import {meta} from "../../content_option";
import "./ProjectDetail.css";
import {Container} from "react-bootstrap";
import {LogoGithub} from "@carbon/icons-react";
import {Helmet, HelmetProvider} from "react-helmet-async";

const ProjectDetail = () => {
    const {projectId} = useParams();
    const [project, setProject] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const {data, error} = await supabase
                    .from('project')
                    .select('*')
                    .eq('id', projectId)
                    .single();

                if (error) {
                    console.error('Supabase 에러:', error);
                    setError(error.message);
                    return;
                }

                setProject(data);
            } catch (err) {
                console.error('예외 발생:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProject();
    }, [projectId]);

    if (isLoading) {
        return (
            <Container className="project-detail">
                <p>로딩 중...</p>
            </Container>
        );
    }

    if (error || !project) {
        return (
            <Container className="project-detail">
                <h1 className="title-text">존재하지 않는 프로젝트입니다.</h1>
            </Container>
        );
    }

    return (
        <HelmetProvider>
            <Container className="project-detail">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> {project.title} | {meta.title} </title>
                    <meta name="description" content={meta.description}/>
                    <meta property="og:site_name" content="joonseo1227"/>
                    <meta property="og:title" content={`${project.title} | ${meta.title}`}/>
                    <meta property="og:image" content={project.img_url}/>
                    <meta property="og:description" content={project.description}/>
                </Helmet>

                <h1 className="title-text">{project.title}</h1>

                <div className="project-info">
                    <img src={project.img_url} alt={project.title}/>

                    <div>
                        <p className="job-text">{project.job}</p>
                        <p className="period-text">
                            {new Date(project.start_date).toLocaleDateString()} -
                            {project.end_date ? new Date(project.end_date).toLocaleDateString() : '진행중'}
                        </p>
                        <p className="tech-text">{project.tech}</p>
                    </div>
                </div>

                <p className="description-text">{project.description}</p>

                {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                        <LogoGithub className="icon"/>
                    </a>
                )}
            </Container>
        </HelmetProvider>
    );
};

export default ProjectDetail;
