export const logInOffReducer = (state = false, action) => {
  switch (action.type) {
    case "login":
      return true;
    default:
      return false;
  }
};
