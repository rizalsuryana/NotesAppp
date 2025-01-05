import React,{useContext} from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
// import parser from "html-react-parser";

const InputNote = ({state, onTitleChange, onBodyInput, /*initialBodyEdit*/}) => {
    const {languageSelect} = useContext(LocaleContext);
    return (
        <div className="add-new-page__input">
            <input type="text" className="add-new-page__input__title" 
            placeholder={languageSelect({en: 'Titile Note', id: "Judul Catatan"})}
            value={state.title}
            onChange={onTitleChange}
            spellCheck="false"
            />
            <div className="add-new-page__input__body"
            contentEditable="true"
            data-placeholder={languageSelect({en: 'Detail Note', id: 'Detail Catatan'})}
            onInput={onBodyInput}
            spellCheck="false"
            suppressContentEditableWarning={true}
            >
                {/* {initialBodyEdit !== undefined ? parser(initialBodyEdit) : ""} */}
            </div>
        </div>
    );
}


InputNote.propTypes = {
    state           : PropTypes.object.isRequired,
    onTitleChange   : PropTypes.func.isRequired,
    onBodyInput     : PropTypes.func.isRequired,
    // initialBodyEdit : PropTypes.string
};


export default InputNote;