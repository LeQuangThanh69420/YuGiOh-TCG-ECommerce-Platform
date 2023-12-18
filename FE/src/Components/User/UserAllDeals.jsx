import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import { deleteDeal, searchDeal } from "../../api/apiDeal";
import { checkSession } from "../../utils/checkSession";
import dateTimeFormat from "../../utils/dateTimeFormat";

import { AppData } from "../../Root";
import Pagination from "../Shared/Pagination";
import DealDetails from "../Shared/DealDetail";
import ConfirmModal from "../Shared/ConfirmModal";
import DealModal from "./DealModal";

import "./../../styles/UserAllDeals.css";

export default function UserAllDeals() {
  const { userData, setType, setMessage, showToast } = useContext(AppData);
  const navigate = useNavigate();

  const [deals, setDeals] = useState([]);
  const [displayDeals, setDisplayDeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDeal, setSelectedDeal] = useState();
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [hoveredDeal, setHoveredDeal] = useState();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleOpenDetail = (deal) => {
    setIsOpenDetail(true);
    setSelectedDeal(deal);
  };

  const handleClickEditDeal = (event) => {
    event.stopPropagation();
    console.log("edit");
  };

  const handleClickDeleteDeal = (event, deal) => {
    event.stopPropagation();
    setIsOpenDeleteModal(true)
    setSelectedDeal(deal);
  };

  const handleDeleteDeal = async () => {
    const response = await deleteDeal(userData.username, selectedDeal.dealId)
    response.json().then(data => {
      if (response.status === 200) {
        setType('toast-success');
        searchOwnedDeal();
      } else {
        setType('toast-error')
      }
      setMessage(data.message);
      showToast();
    })
  }

  const handleHoverDeal = (deal) => {
    setHoveredDeal(deal);
  };

  const searchOwnedDeal = () => {
    searchDeal(undefined, userData.username).then((data) => {
      setDeals(data);
    });
  }

  useEffect(() => {
    if (!checkSession()) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    searchOwnedDeal();
  }, []);

  useEffect(() => {
    if (!isOpenDeleteModal) {
      if (!isOpenDetail) {
        setSelectedDeal(null)
      }
    }
  }, [isOpenDeleteModal, isOpenDetail])

  return (
    <div className="user-screen">
      <div className="user-anything-wrapper">
        <div className="user-anything-title">
          <p>
            <span className="text-primary">Deals</span>
            <span className="text-secondary"> Management</span>
          </p>
          <div className="add-new-deal">
            <div className="plus icon-5"></div>
            <span className="text-third">Add new Deal</span>
          </div>
        </div>
        <div className="user-anything-container">
          {deals.length &&
            displayDeals.map((deal) => (
              <div
                className="user-all-deals-deal"
                key={deal.dealId}
                onClick={() => handleOpenDetail(deal)}
                onMouseOver={() => handleHoverDeal(deal)}
                onMouseOut={() => setHoveredDeal(null)}
              >
                {hoveredDeal === deal && (
                  <div className="edit-delete-deal">
                    <div className="edit-delete-icon-wrapper">
                      <div
                        className="edit icon-5"
                        onClick={(event) => handleClickEditDeal(event)}
                      ></div>
                    </div>
                    <div className="edit-delete-icon-wrapper">
                      <div
                        className="delete icon-5"
                        onClick={(event) => handleClickDeleteDeal(event, deal)}
                      ></div>
                    </div>
                  </div>
                )}
                <div className="user-all-deals-deal-card">
                  <div className={`rarity ${deal.cardRarityName}`}>
                    {deal.cardRarityName}
                  </div>
                  <img
                    src={deal.cardImageURL}
                    className="user-all-deals-deal-img"
                  />
                </div>
                <div className="AllDeals-bottom">
                  <div className="AllDeals-price">
                    <div className="riu-coin-icon icon-9"></div>
                    <span className="text-sixth">{deal.price}</span>
                  </div>
                  <span className="AllDeals-time">
                    {dateTimeFormat(deal.createDate).date}
                  </span>
                </div>
              </div>
            ))}
        </div>
        <Pagination
          list={deals}
          numberItem={15}
          setCurrentPage={setCurrentPage}
          setPagedList={setDisplayDeals}
          currentPage={currentPage}
        />
      </div>
      <DealDetails
        isOpen={isOpenDetail}
        selectedDeal={selectedDeal}
        onClose={() => setIsOpenDetail(false)}
      />
      <ConfirmModal
        isOpen={isOpenDeleteModal}
        setIsOpen={setIsOpenDeleteModal}
        title={
          <span className="text-secondary">
            Delete <span className="text-primary">Deal</span>
          </span>
        }
        content={"Are your sure you want to delete this deal?"}
        onOK={handleDeleteDeal}
      />
    </div>
  );
}
