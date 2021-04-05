/** @format */

import validator from "validator";
import { isValid } from "driver-license-validator";

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

export const ValidateStudentNumber = (props) => {
  const { studentNumber } = props;
  if (validator.isEmpty(studentNumber)) {
    return `Student Number must not be empty.`;
  } else if (!validator.isLength(studentNumber, { min: 9, max: 9 })) {
    return `Student Number must be 9 digits long.`;
  } else return "";
};

export const ValidateLicense = (props) => {
  const { license } = props;
  if (validator.isEmpty(license)) {
    return `Driver's License must not be empty.`;
  } else if (!validator.isLength(license, { min: 4 })) {
    return `Driver's License must be at least 5 characters long.`;
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
