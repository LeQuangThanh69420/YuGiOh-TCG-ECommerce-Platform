import API_ROUTES from "../constants/apiRoutes";
import { HEADER } from "../constants/apiHeaderConfig";

const API_URL = import.meta.env.VITE_API_URL;

export const getOwnedCardsSeperate = async (username, cardName = '', type = '', origin = '', element = '', rarity = '') => {
    const response = await fetch(`${API_URL}${API_ROUTES.USERCARD_SEARCH_OWNED_SEPARATE}/?Username=${username}&CardName=${cardName}&CardTypeName=${type}&CardOriginName=${origin}&CardElementName=${element}&CardRarityName=${rarity}`);
    return response.json();
}

export const getOwnedCardsStack = async (username, cardName = '', type = '', origin = '', element = '', rarity = '') => {
    const response = await fetch(`${API_URL}${API_ROUTES.USERCARD_SEARCH_OWNED_STACK}/?Username=${username}&CardName=${cardName}&CardTypeName=${type}&CardOriginName=${origin}&CardElementName=${element}&CardRarityName=${rarity}`);
    return response.json();
}