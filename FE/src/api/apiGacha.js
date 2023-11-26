import API_ROUTES from "../constants/apiRoutes";

const API_URL = import.meta.env.VITE_API_URL;

export const gacha = async (username) => {
  const respone = await fetch(
    `${API_URL}${API_ROUTES.GACHA}?Username=${username}`
  );
  return respone;
};
