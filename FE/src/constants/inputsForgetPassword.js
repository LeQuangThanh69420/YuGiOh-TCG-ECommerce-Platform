const INPUT_FORGET_PASSWORD = [
  {
    id: 1,
    type: "text",
    label: "Enter your username",
    icon_class_name: "person",
    regex: /^.{8,16}$/,
    error_message: "User name must be 8-16 characters",
    data_key: "recoveryUsername",
  },
  {
    id: 2,
    type: "email",
    label: "Enter recovery email",
    icon_class_name: "mail",
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    error_message: "Email must be in this format abc@xyz.ijk",
    data_key: "recoveryEmail",
  },
];

export default INPUT_FORGET_PASSWORD;
