import API from "./api";

export const registerUser = (data) => {
  return API.post("/auth/register", data);
};

//eslintrc.js
module.exports = {
  root: true,
  extends: '@react-native',
  parserOptions: {
  requireConfigFile: false,
},
};
