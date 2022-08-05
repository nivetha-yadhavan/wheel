import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import { NOTES_FORM_VALIDATION_SCHEMA, TAGS, CONTACTS } from "../constants";

export default function NoteForm({ onClose, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    try {
      onClose();
      Toastr.success("Note added successfully");
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              placeholder="Enter note title"
              className="w-full flex-grow-0"
              required
            />
            <Textarea
              label="Description"
              name="description"
              placeholder="Enter note description"
              className="w-full flex-grow-0"
              rows={1}
              required
            />
            <Select
              name="assignedContact"
              placeholder="Select Contact"
              className="w-full flex-grow-0"
              size="small"
              label="Assigned Contact"
              isSearchable
              required
              options={CONTACTS.map(contact => ({
                label: contact.label,
                value: contact.value,
              }))}
            />
            <Select
              name="tags"
              placeholder="Select Tags"
              className="w-full flex-grow-0"
              size="small"
              label="Tags"
              isSearchable
              required
              options={TAGS.map(tag => ({
                label: tag.label,
                value: tag.value,
              }))}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={() => setSubmitted(true)}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
