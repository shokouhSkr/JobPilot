export const validation = (values, handleErrors) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required *";
  }

  if (!values.email.trim()) {
    errors.email = "Email required *";
  } else if (!values.email.includes("@")) {
    errors.email = "Please provide a valid email address.";
  }

  if (!values.password.trim()) {
    errors.password = "Password required *";
  } else if (values.password.trim().length < 6) {
    errors.password = "The password must be a minimum of 6 characters.";
  }

  handleErrors(errors);
};
