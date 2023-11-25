import { useState, useEffect } from "react";
import '../../styles/AllDeals.css'
import DealDetails from "./DealDetail";
import DuRiuLogo from '../../asset/logoDuRiuImg2.png'

function AllDealsBody({ deals, setDeals }) {
    const [selectedDeal, setSelectedDeal] = useState(null);
    const [isDealDetailsOpen, setDealDetailsOpen] = useState(false);

    const openDealDetails = (deals) => {
        setSelectedDeal(deals);
        setDealDetailsOpen(true);
    };

    const closeDealDetails = () => {
        setSelectedDeal(null);
        setDealDetailsOpen(false);
    };

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/Deal/searchDeal')
            .then(res => res.json())
            .then(data => {
                setDeals(data)
            })
    }, [])

    function checkRarity(selectedDeal) {
        if (selectedDeal.cardRarityName == 'R') return 'Rare'
        else if (selectedDeal.cardRarityName == 'N') return 'Normal'
        else if (selectedDeal.cardRarityName == 'SR') return 'Super Rare'
        else if (selectedDeal.cardRarityName == 'UR') return 'Ultra Rare'
        else return 'Bucac'
    }

    return (
        <>
            <div className="AllDeals-body">
                <div className="AllDeals-body-container">
                    {
                        deals.length ? deals.map((item, index) =>
                            <div className='AllDeals-deals' key={index}>
                                <div className="AllDeals-cards" onClick={() => openDealDetails(item)}>
                                    <div className={`rarity ${item.cardRarityName}`}>
                                        {item.cardRarityName}
                                    </div>
                                    <img src={item.cardImageURL} alt="" className='AllDeals-deals-img' />
                                </div>
                                <div className="AllDeals-bottom">
                                    <div className="AllDeals-price">{item.price}R$</div>
                                    <button className="AllDeals-buy">Buy</button>
                                </div>
                            </div>
                        ) : <p className='not-found'>
                            Sorry, we couldn't find what you want :(
                        </p>
                    }
                </div>
            </div>
            <DealDetails isOpen={isDealDetailsOpen} deal={
                selectedDeal && <div className="DealDetails-content">
                    <div className="DealDetails-head">
                        <div className="DealDetails-DuRiu">
                            <img src={DuRiuLogo} alt="" />
                            Deal Details
                        </div>
                        <div className="DealDetails-close" onClick={closeDealDetails}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px"><path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>
                        </div>
                    </div>
                    <div className="DealDetails-body">
                        
                    </div>
                </div>
            } />
        </>
    )
}

export default AllDealsBody