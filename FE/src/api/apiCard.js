import API_ROUTES from "../constants/apiRoutes";

const API_URL = import.meta.env.VITE_API_URL;

export const searchCard = async (name, type, origin, element, rarity) => {
  const url = `${API_URL}${API_ROUTES.SEARCH_CARD}?CardName=${name}&CardTypeName=${type}&CardOriginName=${origin}&CardElementName=${element}&CardRarityName=${rarity}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};


//something la 1 route ben trong API_ROUTES
export const getSomeThingOfCard = async (someThing) => {
    const url = `${API_URL}${API_ROUTES[someThing]}`;
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
}


