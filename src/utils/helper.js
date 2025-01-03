export const Validation = (email, password) => {
  let checkPassword =
    /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    );
  let checkMail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
  if (!checkMail) {
    return "Email is invalid";
  }
  if (!checkPassword) {
    return "Password is invalid";
  }

  return null;
};

export const errorMessage = (errorCode) => {
  let message;
  console.log(errorCode === "auth/email-already-in-use");
  switch (errorCode) {
    case "auth/email-already-in-use":
      message =
        "This email is already registered. Please sign in or use a different email.";
      break;
    case "auth/invalid-credential":
      message = "Invalid credential";
      break;
    default:
      message = "Something went wrong";
  }
  return message;
};
