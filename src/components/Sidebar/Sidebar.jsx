import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'

// HAMBURGER IMAGE
const { 
    menu_icon,
    plus_icon,
    message_icon,
    question_icon,
    history_icon
 } = assets;

const Sidebar = () => {
  return (
    <div className='sidebar' >
        <div className="top">
            <img className='menu' src={menu_icon} alt="" />
            <div className="new-chat">
                <img src={plus_icon} alt="" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={message_icon} alt="" />
                    <p>What is react...</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={question_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={history_icon} alt="" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={question_icon} alt="" />
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar