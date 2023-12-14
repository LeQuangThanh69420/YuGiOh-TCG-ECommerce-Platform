import { useContext, useEffect, useState } from 'react'

import { getBoughtDeals } from '../../api/apiDeal';
import renderDealsRow from '../../utils/renderDealsRow';

import { HEADER } from '../../constants/userBoughtDeals';

import { AppData } from '../../Root';
import Pagination from '../Shared/Pagination';

import './../../styles/User.css'

export default function UserDealsBought() {

    const { userData } = useContext(AppData)

    const [list, setList] = useState([]);
    const [displayList, setDisplayList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getBoughtDeals(userData.username).then((data) => {
            setList(data)
        })
    }, [])

    return (
        <div className='user-anything-wrapper'>
            <div className='user-anything-title'>
                <p>
                    <span className='text-primary'>Deals</span>
                    <span className='text-secondary'> Bought</span>
                </p>
            </div>
            <div className='user-anything-list'>
                <div className='user-anything-list-header'>
                    {HEADER.map((col, index) =>
                        <div className={`list-col-${col.key}`} key={index}>
                            {col.label}
                        </div>
                    )}
                </div>
                <div className='line'></div>
                <div className='user-anything-list-body'>
                    {displayList.map((deal, dealIndex) => renderDealsRow(deal, dealIndex)).map((row) =>
                        (<div className='list-row' key={row.no}>
                            {HEADER.map((item) =>
                                <div key={item.key} className={`list-col-${item.key}`}>
                                    {row[item.data_key]}
                                </div>
                            )}
                        </div>)
                    )}
                </div>
            </div>
            <div className='user-anything-footer'>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} numberItem={10} list={list} setPagedList={setDisplayList} />
            </div>
        </div>
    )
}
