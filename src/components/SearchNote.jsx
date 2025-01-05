import React, { useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

const SearchNote = ({keyword, keywordChange}) => {
    const {languageSelect} = useContext(LocaleContext);
    return (
        <section className="search-bar">
            <input type="text"
            placeholder={languageSelect({en: "Search Note By Title", id: 'Cari berdasarkan judul catatan'})}
            value={keyword}
            onChange={(event) => keywordChange(event.target.value)}
            />
        </section>
    );
}


SearchNote.propTypes = {
    keyword         : PropTypes.string.isRequired,
    keywordChange   : PropTypes.func.isRequired
};


export default SearchNote;