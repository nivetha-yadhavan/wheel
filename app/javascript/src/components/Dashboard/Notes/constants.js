import ProfilePicture from "images/ProfilePicture";
import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: "",
  tags: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup.object().required("Assigned Contacts is required"),
  tags: yup.object().required("Tags is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const TAGS = [
  { value: "gettingstarted", label: "Getting Started" },
  { value: "onboarding", label: "Onboarding" },
  { value: "userflow", label: "User Flow" },
  { value: "ux", label: "UX" },
  { value: "bugs", label: "Bugs" },
  { value: "v2", label: "V2" },
];

export const CONTACTS = [
  { value: "oliversmith", label: "Oliver Smith" },
  { value: "ronaldrichards", label: "Ronald Richards" },
  { value: "jacobjones", label: "Jacob Jones" },
];

export const NOTES = [
  {
    id: 0,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Getting Started",
    status: "Created",
    createdAt: "2 hours ago",
    createdBy: "Oliver Smith",
    profilePicture: ProfilePicture,
  },
  {
    id: 1,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Getting Started",
    status: "Drafted",
    createdAt: "2 hours ago",
    createdBy: "Oliver Smith",
    profilePicture: ProfilePicture,
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Getting Started",
    status: "Drafted",
    createdAt: "2 hours ago",
    createdBy: "Oliver Smith",
    profilePicture: ProfilePicture,
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    desc: '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    executionStatus: "Getting Started",
    status: "Drafted",
    createdAt: "2 hours ago",
    createdBy: "Oliver Smith",
    profilePicture: ProfilePicture,
  },
];
