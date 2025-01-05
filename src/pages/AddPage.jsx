import React, { useContext, useState } from "react";
import InputNote from "../components/InputNote";
import ActionButton from "../components/ActionButton";
import { addNote } from "../utils/Api";
import { useNavigate } from "react-router-dom";
import { FiCheck } from "react-icons/fi";
// import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

const AddPage = () => {
    const {languageSelect} = useContext(LocaleContext);
    const navigate = useNavigate();
    const [newNote, setNewNote] = useState({
        title   : '',
        body    : ''
    });

    

    const onTitleChangeEventHandler = (e) => {
        setNewNote((prevNewNote)=> {
            return {
                ...prevNewNote,
                title   : e.target.value
            };
        });
    }

    const onBodyInputEventHandler = (e) => {
        setNewNote((prevNewNote) => {
            return{
                ...prevNewNote,
                body    : e.target.innerHTML
            };
        });
    }

    const onSaveNoteHandler = async () => {
        await addNote(newNote);
        navigate('/');
    }


    return(
        <section className="add-new-page">
            <InputNote
                state={newNote}
                onTitleChange={onTitleChangeEventHandler}
                onBodyInput={onBodyInputEventHandler}
                />
                <div className="add-new-page__action">
                    <ActionButton
                    title={languageSelect({en: 'Save', id: 'Simpan'})}
                    onClick={onSaveNoteHandler} icon={<FiCheck/>}
                    />
                </div>
        </section>
    )
}

export default AddPage;



// const AddPageWrapper = () => {
//     const navigate = useNavigate();

//     const saveNoteHandler = (note) => {
//         addNote(note);
//         navigate("/");
//     }

//     return <AddPage onSaveNoteHandler={saveNoteHandler} />;
// }


// class AddPage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title   : "",
//             body    : ""
//         };

//         this.onTitleChangeEventHandler  = this.onTitleChangeEventHandler.bind(this);
//         this.onBodyInputEventHandler    = this.onBodyInputEventHandler.bind(this);
//         this.onClickSaveButton          = this.onClickSaveButton.bind(this);
//     }

//     onTitleChangeEventHandler(event) {
//         this.setState(()=> {
//             return{
//                 title   : event.target.value
//             };
//         });
//     }

//     onBodyInputEventHandler(event) {
//         this.setState(() => {
//             return{
//                 body   : event.target.innerHTML
//             };
//         });
//     }

//     onClickSaveButton() {
//         this.props.onSaveNoteHandler(this.state);
//     }

//     render() {
//         return (
//             <section className="add-new-page">
//                 <InputNote
//                 state={this.state}
//                 onTitleChange={this.onTitleChangeEventHandler}
//                 onBodyInput={this.onBodyInputEventHandler}
//                 />
//                 <div className="add-new-page__action">
//                     <ActionButton
//                     title="Save" onClick={this.onClickSaveButton} icon={<FiCheck/>}
//                     />
//                 </div>
//             </section>
//         );
//     }

// }

// AddPage.propTypes = {
//     onSaveNoteHandler   : PropTypes.func.isRequired
// };

// export default AddPageWrapper;