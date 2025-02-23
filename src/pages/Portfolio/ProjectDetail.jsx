import {useParams} from "react-router-dom";
import {dataportfolio} from "../../content_option";
import "./ProjectDetail.css";
import {Container} from "react-bootstrap";
import {LogoGithub} from "@carbon/icons-react";

const ProjectDetail = () => {
    const {projectId} = useParams();
    const project = dataportfolio.find((p) => p.id === projectId);

    if (!project) {
        return (
            <Container className="project-detail">
                <h1 className="title-text">존재하지 않는 프로젝트입니다.</h1>
            </Container>
        );
    }

    return (
        <Container className="project-detail">

            <h1 className="title-text">{project.title}</h1>

            <img src={project.img} alt={project.title}/>
            <p>{project.description}</p>
            {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <LogoGithub className="icon"/>
                </a>
            )}
        </Container>
    );
};

export default ProjectDetail;