/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { searchCard } from "../../api/apiCard";

import CardDetails from "../Shared/CardDetails";
import Pagination from "../Shared/Pagination";
import SearchBar from "../Shared/SearchSelections/SearchBar";

import "./../../styles/CardDetails.css";
import "./../../styles/Body.css";

function Body({ cards, setCards }) {
  const [isCardDetailsOpen, setCardDetailsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchObject, setSearchObject] = useState({
    name: "",
    cardTypeName: "",
    cardOriginName: "",
    cardElementName: "",
    cardRarityName: "",
  });

  const [pagedList, setPagedList] = useState([]);

  const openDetails = (cards) => {
    setSelectedCard(cards);
    setCardDetailsOpen(true);
  };

  const closeDetails = () => {
    setSelectedCard(null);
    setCardDetailsOpen(false);
  };

  const handleSearch = () => {
    searchCard(
      searchObject.name,
      searchObject.cardTypeName,
      searchObject.cardOriginName,
      searchObject.cardElementName,
      searchObject.cardRarityName
    ).then((data) => {
      setCards(data)
    });
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/Card/searchCard")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, [searchObject]);

  return (
    <>
      <div className="body-session">
        <div className="body-container-wrapper">
          <div className="all-cards-header">
            <div className="all-cards-header-title">
              <span className="text-secondary">Avaiable</span>
              <span className="text-primary"> Cards</span>
            </div>
            <SearchBar
              searchObject={searchObject}
              setData={setSearchObject}
              onSearch
            />
          </div>
          <div className="body-container">
            {pagedList.length ? (
              pagedList.map((item, index) => (
                <div
                  className="cards"
                  key={index}
                  onClick={() => openDetails(item)}
                >
                  <div className={`rarity ${item.cardRarityName}`}>
                    {item.cardRarityName}
                  </div>
                  <img src={item.cardImageURL} alt="" className="cards-img" />
                </div>
              ))
            ) : (
              <p className="not-found text-secondary">
                Sorry, we couldn't find what you want :(
              </p>
            )}
          </div>
          <Pagination
            list={cards}
            numberItem={10}
            setPagedList={setPagedList}
          />
        </div>
      </div>

      <CardDetails
        isOpen={isCardDetailsOpen}
        selectedCard={selectedCard}
        onClose={closeDetails}
      />
    </>
  );
}

export default Body;
