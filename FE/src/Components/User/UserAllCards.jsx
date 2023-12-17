import { useContext, useEffect, useState } from "react";

import SearchAllCards from "../Shared/SearchSelections/SearchAllCards";

import { AppData } from "../../Root";

import "./../../styles/UserAllCards.css";
import {
  getOwnedCardsSeperate,
  getOwnedCardsStack,
} from "../../api/apiUserCard";
import Pagination from "../Shared/Pagination";
import ReusableCard from "../Shared/ReusableCard";
import CardDetails from "../Shared/CardDetails";
import FormModal from "../Shared/FormModal";
import Input from "../Shared/Input/Input";
import { createDeal } from "../../api/apiDeal";

export default function UserAllCards() {
  const { userData, setType, setMessage, showToast } = useContext(AppData);

  const [isStack, setIsStack] = useState(false);
  const [cards, setCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const [searchObject, setSeachObject] = useState({
    cardName: "",
    cardTypeName: "",
    cardOriginName: "",
    cardElementName: "",
    cardRarityName: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isAddingDeal, setIsAddingDeal] = useState(false);
  const [cardSelected, setCardSelected] = useState();
  const [dealPrice, setDealPrice] = useState(0);

  const handleToggleViewOption = () => {
    setIsStack(!isStack);
    setCurrentPage(1)
  };

  const handleSearchCard = () => {
    if (isStack) {
      getOwnedCardsStack(
        userData.username,
        searchObject.cardName,
        searchObject.cardTypeName,
        searchObject.cardOriginName,
        searchObject.cardElementName,
        searchObject.cardRarityName
      ).then((data) => {
        setCards(data);
      });
    } else {
      getOwnedCardsSeperate(
        userData.username,
        searchObject.cardName,
        searchObject.cardTypeName,
        searchObject.cardOriginName,
        searchObject.cardElementName,
        searchObject.cardRarityName
      ).then((data) => {
        setCards(data);
      });
    }
  };

  const handleOpenCardDetail = (card) => {
    setCardSelected(card);
    setIsOpen(true);
  };

  const handleAddDeal = () => {
    setIsAddingDeal(true)
  };

  const handleCreateDeal = async () => {
    if (parseInt(dealPrice)) {
      const response = await createDeal(userData.username, cardSelected.userCardId, parseInt(dealPrice))
      response.json().then(data => {
        if (response.status === 200) {
          setType('toast-success')
          setIsAddingDeal(false)
          setIsOpen(false);
          handleSearchCard();
        } else {
          setType('toast-error')
        }
        setMessage(data.message);
        showToast();
      })
    }
  }

  useEffect(() => {
    handleSearchCard();
  }, [isStack]);

  useEffect(() => {
    getOwnedCardsSeperate(userData.username).then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <div className="user-allcards-screen">
      <div className="user-anything-wrapper">
        <div className="user-anything-title">
          <div className="cards-management-wrapper">
            <p>
              <span className="text-primary">Cards</span>{" "}
              <span className="text-secondary"> Management</span>
            </p>
            <div
              className="user-cards-view-option"
              onClick={handleToggleViewOption}
            >
              <div
                className={`${!isStack ? "cards-stack" : "cards-seperate"
                  } icon-8`}
              ></div>
              {!isStack ? (
                <span className="text-third">Stack</span>
              ) : (
                <span className="text-third">Seperate</span>
              )}
            </div>
          </div>
          <SearchAllCards
            searchObject={searchObject}
            setData={setSeachObject}
            onSearch={handleSearchCard}
          />
        </div>
        <div className="user-anything-container">
          {cards.length ? displayCards.map((card, index) => (
            <ReusableCard
              key={index}
              card={card}
              onClick={() => handleOpenCardDetail(card)}
            />
          )) : 
            <p className="no-data-text">There is no result matching with your search options :(</p>
          }
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          numberItem={15}
          list={cards}
          setPagedList={setDisplayCards}
        />
      </div>
      <FormModal
        title={
          <span className="text-secondary">
            Create a <span className="text-primary">Deal</span>
          </span>
        }
        isDisplay={isAddingDeal}
        inputs={[{
          id: 1,
          label: "Enter price for this deal",
          type: 'number',
        }]}
        renderInput={(input) => <Input label={input.label} type={input.type} setData={(price) => setDealPrice(price)} key={input.id} />}
        setIsDisplay={setIsAddingDeal}
        onSubmit={handleCreateDeal}
      />
      <CardDetails
        isOpen={isOpen}
        selectedCard={cardSelected}
        onClose={() => setIsOpen(false)}
        isManaging
        onAddDeal={handleAddDeal}
      />
    </div>
  );
}
