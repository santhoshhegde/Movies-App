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
