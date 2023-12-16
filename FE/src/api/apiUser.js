import API_ROUTES from "../constants/apiRoutes";
import { HEADER } from "../constants/apiHeaderConfig";

const API_URL = import.meta.env.VITE_API_URL;

export const getMoney = async (username) => {
  const response = await fetch(
    `${API_URL}${API_ROUTES.GET_INFO}?Username=${username}`
  );
  const data = await response.json();
  return data.money;
};

export const getEmail = async (username) => {
  const response = await fetch(
    `${API_URL}${API_ROUTES.GET_INFO}?Username=${username}`
  );
  const data = await response.json();
  return data.email;
}

export const logOut = async (cleanUpData) => {
  localStorage.setItem("userData", '{}');
  cleanUpData();
};

export const forgetPassword = async (username, email) => {
  try {
    const response = await fetch(`${API_URL}${API_ROUTES.FORGET_PASSWORD}`, {
      method: "POST",
      headers: HEADER(),
      body: JSON.stringify({
        username: username,
        email: email,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}${API_ROUTES.LOGIN}`, {
      method: "POST",
      headers: HEADER(),
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (username, password, email) => {
  try {
    const response = await fetch(`${API_URL}${API_ROUTES.REGISTER}`, {
      method: "POST",
      headers: HEADER(),
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const changeEmail = async (
  username,
  password,
  currentEmail,
  newEmail
) => {
  const response = await fetch(`${API_URL}${API_ROUTES.CHANGE_EMAIL}`, {
    method: "POST",
    headers: HEADER(),
    body: JSON.stringify({
      username: username,
      currentPassword: password,
      currentEmail: currentEmail,
      newEmail: newEmail,
    }),
  });
  return response;
};

export const changePassword = async (
  username,
  currentPassword,
  newPassword
) => {
  const response = await fetch(`${API_URL}${API_ROUTES.CHANGE_PASSWROD}`, {
    method: "POST",
    headers: HEADER(),
    body: JSON.stringify({
      username: username,
      currentPassword: currentPassword,
      newPassword: newPassword,
    }),
  });
  return response;
};

export const changeAvatarURL = async (username, newAvatarURL) => {
  const response = await fetch(`${API_URL}${API_ROUTES.CHANGE_AVATAR}`, {
    method: "POST",
    headers: HEADER(),
    body: JSON.stringify({
      username: username,
      newAvatarURL: newAvatarURL,
    }),
  });

  return response;
};
