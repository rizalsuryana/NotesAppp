import React, { useContext } from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";
import {Link} from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

const ItemNote = ({id, title, body, createdAt}) => {
    const {languageSelect} = useContext(LocaleContext);
    return(
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title} </Link>
            </h3>
            <p className="note-item__createdAt">
                {languageSelect({en: showFormattedDate(createdAt, 'en-UK'), id: showFormattedDate(createdAt, 'id-ID')})}
                </p>
            <p className="note-item__body">{parser(body)}</p>
        </article>
    );

}


ItemNote.propTypes = {
    id          : PropTypes.string.isRequired,
    title       : PropTypes.string.isRequired,
    body        : PropTypes.string.isRequired,
    createdAt   : PropTypes.string.isRequired
};

export default ItemNote;