import { useEffect, useRef } from 'react'
import './../../styles/ToastMessage.css'

function ToastMessages({ type, message = 'Unidentified error!', isDisplay, setIsDisplay }) {

    const toastRef = useRef();
    const timeOut = useRef();
    const timeOut2 = useRef();

    const handleCloseToast = () => {
        setIsDisplay(false);
        clearTimeout(timeOut.current);
        clearTimeout(timeOut2.current)
    }

    useEffect(() => {
        if(isDisplay) {
            timeOut2.current = setTimeout(() => {
                toastRef.current.className += ' toast-close' 
            }, 4600);
            timeOut.current = setTimeout(() => {
                setIsDisplay(false)
            }, 5000);
        } 
    }, [isDisplay])

    return (
        <>
            {isDisplay &&
                <div className={`toast-container ${type}`} ref={toastRef}>
                    {type === 'toast-error' &&
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" fill='#FF0000' /></svg>
                    }
                    {type === 'toast-success' &&
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" fill='#008000' /></svg>
                    }
                    <p className='toast-message'>{message}</p>
                    <div className='toast-close-icon' onClick={handleCloseToast}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" fill='#979797' /></svg>
                    </div>
                </div >

            }
        </>
    )
}

export default ToastMessages
