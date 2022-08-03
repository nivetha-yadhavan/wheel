import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { NOTES as notes } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Note from "./Note";
import NotesMenu from "./NotesMenu";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [notesList, setNotes] = useState(notes);
  const [selectedNoteId, setSelectedNoteId] = useState();

  const handleDelete = () => {
    try {
      const notes = notesList.filter(c => c.id !== selectedNoteId);
      setNotes(notes);
      setShowDeleteAlert(false);
      Toastr.success("Note deleted successfully.");
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <>
      <NotesMenu showMenu={showMenu}></NotesMenu>
      <Container>
        <Header
          title="All Notes"
          menuBarToggle={() => {
            setShowMenu(!showMenu);
          }}
          actionBlock={
            <Button
              onClick={() => setShowNewNotePane(true)}
              label="Add New Note"
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notesList.length ? (
          <div className="mt-2 flex w-full flex-col">
            {notesList.map(note => (
              <Note
                note={note}
                onDeleteClick={id => {
                  setShowDeleteAlert(true);
                  setSelectedNoteId(id);
                }}
                key={note.id}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          fetchNotes={notesList}
        />
        {showDeleteAlert && (
          <DeleteAlert
            onClose={() => setShowDeleteAlert(false)}
            handleDelete={handleDelete}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
