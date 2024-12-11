import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const {
    user_icon,
    compass_icon,
    bulb_icon,
    message_icon,
    code_icon
} = assets;

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Kenneth</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorm team bonding activites for our work retreat</p>
                        <img src={message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of the following code</p>
                        <img src={code_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main