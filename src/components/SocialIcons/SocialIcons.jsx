import "./SocialIcons.css";

import {
    FaCircle,
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaSnapchatGhost,
    FaTiktok,
    FaTwitch,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";
import {social} from "../../content_option";

const ICON_MAPPING = {
    default: FaCircle,
    facebook: FaFacebookF,
    github: FaGithub,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
    snapchat: FaSnapchatGhost,
    tiktok: FaTiktok,
    twitter: FaTwitter,
    twitch: FaTwitch,
    youtube: FaYoutube
};

export const SocialIcons = () => {
    return (
        <div className="stick_follow_icon">
            <ul>
                {Object.entries(social).map(([platform, url]) => {
                    const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
                    return (
                        <li key={platform}>
                            <a href={url}>
                                <IconComponent/>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p>Follow Me</p>
        </div>
    );
};
