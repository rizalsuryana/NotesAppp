import React from "react";
import ListNote from "../components/ListNote";
import SearchNote from "../components/SearchNote";
import { getArchivedNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

const ArsipPageWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    const changeSearchParams = (keyword) =>{
        setSearchParams({keyword});
    }

    return <ArsipPage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}
    class ArsipPage extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                notes       : getArchivedNotes(),
                keyword     : props.defaultKeyword || ""
            };

            this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        }

        onKeywordChangeHandler(keyword) {
            this.setState(() => {
                return {
                    keyword
                };
            });
            this.props.keywordChange(keyword);
        }

        render () {
            const notes = this.state.notes.filter(({title}) =>
            title.toLocaleLowerCase().includes(this.state.keyword.toLocaleLowerCase())
        );

        return (
            <section className="homepage">
                <h2>Archieved Notes</h2>
                <SearchNote keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <ListNote notes={notes} />
            </section>
        );
        }
    }

    ArsipPage.propTypes = {
        defaultKeyword  : PropTypes.string,
        keywordChange   : PropTypes.func.isRequired
    };

export default ArsipPageWrapper;