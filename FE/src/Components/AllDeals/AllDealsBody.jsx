import { useState, useEffect } from "react";
import '../../styles/AllDeals.css'
import DealDetails from "../Shared/DealDetail";
import { searchDeal } from '../../api/apiDeal'
import Pagination from "../Shared/Pagination";

function AllDealsBody({ deals, setDeals }) {
    const [selectedDeal, setSelectedDeal] = useState(null);
    const [isDealDetailsOpen, setDealDetailsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const [pagedList, setPagedList] = useState([]);

    const openDealDetails = (deals) => {
        setSelectedDeal(deals);
        setDealDetailsOpen(true);
    };

    const closeDealDetails = () => {
        setSelectedDeal(null);
        setDealDetailsOpen(false);
    };

    function checkRarity(selectedDeal) {
        if (selectedDeal.cardRarityName == 'R') return 'Rare'
        else if (selectedDeal.cardRarityName == 'N') return 'Normal'
        else if (selectedDeal.cardRarityName == 'SR') return 'Super Rare'
        else if (selectedDeal.cardRarityName == 'UR') return 'Ultra Rare'
        else return 'Bucac'
    }

    useEffect(() => {
        searchDeal().then((data) => {
            setDeals(data)
        });
    }, [])

    return (
        <>
            <div className="AllDeals-body">
                <div className="AllDeals-body-container-wrapper">
                    <p className="all-deals-header">
                        <span className="text-secondary">Avaiable</span>
                        <span className="text-primary"> Deals</span>
                    </p>
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
                                        <button className="AllDeals-buy">Buy</button>
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
            <DealDetails isOpen={isDealDetailsOpen} selectedDeal={selectedDeal} onClose={closeDealDetails} />
        </>
    )
}

export default AllDealsBody