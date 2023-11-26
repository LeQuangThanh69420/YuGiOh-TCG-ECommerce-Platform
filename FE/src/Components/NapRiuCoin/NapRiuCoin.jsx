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
                                <div className="RiuCoinAmount">{tien.RiuCoin}</div>
                                <div className="Cost">{tien.Cost}</div>
                                <svg width="334" height="94" viewBox="0 0 334 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1.5" y="1.5" width="330.429" height="90.5013" rx="8.5" fill="#363636" stroke="#F7EE12" strokeWidth="3" />
                                    <circle cx="68.8028" cy="45.8686" r="17.9059" fill="#FFDA56" stroke="#D99C00" strokeWidth="3" />
                                    <path d="M63.5103 38.8119H71.4491C71.7431 38.8119 72.5076 38.9883 73.2133 39.6939C73.9189 40.3996 74.0954 41.7522 74.0954 42.3402V44.9865C74.0954 45.5745 73.0369 46.7506 72.3312 46.7506C71.6255 46.7506 70.567 46.7506 70.567 46.7506M70.567 46.7506H64.3924V53.8073M70.567 46.7506L74.9775 53.8073" stroke="#D99C00" strokeWidth="3" />
                                    <path d="M0 23H12V69H0V23Z" fill="#F7EE12" />
                                    <rect x="321" y="23" width="12" height="46" fill="#F7EE12" />
                                    <rect x="207" y="32" width="102" height="28" fill="#D9D9D9" />
                                </svg>
                            </div>
                        ))}
                    </div>
                    <div className="QRcode-container">
                        <div className="QRcode"></div>
                        <div className="QRcodeManual">
                            <div className="QRcodeManual-head text-secondary">Top-up code:</div>
                            <div className="QRcodeManual-body text-third">“Username” + transfer description <br />
                            Example: thenthen nap RiuCoin goi 666k</div>
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