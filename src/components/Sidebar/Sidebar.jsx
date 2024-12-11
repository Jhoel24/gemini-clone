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

    return (
        <div className='sidebar' >
            <div className="top">
                <img className='menu' src={menu_icon} alt="" />
                <div className="new-chat">
                    <img src={plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                { extended ? 
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
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar