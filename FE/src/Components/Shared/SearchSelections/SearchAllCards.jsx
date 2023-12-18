import { ALL_CARDS_SEARCH_TEXT, ALL_CARDS_SEARCH_OPTIONS } from "../../../constants/allCards";

import SearchOptionButton from "./SearchOptionButton";
import SearchText from "./SearchText";

import "./../../../styles/SearchBar.css";

export default function SearchAllCards({ searchObject, setData, onSearch }) {
  return (
    <div className="search-bar-container">
      {ALL_CARDS_SEARCH_TEXT.map((searchText) => (
        <SearchText
          key={searchText.id}
          inputValue={searchObject[searchText.data_key]}
          searchLabel={searchText.search_label}
          textDataKey={searchText.data_key}
          searchObject={searchObject}
          setData={setData}
          onSearch={onSearch}
        />
      ))}
      <SearchOptionButton
        listSearchOptions={ALL_CARDS_SEARCH_OPTIONS}
        searchObject={searchObject}
        setData={setData}
        onSearch={onSearch}
      />
    </div>
  );
}
