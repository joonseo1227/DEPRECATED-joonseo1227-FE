import "./About.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Col, Container, Row} from "react-bootstrap";
import {about, meta, services, skills, worktimeline,} from "../../content_option";

export const About = () => {
    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>About | {meta.title}</title>
                    <meta name="description" content={meta.description}/>
                    <meta property="og:site_name" content={meta.title}/>
                    <meta property="og:title" content={`About | ${meta.title}`}/>
                    <meta property="og:image"
                          content="https://avtqiifssheaiyrcujbi.supabase.co/storage/v1/object/sign/images/thumbnail.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvdGh1bWJuYWlsLmpwZyIsImlhdCI6MTc0MDkyOTc3MywiZXhwIjozMzI0NTM5Mzc3M30.Zg43Io1d1YbvvOZ42m3CQKbwhPT-u62Bz8T_yYsqDus"/>
                    <meta property="og:description" content={meta.description}/>
                </Helmet>

                <h1 className="title-text">About</h1>

                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="subtitle-text">{about.title}</h3>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <div>
                            <p className="aboutme-text">{about.aboutme}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="subtitle-text">Work Timeline</h3>
                    </Col>
                    <Col lg="7">
                        <table className="table caption-top">
                            <tbody>
                            {worktimeline.map((data, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">{data.jobtitle}</th>
                                        <td>{data.date}</td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="subtitle-text">Skills</h3>
                    </Col>
                    <Col lg="7">
                        {skills.map((data, i) => {
                            return (
                                <div key={i}>
                                    <h3 className="progress-title">{data.name}</h3>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${data.value}%`,
                                            }}
                                        >
                                            <div className="progress-value">{data.value}%</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lang="5">
                        <h3 className="subtitle-text">Services</h3>
                    </Col>
                    <Col lg="7">
                        {services.map((data, i) => {
                            return (
                                <div className="service" key={i}>
                                    <h5 className="service__title">{data.title}</h5>
                                    <p className="service_desc">{data.description}</p>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};
