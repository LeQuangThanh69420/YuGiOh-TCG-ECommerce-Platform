import { useState } from "react";

import ALL_CARDS_SEARCH_OPTIONS from "./../../../constants/allCardsSeachOptions";

import SearchOption from "./SearchOption";

import "./../../../styles/SearchBar.css";

export default function SearchOptionButton({ searchObject, setData }) {

    console.log(searchObject);

    const [isDisplay, setIsDisplay] = useState(false);

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

    return (
        <div className="option-button-container">
            <div
                className="search-option"
                onClick={handleDisplaySearchOption}
            ></div>
            {isDisplay && <div className="search-options-container">
                <div className="search-options-wrapper">
                    {ALL_CARDS_SEARCH_OPTIONS.map((option) =>
                        <SearchOption
                            searchName={option.search_name}
                            dataKey={option.data_key}
                            apiRoute={option.api_route}
                            chosenOption={searchObject[option.data_key]}
                            setData={setData}
                            key={option.id}
                        />
                    )}
                </div>
                <div className="reset-apply-buttons">
                    <button className="button-2" onClick={handleReset}>Reset</button>
                    <button>Apply</button>
                </div>
            </div>}
        </div>
    );
}
