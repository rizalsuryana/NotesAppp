import React from 'react';
import InputNote from '../components/InputNote';
import ActionButton from '../components/ActionButton';
import { editNote, getNote } from '../utils/local-data';
import { useNavigate, useParams } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';
import PropTypes from 'prop-types';

const EditPageWrapper = () => {
const { id } = useParams();
const navigate = useNavigate();

const saveNoteHandler = (note) => {
    editNote(note);
    navigate('/');
}

if (getNote(id) === undefined) {
    return <p>Note dengan ID "{id}" tidak tersedia.</p>;
}
return <EditPage onSaveNoteHandler={saveNoteHandler} noteId={id} />;
}

class EditPage extends React.Component {
constructor(props) {
    super(props);

    const note = getNote(props.noteId);
    this.initialBodyEdit = note.body;
    this.state = {
    id: note.id,
    title: note.title,
    body: note.body
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyInputEventHandler = this.onBodyInputEventHandler.bind(this);
    this.onClickSaveButton = this.onClickSaveButton.bind(this);
}

onTitleChangeEventHandler(event) {
    this.setState(() => {
    return {
        title: event.target.value
    };
    });
}

onBodyInputEventHandler(event) {
    this.setState(() => {
    return {
        body: event.target.innerHTML
    };
    });
}

onClickSaveButton() {
    this.props.onSaveNoteHandler(this.state);
}

render() {
    return (
    <section className='add-new-page'>
        <InputNote
        state={this.state}
        onTitleChange={this.onTitleChangeEventHandler}
        onBodyInput={this.onBodyInputEventHandler}
        initialBodyEdit={this.initialBodyEdit}
        />
        <div className='add-new-page__action'>
        <ActionButton title='Simpan' onClick={this.onClickSaveButton} icon={<FiCheck />} />
        </div>
    </section>
    );
}
}

EditPage.propTypes = {
    onSaveNoteHandler   : PropTypes.func.isRequired,
    noteId              : PropTypes.string.isRequired
};
export default EditPageWrapper;