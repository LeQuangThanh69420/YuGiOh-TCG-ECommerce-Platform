import API_ROUTES from "../constants/apiRoutes";

const API_URL = import.meta.env.VITE_API_URL;

export const searchDeal = async (
  sellUsername,
  cardName,
  type,
  origin,
  element,
  rarity,
  priceFrom,
  priceTo,
  dataFrom,
  dateTo
) => {
  const response = await fetch(
    `${API_URL}${API_ROUTES}?SellUsername=${sellUsername}&CardName=${cardName}&CardTypeName=${type}&CardOriginName=${origin}&CardElementName=${element}&CardRarityName=${rarity}&PriceFrom=${priceFrom}&PriceTo=${priceTo}&DateFrom=${dataFrom}&DateTo=${dateTo}`
  );
  return response;
};
