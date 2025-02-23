import {useEffect, useState} from "react";
import {Asleep, Sun} from '@carbon/icons-react';

const Themetoggle = () => {
    const [theme, settheme] = useState(localStorage.getItem("theme"));
    const themetoggle = () => {
        settheme(theme === "dark" ? "light" : "dark");
    };
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <div className="nav_ac" onClick={themetoggle}>
            {theme === "dark" ? <Asleep size="24"/> : <Sun size="24"/>}
        </div>
    );
};


export default Themetoggle;
