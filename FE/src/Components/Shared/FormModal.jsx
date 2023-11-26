import './../../styles/FormModal.css'

export default function FormModal({ title, inputs, renderInput, isDisplay, setIsDisplay, onSubmit }) {
    return (
        <>
            {
                isDisplay && <div className='form-modal-screen' onClick={() => setIsDisplay(false)}>
                    <div className='form-modal-container' onClick={(event) => event.stopPropagation()}>
                        <p className='form-modal-title text-secondary'>{title}</p>
                        <div className='form-modal-inputs'>
                            {inputs.map((item) =>
                                renderInput(item)
                            )}
                        </div>
                        <div className='form-modal-buttons'>
                            <button className='button-2' onClick={() => setIsDisplay(false)}>Cancel</button>
                            <button onClick={() => onSubmit()}>Submit</button>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}
