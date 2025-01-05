import React, { useContext, useEffect, useState } from 'react';
import ActionButton from '../components/ActionButton';
import NoteDetail from '../components/DetailNote';
import { useNavigate, useParams } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unArchiveNote } from '../utils/Api';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import LocaleContext from '../contexts/LocaleContext';
import Loading from '../components/Loading';
import DetailNote from '../components/DetailNote';
// import PropTypes from 'prop-types';


const DetailPage = () => {
  const {languageSelect} = useContext(LocaleContext);
  const {id} = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState({});
  const[loading, setLoading] = useState(true);

  useEffect(()=> {
    getNote(id).then(({data})=> {
      setNote(data);
      setLoading(false);
    });
  }, []);

  const deleteNoteHandler = async () => {
    await deleteNote(id);
    note.archived ? navigate('/archived') : navigate('/');
  }


  const archiveNoteHandler = async () => {
    await archiveNote(id);
    navigate('/');
  }

  const unArchiveNoteHandler = async () => {
    await unArchiveNote(id);
    navigate('/archives');
  }

  if (loading) {
    return <Loading />;
  }

  if (note === null) {
    return (
      <p>
        {languageSelect({en: `Note '${id}' not found`, id: `Catatan '${id}, tidak ditemukan`})}
      </p>
    );
  }

  return(
    <section>
      <DetailNote {...note}/>

      <div className="detail-page__action">
        <ActionButton
        title={
          note.archived ? languageSelect({en: 'Activate', id: 'Aktifkan'})
          : languageSelect({en: 'Archive', id: 'Arsipkan'})
        }

        onClick={note.archived ? unArchiveNoteHandler : archiveNoteHandler}
        icon={note.archived ? <BiArchiveOut/> : <BiArchiveIn/>}
        />

        <ActionButton
        title={languageSelect({en: 'Delete', id: 'Hapus'})}
        onClick={deleteNoteHandler}
        icon={<FiTrash2/>}
        />
      </div>
    </section>
  );

}


export default DetailPage;
































// function DetailPageWrapper() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   function deleteNotenHandler(id, archived) {
//     deleteNote(id);
//     archived ? navigate('/archives') : navigate('/');
//   }

//   function archiveNotenHandler(id) {
//     archiveNote(id);
//     navigate('/');
//   }

//   function unarchiveNoteHandler(id) {
//     unarchiveNote(id);
//     navigate('/archives');
//   }

//   function editButtonHandler() {
//     navigate(`/notes/edit/${id}`);
//   }

//   return (
//     <DetailPage
//       id={id}
//       onDeleteNoteHandler={deleteNotenHandler}
//       onArchiveNoteHandler={archiveNotenHandler}
//       onUnarchiveNoteHandler={unarchiveNoteHandler}
//       onEditButtonHandler={editButtonHandler}
//     />
//   );
// }

// class DetailPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       note: getNote(props.id)
//     };

//     this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
//     this.onClickArchiveButton = this.onClickArchiveButton.bind(this);
//     this.onClickUnarchiveButton = this.onClickUnarchiveButton.bind(this);
//   }

//   onClickDeleteButton() {
//     this.props.onDeleteNoteHandler(this.props.id, this.state.note.archived);
//   }
//   onClickArchiveButton() {
//     this.props.onArchiveNoteHandler(this.props.id);
//   }
//   onClickUnarchiveButton() {
//     this.props.onUnarchiveNoteHandler(this.props.id);
//   }

//   render() {
//     if (this.state.note === undefined) {
//       return <p>Note dengan ID "{this.props.id}" tidak tersedia.</p>;
//     }

//     return (
//       <section>
//         <NoteDetail {...this.state.note} />
//         <div className='detail-page__action'>
//           <ActionButton title='Edit' onClick={this.props.onEditButtonHandler} icon={<FiEdit2 />} />
//           <ActionButton
//             title={this.state.note.archived ? 'Aktifkan' : 'Arsipkan'}
//             onClick={this.state.note.archived ? this.onClickUnarchiveButton : this.onClickArchiveButton}
//             icon={this.state.note.archived ? <BiArchiveOut /> : <BiArchiveIn />}
//           />
//           <ActionButton title='Hapus' onClick={this.onClickDeleteButton} icon={<FiTrash2 />} />
//         </div>
//       </section>
//     );
//   }
// }

// DetailPage.propTypes = {
//   id                     : PropTypes.string.isRequired,
//   onDeleteNoteHandler    : PropTypes.func.isRequired,
//   onArchiveNoteHandler   : PropTypes.func.isRequired,
//   onUnarchiveNoteHandler : PropTypes.func.isRequired,
//   onEditButtonHandler : PropTypes.func.isRequired
// };

// export default DetailPageWrapper;
