import API_ROUTES from "./apiRoutes";

export const ALL_CARDS_SEARCH_OPTIONS = [
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
];


export const ALL_CARDS_SEARCH_TEXT = [
    {
        id: 1,
        data_key: 'name',
        search_label: 'Search cards with name',
    }
]