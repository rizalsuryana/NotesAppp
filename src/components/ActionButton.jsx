import React from "react";
import PropTypes from "prop-types";

const ActionButton = ({title, onClick, icon}) => {
    return(
        <button className="action" type="button" title={title} onClick={onClick}>
            {icon}
        </button>
    );
}

ActionButton.propTypes ={
    title   : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
    icon    : PropTypes.object.isRequired
};

export default ActionButton;