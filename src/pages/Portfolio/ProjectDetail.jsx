import {useParams} from "react-router-dom";
import {dataportfolio} from "../../content_option";
import "./ProjectDetail.css";
import {Container} from "react-bootstrap";
import {LogoGithub} from "@carbon/icons-react";

const ProjectDetail = () => {
    const {projectId} = useParams();
    const project = dataportfolio.find((p) => p.id === projectId);

    if (!project) {
        return (<Container className="project-detail">
            <h1 className="title-text">존재하지 않는 프로젝트입니다.</h1>
        </Container>);
    }

    return (<Container className="project-detail">

        <h1 className="title-text">{project.title}</h1>

        <div className="project-info">
            <img src={project.img} alt={project.title}/>

            <div>
                <p className="job-text">{project.job}</p>
                <p className="period-text">{project.period}</p>
                <p className="tech-text">{project.tech}</p>
            </div>
        </div>

        <p className="description-text">{project.description}</p>

        {project.github && (<a href={project.github} target="_blank" rel="noopener noreferrer">
            <LogoGithub className="icon"/>
        </a>)}

    </Container>);
};

export default ProjectDetail;