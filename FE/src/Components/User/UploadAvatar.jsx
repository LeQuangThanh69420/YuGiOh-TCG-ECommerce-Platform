import { useContext, useRef, useState } from 'react'

import { uploadFile } from '../../utils/uploadFile';
import { changeAvatarURL } from '../../api/apiUser';

import { AppData } from '../../Root'

import './../../styles/User.css'

export default function UploadAvatar({ onClose }) {

    const dropZoneRef = useRef();

    const { userData, setUserData, showToast, setType, setMessage } = useContext(AppData)

    const [chosingAvatar, setChosingAvatar] = useState(userData.avatarURL);
    const [chosenFile, setChosenFile] = useState();
    const [isDragOver, setIsDragOver] = useState(false);

    const handleChoseAvatar = () => {
        if (event.target.files[0].type === 'image/jpeg' || event.target.files[0].type === 'image/png') {
            const img_URL = URL.createObjectURL(event.target.files[0])
            setChosingAvatar(img_URL)
            setChosenFile(event.target.files[0]);
        } else {
            showToast();
            setType('toast-error');
            setMessage('Only accept PNG/JPG files!')
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragOver(true);
    }

    const handleDragLeave = () => {
        setIsDragOver(false);
    }

    const handleDropFile = (event) => {
        event.preventDefault();
        setIsDragOver(false)
        if (event.dataTransfer.files[0].type === 'image/jpeg' || event.dataTransfer.files[0].type === 'image/png') {
            const avatar_URL = URL.createObjectURL(event.dataTransfer.files[0])
            setChosingAvatar(avatar_URL);
            setChosenFile(event.dataTransfer.files[0]);
        } else {
            showToast();
            setType('toast-error');
            setMessage('Only accept PNG/JPG files!')
        }

    }

    const handleSaveAvatar = async () => {
        if (chosenFile) {
            try {
                uploadFile(chosenFile).then((URL) => {
                    handleChangeAvatarURL(URL)
                })
            } catch (error) {
                console.log(error);
            }
        }

    }

    const handleChangeAvatarURL = async (URL) => {
        const response = await changeAvatarURL(userData.username, URL);
        response.json().then(data => {
            showToast();
            setType('toast-success');
            setMessage(data.message);
            onClose();
            setUserData(prev => ({
                ...prev,
                avatarURL: URL,
            }))
            setChosenFile(undefined);
        });

    }

    return (
        <div className='upload-avatar-screen' onClick={onClose}>
            <div className='upload-avatar-container' onClick={(event) => { event.stopPropagation() }}>
                <p className='upload-avatar-title'>
                    <span className='text-secondary'>Change</span>
                    <span className='text-primary'> Avatar</span>
                </p>
                <div className='upload-avatar-top'>
                    <div className='avatar-container'>
                        <img src={chosingAvatar} className='avatar-preview' />
                        <label htmlFor="input-avatar" className='button'>Upload file</label>
                        <input type="file" id="input-avatar" hidden onChange={handleChoseAvatar} />
                    </div>
                    <div className={`upload-avt-dropzone ${isDragOver && 'dragging-over'}`} ref={dropZoneRef} onDragOver={(event) => handleDragOver(event)} onDrop={event => handleDropFile(event)} onDragLeave={handleDragLeave}>
                        <div className='upload-content-container'>
                            <div className={`${isDragOver ? 'icon-upload-purple' : 'icon-upload'} icon-6`}></div>
                            <span className='text-eighth upload-text'>Drag and Drop your image here</span>
                        </div>
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
