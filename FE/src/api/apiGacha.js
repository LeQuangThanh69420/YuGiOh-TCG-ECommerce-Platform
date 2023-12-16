import API_ROUTES from "../constants/apiRoutes";
import { HEADER } from "../constants/apiHeaderConfig";

const API_URL = import.meta.env.VITE_API_URL;

export const gacha = async (username, pack) => {
  const respone = await fetch(
    `${API_URL}${API_ROUTES.GACHA}?Username=${username}&Pack=${pack}`,
    {
      method: 'GET',
      headers: HEADER(),
    }
  );
  return respone;
};
