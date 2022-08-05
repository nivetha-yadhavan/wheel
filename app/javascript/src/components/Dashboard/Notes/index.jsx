import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import Block from "./Block";
import { NOTES } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [notes, setNotes] = useState(NOTES);
  const [selectedNoteId, setSelectedNoteId] = useState(-1);

  const handleDelete = () => {
    try {
      const updatedNotes = notes.filter(note => note.id !== selectedNoteId);
      setNotes(updatedNotes);
      setShowDeleteAlert(false);
      Toastr.success("Note deleted successfully.");
    } catch (error) {
      logger.error(error);
    }
  };

  return (
    <>
      <Menu showMenu={showMenu}></Menu>
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
        {notes.length ? (
          <div className="mt-2 flex w-full flex-col">
            {notes.map(note => (
              <Block
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
