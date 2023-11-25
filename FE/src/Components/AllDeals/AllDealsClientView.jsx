import { useState, useEffect } from "react"
import Header from "../Shared/Header"
import AdSlider from "../AdSlider/Adslider"
import AllDealsBody from "./AllDealsBody"

function AllDealsClientView() {

    const [deals, setDeals] = useState([]);

    return (
        <>
            <div className="AllDeals-main-content">
                <Header />
                <AdSlider />
                <AllDealsBody deals={deals} setDeals={setDeals} />
            </div>
        </>
    )
}

export default AllDealsClientView;