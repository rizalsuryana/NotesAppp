import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../contexts/ThemeContext";
import LocaleContext from "../contexts/LocaleContext";
import { SiGoogletranslate } from "react-icons/si";
import { FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import PropTypes from "prop-types";

const NavigationNote = ({logout, name}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {toggleLocale, languageSelect} = useContext(LocaleContext);

    return (
        <>
        <h1>
            <Link to={"/"}>{languageSelect({en: 'Notes', id: 'Catatan'})}</Link>
        </h1>
        {logout !== undefined && (
    
        <nav className="navigation">
            <ul>
                <li>
                    <Link to="/archives">{languageSelect({en: 'Archived', id: 'Arsip'})}</Link>
                </li>
            </ul>
        </nav>

        )}


        <button className="toggle-locale" onClick={toggleLocale}>
            <SiGoogletranslate/>
            </button>

            <button className="toggle-theme" onClick={toggleTheme}>
                {theme === 'light' ?  <FiMoon/> : <FiSun/>}
            </button>


            {logout !== undefined &&(
                <button className="button-logout" onClick={logout} title="Logout">
                    <FiLogOut/> {name}
                </button>
            )}
        </>
    );
}

NavigationNote.propTypes={
    logout  : PropTypes.func,
    name    : PropTypes.string
}

export default NavigationNote;