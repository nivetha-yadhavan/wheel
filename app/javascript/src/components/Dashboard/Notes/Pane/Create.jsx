import React from "react";

import { Pane, Typography } from "neetoui";

import NoteForm from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

export default function NewNotePane({ showPane, setShowPane }) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Note
        </Typography>
      </Pane.Header>
      <NoteForm
        onClose={onClose}
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        isEdit={false}
      />
    </Pane>
  );
}
