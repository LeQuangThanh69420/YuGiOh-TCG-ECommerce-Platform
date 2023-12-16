import { useState, useEffect, useContext } from "react";
import '../../styles/AllDeals.css'
import DealDetails from "../Shared/DealDetail";
import { searchDeal } from '../../api/apiDeal'
import Pagination from "../Shared/Pagination";
import SearchAllCards from "../Shared/SearchSelections/SearchAllCards";
import ConfirmModal from "../Shared/ConfirmModal";
import { AppData } from "../../Root";

function AllDealsBody({ deals, setDeals }) {
    const [selectedDeal, setSelectedDeal] = useState(null);
    const [isDealDetailsOpen, setDealDetailsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchObject, setSearchObject] = useState({
        name: "",
        cardTypeName: "",
        cardOriginName: "",
        cardElementName: "",
        cardRarityName: "",
    });
    const [isConfirmOpen, setConfirmOpen] = useState(false)
    const [pagedList, setPagedList] = useState([]);
    const {userData} = useContext(AppData)

    const openDealDetails = (deals) => {
        setSelectedDeal(deals);
        setDealDetailsOpen(true);
    };

    const closeDealDetails = () => {
        setSelectedDeal(null);
        setDealDetailsOpen(false);
    };

    const handleSearch = () => {
        setCurrentPage(1);
        searchDeal(
          searchObject.name,
          searchObject.cardTypeName,
          searchObject.cardOriginName,
          searchObject.cardElementName,
          searchObject.cardRarityName
        ).then((data) => {
          setDeals(data)
        });
    };

    function handleAcceptDeal(){
        
    }

    function handleConfirmOpen(){
        setConfirmOpen(true)
    }
    
    useEffect(() => {
        searchDeal(userData.myUsername).then((data) => {
            setDeals(data)
        });
    }, [])

    return (
        <>
            <div className="AllDeals-body">
                <div className="AllDeals-body-container-wrapper">
                    <div className="all-deals-header">
                        <div className="all-deals-header-text">
                            <span className="text-secondary">Avaiable</span>
                            <span className="text-primary"> Deals</span>
                        </div>
                    </div>
                    <div className="AllDeals-body-container">
                        {
                            pagedList.length ? pagedList.map((item, index) =>
                                <div className='AllDeals-deals' key={index}>
                                    <div className="AllDeals-cards" onClick={() => openDealDetails(item)}>
                                        <div className={`rarity ${item.cardRarityName}`}>
                                            {item.cardRarityName}
                                        </div>
                                        <img src={item.cardImageURL} alt="" className='AllDeals-deals-img' />
                                    </div>
                                    <div className="AllDeals-bottom">
                                        <div className="AllDeals-price">
                                            <div className="riu-coin-icon icon-9"></div>
                                            {item.price}
                                        </div>
                                        <button className="AllDeals-buy" onClick={handleConfirmOpen}>Buy</button>
                                    </div>
                                </div>
                            ) : <p className='not-found text-secondary'>
                                Sorry, we couldn't find what you want :(
                            </p>
                        }
                    </div>
                    {<Pagination currentPage={currentPage} list={deals} numberItem={10} setCurrentPage={setCurrentPage} setPagedList={setPagedList} />}
                </div>
            </div>
            <DealDetails isOpen={isDealDetailsOpen} selectedDeal={selectedDeal} onClose={closeDealDetails} onBuy={handleConfirmOpen}/>
            <ConfirmModal isOpen={isConfirmOpen} title={<span>Purchase Deal</span>} content={<span>Are you sure you want to purchase this deal</span>} setIsOpen={setConfirmOpen} onOK={handleAcceptDeal} />
        </>
    )
}

export default AllDealsBody