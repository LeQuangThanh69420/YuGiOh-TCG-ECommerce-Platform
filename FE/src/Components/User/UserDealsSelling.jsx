import { useContext, useEffect, useState } from 'react'

import { searchDeal } from '../../api/apiDeal';

import dateTimeFormat from '../../utils/dateTimeFormat';

import { AppData } from '../../Root';
import { Link } from 'react-router-dom';
import Pagination from '../Shared/Pagination';

import './../../styles/User.css'

export default function UserDealsSelling() {

  const { userData } = useContext(AppData)
  const [deals, setDeals] = useState([]);
  const [displayDeals, setDisplayDeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    searchDeal( undefined, userData.username).then(data => {
      setDeals(data)
    })
  }, [])

  return (
    <div className="user-anything-wrapper">
      <div className="user-anything-title">
        <span className="text-secondary">Selling <span className="text-primary">Deals</span></span>
        <Link className='link' to="/user/deals">Manage Your Deals</Link>
      </div>
      <div className="user-anything-container">
        {deals.length ? displayDeals.map((deal) =>
          <div className='AllDeals-deals' key={deal.dealId}>
            <div className='AllDeals-cards'>
              <div className={`rarity ${deal.cardRarityName}`}>{deal.cardRarityName}</div>
              <img src={deal.cardImageURL} className='AllDeals-deals-img' />
            </div>
            <div className='AllDeals-bottom'>
              <div className='AllDeals-price'>
                <div className='riu-coin-icon icon-9'></div>
                <span>{deal.price}</span>
              </div>
              <span className='AllDeals-time'>{dateTimeFormat(deal.createDate).date}</span>
            </div>
          </div>
        ) :
          <p className='no-data-text'>You aren't selling any deals. Let's <Link className='link' to={"/user/deals"}>Create One</Link></p>
        }
      </div>
      <div className='user-anything-footer'>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} list={deals} numberItem={10} setPagedList={setDisplayDeals} />
      </div>
    </div>
  )
}
