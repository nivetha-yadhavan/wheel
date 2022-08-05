import React from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose, handleDelete }) => (
  <Alert
    isOpen
    onSubmit={handleDelete}
    onClose={onClose}
    message="Are you sure you want to continue? This action cannot be undone."
    title="Delete note?"
  />
);

export default DeleteAlert;
