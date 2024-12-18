import React from "react";
import ItemNote from "./ItemNote";
import PropTypes from "prop-types";

const ListNote = ({notes}) => {
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
                            Tidak ada catatan yang tersedia.
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