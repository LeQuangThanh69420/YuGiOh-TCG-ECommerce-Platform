/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { searchCard } from "../../api/apiCard";

import CardDetails from "../Shared/CardDetails";
import Pagination from "../Shared/Pagination";
import SearchAllCards from "../Shared/SearchSelections/SearchAllCards";

import "./../../styles/CardDetails.css";
import "./../../styles/Body.css";

function Body({ cards, setCards }) {
  const [isCardDetailsOpen, setCardDetailsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
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
    setCurrentPage(1);
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
    searchCard().then(data => {
      setCards(data)
    })
  }, []);

  return (
    <>
      <div className="body-session">
        <div className="body-container-wrapper">
          <div className="all-cards-header">
            <div className="all-cards-header-title">
              <span className="text-secondary">Avaiable</span>
              <span className="text-primary"> Cards</span>
            </div>
            <SearchAllCards
              searchObject={searchObject}
              setData={setSearchObject}
              onSearch={handleSearch}
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
          {<Pagination currentPage={currentPage} list={cards} numberItem={10} setCurrentPage={setCurrentPage} setPagedList={setPagedList} />}
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
