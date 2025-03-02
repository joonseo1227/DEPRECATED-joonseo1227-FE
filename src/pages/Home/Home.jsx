import "./Home.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Typewriter from "typewriter-effect";
import {intro, meta} from "../../content_option";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <HelmetProvider>
            <section id="home" className="home">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{meta.title}</title>
                    <meta name="description" content={meta.description}/>
                    <meta property="og:site_name" content={meta.title}/>
                    <meta property="og:title" content={meta.title}/>
                    <meta property="og:image"
                          content="https://avtqiifssheaiyrcujbi.supabase.co/storage/v1/object/sign/images/thumbnail.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvdGh1bWJuYWlsLmpwZyIsImlhdCI6MTc0MDkyOTc3MywiZXhwIjozMzI0NTM5Mzc3M30.Zg43Io1d1YbvvOZ42m3CQKbwhPT-u62Bz8T_yYsqDus"/>
                    <meta property="og:description" content={meta.description}/>
                </Helmet>
                <div className="intro_sec d-block d-lg-flex align-items-center ">
                    <div
                        className="h_bg-image order-1 order-lg-2 h-100"
                        style={{backgroundImage: `url(${intro.your_img_url})`}}
                    ></div>
                    <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                        <div className="align-self-center ">
                            <div className="intro mx-auto">
                                <h1 className="fluidz-48 mb-1x text-start">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                intro.animated.first,
                                                intro.animated.second,
                                                intro.animated.third,
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 10,
                                        }}
                                    />
                                </h1>
                                <p>{intro.description}</p>
                                <div className=" text-start">
                                    <Link to="/portfolio" className="text_2">
                                        <div id="button_p" className="ac_btn btn ">
                                            My Portfolio
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                    <Link to="/contact" className="text_2">
                                        <div id="button_h" className="ac_btn btn">
                                            Contact Me
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    );
};
