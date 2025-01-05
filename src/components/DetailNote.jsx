import React,{useContext} from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import {showFormattedDate} from "../utils/index";
import LocaleContext from "../contexts/LocaleContext";

const DetailNote = ({title, body, createdAt}) => {
    const {languageSelect} = useContext(LocaleContext);
    return(
        <>
        <h3 className="detail-page__title">{title}</h3>
        <p className="detail-page__createdAt">
           {languageSelect({en: showFormattedDate(createdAt, 'en-UK'), id: showFormattedDate(createdAt, 'id-ID')})}
            </p>
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