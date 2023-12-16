import { useContext, useEffect } from "react"
import { AppData } from "../../Root"
import { gacha } from "../../api/apiGacha"

function GachaPackOpenning(Pack) {
    const {userData} = useContext(AppData)

    useEffect(() => {
        gacha(userData.username).then((data) => {console.log(data)})
    })
     
    return(
        <>
            <div className="Gacha-pack-openning">
                <div className="Gacha-pack-openning-warpper">
                    hello
                </div>
            </div>
        </>
    )
}

export default GachaPackOpenning