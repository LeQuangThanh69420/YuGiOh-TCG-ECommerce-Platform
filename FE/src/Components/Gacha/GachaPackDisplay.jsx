import './../../styles/GachaPackDisplay.css'
import ToastMessages from '../Shared/ToastMessage';
import { useContext, useEffect, useState } from 'react';

function GachaPackDisplay({Pack, isOpen, onClose}) {
    const [isToastDisplay, setToastDisplay] = useState(false)

    function handlePackOpen(){
        setToastDisplay(true)
    }


    useEffect

    return(
        <>
            {isOpen && <div className="Gacha-pack-display" onClick={onClose}>
                <div className="Gacha-pack-display-wrapper" onClick={(event) => {event.stopPropagation()}}>
                    <div className="Gacha-pack-display-img" style={{backgroundImage: `url(${Pack.packimg})`}} onClick={handlePackOpen}></div>
                </div>
            </div>}
            <ToastMessages type={"toast-success"} message='Purchase Successfully' isDisplay={isToastDisplay} setIsDisplay={setToastDisplay}/>
        </>
    )
}

export default GachaPackDisplay