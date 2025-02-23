import "./Contact.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {contactConfig, meta} from "../../content_option";
import {Container} from "react-bootstrap";

export const ContactUs = () => {

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{meta.title} | Contact</title>
                    <meta name="description" content={meta.description}/>
                </Helmet>

                <h1 className="title-text">Contact</h1>

                <p className="email-text">{contactConfig.YOUR_EMAIL}</p>


            </Container>
        </HelmetProvider>
    );
};
