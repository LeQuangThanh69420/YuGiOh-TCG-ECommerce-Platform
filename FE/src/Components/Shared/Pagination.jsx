import { useEffect, useMemo, useState } from "react";

import "./../../styles/Pagination.css";

export default function Pagination({ currentPage, list, numberItem, setCurrentPage, setPagedList }) {

    const finalPage = useMemo(() => Math.ceil(list.length / numberItem), [list]);

    const genarateSibling = () => {
        let result = [];
        if (finalPage > 7) {
            switch (currentPage) {
                case 1:
                    result = [currentPage + 1, currentPage + 2];
                    break;
                case 2:
                    result = [currentPage, currentPage + 1];
                    break;
                case 4:
                    result = [
                        currentPage - 2,
                        currentPage - 1,
                        currentPage,
                        currentPage + 1,
                    ];
                    break;
                case finalPage - 3:
                    result = [
                        currentPage - 1,
                        currentPage,
                        currentPage + 1,
                        currentPage + 2,
                    ];
                    break;
                case finalPage - 1:
                    result = [currentPage - 1, currentPage];
                    break;
                case finalPage:
                    result = [currentPage - 2, currentPage - 1];
                    break;
                default:
                    result = [currentPage - 1, currentPage, currentPage + 1];
                    break;
            }
        } else if (finalPage === 7) {
            if (currentPage <= 2) {
                result = [2, 3];
            } else if (currentPage === 4) {
                result = [
                    currentPage - 2,
                    currentPage - 1,
                    currentPage,
                    currentPage + 1,
                    currentPage + 2,
                ];
            } else if (currentPage > 2 && currentPage < finalPage - 1) {
                result = [currentPage - 1, currentPage, currentPage + 1];
            } else if (currentPage >= finalPage - 1) {
                result = [finalPage - 2, finalPage - 1];
            }
        } else if (finalPage === 6) {
            if (currentPage <= 2) {
                result = [2, 3];
            } else if (currentPage > 2 && currentPage < finalPage - 1) {
                result = [2, 3, 4, 5];
            } else {
                result = [4, 5];
            }
        }
        return result;
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < finalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        const pagedList = list.slice((currentPage - 1) * numberItem, currentPage * numberItem);
        setPagedList(pagedList)
    }, [currentPage, list])

    return (
        <>
            {finalPage > 5 ? (
                <div className="pagination-bar">
                    <span className="nav-btn text-primary" onClick={handlePrevious}>
                        Previous
                    </span>
                    <div className="page-numbers">
                        <span className={`page-btn ${currentPage === 1 && "current-page"}`} onClick={() => setCurrentPage(1)}>
                            1
                        </span>
                        {currentPage > 4 && <span className="page-btn">...</span>}
                        {finalPage > 3 && (
                            <div className="siblings">
                                {genarateSibling().map((pageNumber, index) => (
                                    <span
                                        key={index}
                                        className={`page-btn ${currentPage === pageNumber && "current-page"
                                            }`}
                                        onClick={() => setCurrentPage(pageNumber)}
                                    >
                                        {pageNumber}
                                    </span>
                                ))}
                            </div>
                        )}
                        {currentPage < finalPage - 3 && (
                            <span className="page-btn">...</span>
                        )}
                        <span
                            className={`page-btn ${currentPage === finalPage && "current-page"
                                }`}
                            onClick={() => setCurrentPage(finalPage)}
                        >
                            {finalPage}
                        </span>
                    </div>
                    <span className="nav-btn text-primary" onClick={handleNext}>
                        Next
                    </span>
                </div>
            ) : (<>{finalPage > 0 && <div className="pagination-bar">
                <span className="nav-btn text-primary" onClick={handlePrevious}>
                    Previous
                </span>
                <div className="page-numbers">
                    {Array.from({ length: finalPage }, (_, index) => index + 1).map((item) => (
                        <span
                            className={`page-btn ${currentPage === item && "current-page"}`}
                            key={item}
                            onClick={() => setCurrentPage(item)}
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <span className="nav-btn text-primary" onClick={handleNext}>
                    Next
                </span>
            </div>}</>

            )}
        </>
    );
}
