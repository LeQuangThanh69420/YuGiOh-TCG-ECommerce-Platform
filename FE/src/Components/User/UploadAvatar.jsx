import { useContext, useState } from 'react'

import { AppData } from '../../Root'

import './../../styles/User.css'

export default function UploadAvatar({ onClose }) {

    const { userData } = useContext(AppData)

    const [chosingAvatar, setChosingAvatar] = useState(userData.avatarURL);

    const handleChoseAvatar = () => {
        const img_URL = URL.createObjectURL(event.target.files[0])
        setChosingAvatar(img_URL)
    }

    const handleSaveAvatar = () => {

    }

    return (
        <div className='upload-avatar-screen' onClick={onClose}>
            <div className='upload-avatar-container' onClick={(event) => { event.stopPropagation() }}>
                <div className='upload-avatar-top'>
                    <div className='avatar-container'>
                        <img src={chosingAvatar} className='avatar-preview' />
                        <label htmlFor="input-avatar" className='button'>Upload file</label>
                        <input type="file" id="input-avatar" hidden onChange={handleChoseAvatar} />
                    </div>
                    <div className='upload-avt-dropzone'>
                        <div className=''></div>
                    </div>
                </div>
                <div className='avatar-btns'>
                    <button className='button-2' onClick={onClose}>Cancel</button>
                    <button onClick={handleSaveAvatar}>Save</button>
                </div>
            </div>
        </div>
    )
}
