import React from "react";

import ProfilePicture from "images/ProfilePicture";
import { MenuVertical } from "neetoicons";
import { Avatar, Dropdown, Typography } from "neetoui";
import * as yup from "yup";

export const CONTACTS_TABLE_COLUMN_DATA = [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: name => (
      <div className="flex flex-row items-center">
        <Avatar
          user={{ imageUrl: ProfilePicture, name }}
          size="small"
          className="mr-2"
        />
        <div className="flex flex-col">
          <Typography style="h5">{name}</Typography>
          <Typography style="body3" className="neeto-ui-text-gray-600">
            Owner
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "30%",
  },

  {
    title: "",
    key: "actions",
    width: "10%",
    render: () => (
      <div className="flex flex-row items-center">
        <Dropdown buttonStyle="text" icon={MenuVertical} position="bottom-end">
          <li>Edit</li>
          <li>Delete</li>
        </Dropdown>
      </div>
    ),
  },
];

export const CONTACTS = [
  {
    name: "Ronald Richards",
    email: "albert@borer.com",
    createdAt: "Feb 05,2021",
  },
  {
    name: "Jacob Jones",
    email: "albert@borer.com",
    createdAt: "Feb 05,2021",
  },
];

export const CONTACTS_TABLE_ROW_DATA = Array(50).fill(CONTACTS).flat();

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  role: "",
};

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("Fisrt Name is required"),
  lastName: yup.string().required("Last Name is required"),
  emailAddress: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  role: yup.object().required("Role is required"),
});

export const ROLES = [
  { value: "owner", label: "Owner" },
  { value: "admin", label: "Admin" },
  { value: "developer", label: "Developer" },
];
