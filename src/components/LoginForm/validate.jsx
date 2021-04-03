/** @format */

import validator from "validator";

export const ValidateEmail = (props) => {
  const { email } = props;
  if (validator.isEmpty(email)) {
    return "Email must not be empty.";
  } else if (!validator.isEmail(email)) {
    return "Oops! Please enter a valid email.";
  } else if (validator.isEmpty(email)) {
    return "Email must not be empty.";
  } else return "";
};

export const ValidatePassword = (props) => {
  const { password } = props;
  if (validator.isEmpty(password)) {
    return `Password must not be empty.`;
  } else if (!validator.isLength(password, { min: 5 })) {
    return `Password must be at least 6 characters long.`;
  } else return "";
};
