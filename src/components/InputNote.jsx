import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";

const InputNote = ({state, onTitleChange, onBodyInput, initialBodyEdit}) => {
    return (
        <div className="add-new-page__input">
            <input type="text" className="add-new-page__input__title" 
            placeholder="Judul Catatan"
            value={state.title}
            onChange={onTitleChange}
            spellCheck="false"
            />
            <div className="add-new-page__input__body"
            contentEditable="true"
            data-placeholder="Detail Catatan"
            onInput={onBodyInput}
            spellCheck="false"
            suppressContentEditableWarning={true}
            >
                {initialBodyEdit !== undefined ? parser(initialBodyEdit) : ""}
            </div>
        </div>
    );
}


InputNote.propTypes = {
    state           : PropTypes.object.isRequired,
    onTitleChange   : PropTypes.func.isRequired,
    onBodyInput     : PropTypes.func.isRequired,
    initialBodyEdit : PropTypes.string
};


export default InputNote;