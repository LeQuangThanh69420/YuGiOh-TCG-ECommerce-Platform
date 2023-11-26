import API_ROUTES from "../constants/apiRoutes";

const API_URL = import.meta.env.VITE_API_URL;

export const getMoney = async (username) => {
  const response = await fetch(
    `${API_URL}${API_ROUTES.GET_MONEY}?Username=${username}`
  );
  const data = await response.json();
  return data.money;
};

export const logOut = async (cleanUpData) => {
  localStorage.removeItem("userData");
  cleanUpData();
};

export const forgetPassword = async (username, email) => {
  try {
    const response = await fetch(`${API_URL}${API_ROUTES.FORGET_PASSWORD}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
      headers: {
        "Content-Type": "application/json",
      },
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
      headers: {
        "Content-Type": "application/json",
      },
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

