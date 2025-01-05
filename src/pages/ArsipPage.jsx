import React, { useContext, useEffect, useState } from "react";
import ListNote from "../components/ListNote";
import SearchNote from "../components/SearchNote";
import { getArchivedNotes } from "../utils/Api";
import { useSearchParams } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import Loading from "../components/Loading";
// import PropTypes from "prop-types";

const ArsipPage = () => {
    const {languageSelect} = useContext(LocaleContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const [keyword, setKeyword] = useState(() => {
        return searchParams.get('keyword') || '';
    });

    useEffect(()=> {
        getArchivedNotes().then(({data})=> {
            setNotes(data);
            setLoading(false);
        });
    }, []);

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
        setSearchParams({keyword});
    }

    const filteredNotes = notes.filter(({title})=> {
        return title.toLowerCase().includes(keyword.toLowerCase());
    });

    if(loading) {
        return <Loading/>
    }

    return(

        <section className="homepage">
            <h4>
                {
                    languageSelect({
                        en: 'Archived Notes', id: 'Arsip Catatan'
                    })
                }

                <SearchNote keyword={keyword} keywordChange={onKeywordChangeHandler}/>

                <ListNote notes={filteredNotes}/>
            </h4>
        </section>
    )
}

export default ArsipPage;





















// const ArsipPageWrapper = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const keyword = searchParams.get('keyword');
//     const changeSearchParams = (keyword) =>{
//         setSearchParams({keyword});
//     }

//     return <ArsipPage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
// }
//     class ArsipPage extends React.Component {
//         constructor(props) {
//             super(props);

//             this.state = {
//                 notes       : getArchivedNotes(),
//                 keyword     : props.defaultKeyword || ""
//             };

//             this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//         }

//         onKeywordChangeHandler(keyword) {
//             this.setState(() => {
//                 return {
//                     keyword
//                 };
//             });
//             this.props.keywordChange(keyword);
//         }

//         render () {
//             const notes = this.state.notes.filter(({title}) =>
//             title.toLocaleLowerCase().includes(this.state.keyword.toLocaleLowerCase())
//         );

//         return (
//             <section className="homepage">
//                 <h2>Archieved Notes</h2>
//                 <SearchNote keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
//                 <ListNote notes={notes} />
//             </section>
//         );
//         }
//     }

//     ArsipPage.propTypes = {
//         defaultKeyword  : PropTypes.string,
//         keywordChange   : PropTypes.func.isRequired
//     };

// export default ArsipPageWrapper;