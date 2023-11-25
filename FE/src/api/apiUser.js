import API_ROUTES from "../constants/apiRoutes";

const API_URL = import.meta.env.VITE_API_URL

export const getMoney = async (username) => {
    const response = await fetch(`${API_URL}${API_ROUTES.GET_MONEY}?Username=${username}`);
    const data = await response.json();
    return data.money;
}