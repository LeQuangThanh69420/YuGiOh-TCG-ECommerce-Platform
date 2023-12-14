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
                                Example: thenthen nap RiuCoin goi 666k</div>
                            <div className="QRcodeManual-bottom text-forth">*we will not take responsibilites for any errors in transfer description </div>
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