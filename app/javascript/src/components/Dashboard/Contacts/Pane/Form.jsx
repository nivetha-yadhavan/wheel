import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACTS_FORM_VALIDATION_SCHEMA, ROLES } from "../constants";

export default function ContactForm({ onClose, contact, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    try {
      onClose();
      Toastr.success("Contact added successfully");
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={contact}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={CONTACTS_FORM_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              label="First Name"
              name="firstName"
              placeholder="Enter first name"
              className="w-full flex-grow-0"
            />
            <Input
              required
              label="Last Name"
              name="lastName"
              placeholder="Enter last name"
              className="w-full flex-grow-0"
            />
            <Input
              required
              name="emailAddress"
              placeholder="Enter your email address"
              className="w-full flex-grow-0"
              size="small"
              label="Email Address"
            />
            <Select
              isSearchable
              required
              name="role"
              placeholder="Select Role"
              className="w-full flex-grow-0"
              size="small"
              label="Role"
              options={ROLES.map(tag => ({
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
