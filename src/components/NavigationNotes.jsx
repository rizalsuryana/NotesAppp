import React from "react";
import { Link } from "react-router-dom";

const NavigationNote = () => {
    return (
        <>
        <h1>
            <Link to={"/"}>Notes Application</Link>
        </h1>
        <nav className="navigation">
            <ul>
                <li>
                    <Link to={"/archives"}>Archived Notes</Link>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default NavigationNote;