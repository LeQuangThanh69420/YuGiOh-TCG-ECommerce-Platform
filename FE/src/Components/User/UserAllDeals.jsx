import { useContext, useEffect, useState } from "react";
import { searchDeal } from "../../api/apiDeal";
import { AppData } from "../../Root";
import Pagination from "../Shared/Pagination";
import DealDetails from "../Shared/DealDetail";

import "./../../styles/UserAllDeals.css";
import ConfirmModal from "../Shared/ConfirmModal";

export default function UserAllDeals() {
  const { userData } = useContext(AppData);

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

  const handleClickDeleteDeal = (event) => {
    event.stopPropagation();
    setIsOpenDeleteModal(true)
  };

  const handleDeleteDeal = () => {

  }

  const handleHoverDeal = (deal) => {
    setHoveredDeal(deal);
  };

  useEffect(() => {
    searchDeal(undefined, userData.username).then((data) => {
      setDeals(data);
    });
  }, []);

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
                        onClick={(event) => handleClickDeleteDeal(event)}
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
