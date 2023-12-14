import { useState } from "react";

import SearchOption from "./SearchOption";

import "./../../../styles/SearchBar.css";

export default function SearchOptionButton({ listSearchOptions, searchObject, setData, onSearch }) {

    const [isDisplay, setIsDisplay] = useState(false);
    const [openedOptionId, setOpenedOptionId] = useState();

    const handleDisplaySearchOption = () => {
        setIsDisplay(!isDisplay);
    };

    const handleReset = () => {
        for (const key in searchObject) {
            setData(prev => ({
                ...prev,
                [key]: ''
            }))
        }
    }

    const handleSearch = () => {
        setIsDisplay(false);
        onSearch();
    }

    return (
        <div className="option-button-container">
            <div
                className="search-option"
                onClick={handleDisplaySearchOption}
            ></div>
            {isDisplay && <div className="search-options-container">
                <div className="search-options-wrapper">
                    {listSearchOptions.map((option) =>
                        <SearchOption  
                            searchName={option.search_name}
                            dataKey={option.data_key}
                            apiRoute={option.api_route}
                            chosenOption={searchObject[option.data_key]}
                            setData={setData}
                            isOpen={option.id === openedOptionId}
                            setIsOpen={() => {
                                if(openedOptionId === option.id) {
                                    setOpenedOptionId(undefined);
                                } else {
                                    setOpenedOptionId(option.id);
                                }
                            }}
                            key={option.id}
                        />
                    )}
                </div>
                <div className="reset-apply-buttons">
                    <button className="button-2" onClick={handleReset}>Reset</button>
                    <button onClick={handleSearch}>Apply</button>
                </div>
            </div>}
        </div>
    );
}
