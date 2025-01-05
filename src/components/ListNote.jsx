import React, { useContext } from "react";
import ItemNote from "./ItemNote";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";

const ListNote = ({notes}) => {
    const {languageSelect} = useContext(LocaleContext);
    return (
        <div>
            {
                notes?.length > 0 ? (
                    <section className="notes-list">
                        {notes.map(({id, title, body, createdAt}) => (
                            <ItemNote key={id} id={id} title={title} body={body} createdAt={createdAt} />
                        )
                    )}
                    </section>
                ) : (
                    <section className="notes-list-empty">
                        <p className="notes-list__empty">
                            {languageSelect({en: 'Not Available Notes', id: 'Tidak ada catatan yang tersedia.'})}
                        </p>
                    </section>
                )
            }
        </div>
    );
}


ListNote.propTypes = {
    notes   : PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListNote;