import "./MailList.css"
import React from 'react'

function MailList() {
    return (
        <div className="mail">
            <h1 className="mailTitle">Save time, save money!</h1>
            <span className="mailDesc">Sign up and we'll send the best deals to you</span>
            <dic className="mailInputContainer">
                <input type="text" placeholder="Your Email" />
                <button>Subscribe</button>
            </dic>
        </div>
    )
}

export default MailList
