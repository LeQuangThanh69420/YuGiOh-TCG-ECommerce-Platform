import { Amount } from '../../constants/RiuCoinAmount';

import deptrai from '../../asset/deptrai.png'

import "./../../styles/NapRiuCoin.css";

function NapRiuCoin() {

    return (
        <>
            <div className="NapRiuCoinAll">
                <div className="BodyRiuCoin">
                    <div className="top-up-container">
                        {Amount.map((tien, index) => (
                            <div className="NapTien" key={index}>
                                <div className="NapTienVaRiuCoin">
                                    <div className='riu-coin-icon NapTienRiuCoinIcon'></div>
                                    <div className="RiuCoinAmount">{tien.RiuCoin}</div>
                                </div>
                                <div className="Cost">
                                    {tien.Cost}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="QRcode-container">
                        <div className="QRcode"></div>
                        <div className="QRcodeManual">
                            <div className="QRcodeManual-head text-secondary">Top-up code:</div>
                            <div className="QRcodeManual-body text-third">“Username” + transfer description <br />
                                Example: thenthen add fund 4.99$ for 500 RiuCoin</div>
                            <div className="QRcodeManual-bottom text-forth">
                                <i>*We will not take responsibilites for any errors in transfer description.</i>  
                                <br />
                                <i>Your RiuCoins will be updated after 00:00 am.</i>   
                            </div>
                        </div>
                        <div className="QRcode-deptrai">
                            <img src={deptrai} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NapRiuCoin