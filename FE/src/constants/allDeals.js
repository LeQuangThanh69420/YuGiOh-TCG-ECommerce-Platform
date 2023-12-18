import API_ROUTES from "./apiRoutes";
import dateCalculator from "../utils/dateCalculator";

export const ALL_CARDS_SEARCH_TEXT = [
  {
    id: 1,
    data_key: "cardName",
    search_label: "Search cards with Cardname",
  },
];

export const ALL_DEAL_SEARCH_TEXT = [
  {
    id: 1,
    data_key: "sellUsername",
    search_label: "Search deals with sell Username",
  },
];

export const ALL_DEAL_SEARCH_OPTIONS = [
  {
    id: 1,
    data_key: "cardTypeName",
    search_name: "Type",
    api_route: API_ROUTES.GET_TYPE,
  },
  {
    id: 2,
    data_key: "cardOriginName",
    search_name: "Origin",
    api_route: API_ROUTES.GET_ORIGIN,
  },
  {
    id: 3,
    data_key: "cardElementName",
    search_name: "Element",
    api_route: API_ROUTES.GET_ELEMENT,
  },
  {
    id: 4,
    data_key: "cardRarityName",
    search_name: "Rarity",
    api_route: API_ROUTES.GET_RARITY,
  },
  {
    id: 5,
    data_key: "dateFromTo",
    search_name: "Date range",
    selections: [
      {
        dateFromTo: "Today",
      },
      {
        dateFromTo: "This week",
      },
      {
        dateFromTo: "These 2 weeks",
      },
      {
        dateFromTo: "This month",
      },
      {
        dateFromTo: "This year",
      },
    ],
  },
  {
    id: 6,
    data_key: "priceFromTo",
    search_name: "Price range",
    selections: [
      {
        priceFromTo: "0-100",
      },
      {
        priceFromTo: "100-500",
      },
      {
        priceFromTo: "500-1000",
      },
      {
        priceFromTo: "1000-3000",
      },
      {
        priceFromTo: "3000+",
      },
    ],
  },
];
