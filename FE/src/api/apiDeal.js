import API_ROUTES from "../constants/apiRoutes";

const API_URL = import.meta.env.VITE_API_URL;

export const searchDeal = async (
  sellUsername = '',
  cardName = '',
  type = '',
  origin = '',
  element = '',
  rarity = '',
  priceFrom = '',
  priceTo = '',
  dataFrom = '',
  dateTo = ''
) => {
  const response = await fetch(
    `${API_URL}${API_ROUTES.SEARCH_DEAL}?SellUsername=${sellUsername}&CardName=${cardName}&CardTypeName=${type}&CardOriginName=${origin}&CardElementName=${element}&CardRarityName=${rarity}&PriceFrom=${priceFrom}&PriceTo=${priceTo}&DateFrom=${dataFrom}&DateTo=${dateTo}`
  );
  return response;
};

export const getBoughtDeals = async (username) => {
  const response = fetch(
    `${API_URL}${API_ROUTES.GET_BOUGHT_DEAL}?Username=${username}`
  );
  return response;
};

export const getSoldDeals = async (username) => {
  const response = fetch(
    `${API_URL}${API_ROUTES.GET_SOLD_DEAL}?Username=${username}`
  );
  return response;
};

export const createDeal = async (sellUsername, userCardId, price) => {
  const response = fetch(`${API_URL}${API_ROUTES.CREATE_DEAL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sellUsername: sellUsername,
      userCardId: userCardId,
      price: price,
    }),
  });
  return response;
};

export const editDeal = async (sellUsername, dealId, userCardId, price) => {
  const response = async () => {
    fetch(`${API_URL}${API_ROUTES.EDIT_DEAL}`, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sellUsername: sellUsername,
        dealId: dealId,
        userCardId: userCardId,
        price: price,
      }),
    });
  };
  return response;
};

export const deleteDeal = async (sellUsername, dealId) => {
  const response = fetch(`${API_URL}${API_ROUTES.DELETE_DEAL}`, {
    method: "DELETE",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sellUsername: sellUsername,
      dealId: dealId,
    }),
  });
  return response;
};
