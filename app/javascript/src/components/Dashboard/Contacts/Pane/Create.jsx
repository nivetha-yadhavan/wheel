import React from "react";

import { Pane, Typography } from "neetoui";

import ContactForm from "./Form";

import { CONTACTS_FORM_INITIAL_FORM_VALUES } from "../constants";

export default function NewContactPane({ showPane, setShowPane }) {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <ContactForm
        onClose={onClose}
        contact={CONTACTS_FORM_INITIAL_FORM_VALUES}
        isEdit={false}
      />
    </Pane>
  );
}
