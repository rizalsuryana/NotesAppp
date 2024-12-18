import React from "react";
import PropTypes from "prop-types";

const SearchNote = ({keyword, keywordChange}) => {
    return (
        <section className="search-bar">
            <input type="text"
            placeholder="Search Note By Title"
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