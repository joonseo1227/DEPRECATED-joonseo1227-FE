import "./Contact.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {contact, meta} from "../../content_option";
import {Container} from "react-bootstrap";

export const ContactUs = () => {

    return (
        <HelmetProvider>
            <Container>
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>Contact | {meta.title}</title>
                    <meta name="description" content={meta.description}/>
                    <meta property="og:site_name" content={meta.title}/>
                    <meta property="og:title" content={`Contact | ${meta.title}`}/>
                    <meta property="og:image"
                          content="https://avtqiifssheaiyrcujbi.supabase.co/storage/v1/object/sign/images/thumbnail.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvdGh1bWJuYWlsLmpwZyIsImlhdCI6MTc0MDkyOTc3MywiZXhwIjozMzI0NTM5Mzc3M30.Zg43Io1d1YbvvOZ42m3CQKbwhPT-u62Bz8T_yYsqDus"/>
                    <meta property="og:description" content={meta.description}/>
                </Helmet>

                <h1 className="title-text">Contact</h1>

                <p className="email-text">{contact.YOUR_EMAIL}</p>


            </Container>
        </HelmetProvider>
    );
};
