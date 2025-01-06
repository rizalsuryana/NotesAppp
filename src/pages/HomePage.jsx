import React, { useContext, useEffect, useState } from "react";
import ListNote from "../components/ListNote";
import SearchNote from "../components/SearchNote";
import ActionButton from "../components/ActionButton";
// import {getActiveNotes} from "../utils/local-data";
import { getActiveNotes } from "../utils/Api";
import { useSearchParams } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";
import Loading from "../components/Loading";
// import PropTypes from "prop-types";


const HomePage = () => {
    const {languageSelect} = useContext(LocaleContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    const [keyword, setKeyword] = useState(()=> {
        return searchParams.get('keyword') || '';
    });

    useEffect(()=> {
        getActiveNotes().then(({data}) => {
            setNotes(data);
            setLoading(false);
        });
    }, []);
    
    
    const navigate = useNavigate();
    const onAddButtonHandler = () => {
        navigate('/notes/new');
    }

    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword);
        setSearchParams({keyword});
    }

    const filteredNotes = notes.filter(({title})=> {
        return title.toLowerCase().includes(keyword.toLowerCase());
    });

    if (loading) {
        return <Loading/>
    }


    return(
        <section className="homepage">
            <h4>{languageSelect({en: 'Active Notes', id: 'Catatan Aktif'})}</h4>

            <SearchNote keyword={keyword} keywordChange={onKeywordChangeHandler} />
            <ListNote notes={filteredNotes}/>
            
            <div className="homepage__action">
                <ActionButton
                title={languageSelect({en: 'Add Note', id : 'Tambah Catatan'})}
                onClick={onAddButtonHandler}
                icon={<FiPlus/>}
                />
            </div>

        </section>
    )

}

export default HomePage;















// const HomePageWrapper = () => {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const keyword = searchParams.get("keyword");
//     const changeSearchParams = (keyword) => {
//         setSearchParams({keyword});
//     }

//     const navigate = useNavigate();
//     const addButtonHandler = () => {
//         navigate("/notes/new");
//     }

//     return <HomePage defaultKeyword={keyword}
//     keywordChange={changeSearchParams}
//     onAddButtonHandler={addButtonHandler} />
// }



// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             notes   : getActiveNotes(),
//             keyword : props.defaultKeyword || ""
//         };

//         this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//     }

//     onKeywordChangeHandler(keyword) {
//         this.setState(()=> {
//             return {
//                 keyword
//             };
//         });
//         this.props.keywordChange(keyword);
//     }

//     render () {
//         const notes = this.state.notes.filter(({title})=>
//         title.toLowerCase().includes(this.state.keyword.toLowerCase())
//         );

//         return(
//             <section className="homepage">
//                 <h1>Active Notes</h1>
//                 <SearchNote keyword={this.state.keyword}
//                 keywordChange={this.onKeywordChangeHandler} />
//                 <ListNote notes={notes} />
//                 <div className="homepage__action">
//                     <ActionButton title="Add Note"
//                     onClick={this.props.onAddButtonHandler}
//                     icon={<FiPlus/>}/>
//                 </div>

//             </section>
//         );
//     }
// }

// HomePage.propTypes = {
//     defaultKeyword      : PropTypes.string,
//     keywordChange       : PropTypes.func.isRequired,
//     onAddButtonHandler  : PropTypes.func.isRequired
// };


// export default HomePageWrapper;