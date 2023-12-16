
import './../../styles/ConfirmModal.css'

export default function ConfirmModal({ isOpen = false, title, content, setIsOpen, onOK }) {

    return (
        <>
            {isOpen && <div className='confirm-modal-screen' onClick={() => setIsOpen(false)}>
                <div className='confirm-modal-container' onDoubleClick={(event) => {event.stopPropagation()}}>
                    <p className='confirm-modal-title'>{title}</p>
                    <p className='confirm-modal-content'>{content}</p>
                    <div className='confirm-modal-buttons'>
                        <button className='button-2' onClick={() => setIsOpen(false)}>Cancel</button>
                        <button onClick={onOK}>OK</button>
                    </div>
                    <div className='close-icon icon-5' onClick={() => setIsOpen(false)}></div>
                </div>
            </div>}
        </>
    )
}
