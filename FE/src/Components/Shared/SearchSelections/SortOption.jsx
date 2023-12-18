import './../../../styles/SearchBar.css'
import { SORT_OPTIONS } from '../../../constants/sortOptions'
import { useEffect, useState } from 'react'

export default function SortOption({ searchObject, setData, onSearch }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleChoseSort = (option) => {
        setData(prev => ({
            ...prev,
            sortBy: option.sort_value,
            isAsc: option.is_asc
        }))
    }

    useEffect(() => {
        onSearch();
    }, [searchObject.sortBy, searchObject.isAsc])

    return (
        <div className='sort-button-wrapper' onClick={() => setIsOpen(!isOpen)}>
            <div className='sort-icon'></div>
            {isOpen && <div className='sort-options'>
                {SORT_OPTIONS.map(option =>
                    <div className='sort-option' key={option.id} onClick={() => handleChoseSort(option)}>
                        {option.sort_name}
                        {searchObject.sortBy === option.sort_value && searchObject.isAsc === option.is_asc && <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className='sort-chosen'><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>}
                    </div>
                )}
            </div>}
        </div>
    )
}
