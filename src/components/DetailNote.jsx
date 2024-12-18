import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import {showFormattedDate} from "../utils/index";

const DetailNote = ({title, body, createdAt}) => {
    return(
        <>
        <h3 className="detail-page__title">{title}</h3>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <div className="detail-page__body">{parser(body)}</div>
        </>
    );
}


DetailNote.propTypes = {
    title       : PropTypes.string.isRequired,
    body        : PropTypes.string.isRequired,
    createdAt   : PropTypes.string.isRequired
};

export default DetailNote;