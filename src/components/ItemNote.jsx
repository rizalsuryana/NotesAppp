import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";
import {Link} from "react-router-dom";

const ItemNote = ({id, title, body, createdAt}) => {
    return(
        <article className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${id}`}>{title} </Link>
            </h3>
            <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
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