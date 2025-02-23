import {Link} from "react-router-dom";
import "./Portfolio.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Container} from "react-bootstrap";
import {dataportfolio, meta} from "../../content_option";

export const Portfolio = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> Portfolio | {meta.title} </title>
                    <meta name="description" content={meta.description}/>
                </Helmet>

                <h1 className="title-text">Portfolio</h1>

                <div className="mb-5 po_items">
                    {dataportfolio.map((data) => (
                        <div key={data.id} className="po_item">
                            <Link to={`/portfolio/${data.id}`}>
                                <img src={data.img} alt={data.title}/>
                                <div className="content">
                                    <p className="mb-0">{data.title}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </HelmetProvider>
    );
};