import React, { useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

// HAMBURGER IMAGE
const { 
    menu_icon,
    plus_icon,
    message_icon,
    question_icon,
    history_icon,
    setting_icon
 } = assets;

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const [delayed, setDelayed] = useState(false);

    const handleExtended = () => {
        setExtended(prev => !prev)
        if(!extended) {
            setTimeout(() => {
                setDelayed(true)
            }, 400)
        } else {
            setDelayed(false);
        }
    }

    return (
        <div className={`sidebar ${extended ? 'extended' : ''}`} >
            <div className="top">
                <img onClick={handleExtended} className='menu' src={menu_icon} alt="" />
                <div className="new-chat">
                    <img src={plus_icon} alt="" />
                    {delayed ? <p>New Chat</p> : null}
                </div>
                { delayed ? 
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={message_icon} alt="" />
                            <p>What is react...</p>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={question_icon} alt="" />
                    {delayed ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={history_icon} alt="" />
                    {delayed ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={setting_icon} alt="" />
                    {delayed ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar