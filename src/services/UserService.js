import { myAxios } from "./Helper";

export const loginUser = async (loginCredentials) => {
  const response = await myAxios.post("/auth/login", loginCredentials);
  return response.data;
};

export const registerUser = async (user) => {
  const response = await myAxios.post("/auth/createuser", user);
  return response.data;
};
