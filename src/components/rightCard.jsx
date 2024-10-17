import React from "react";
import "./rightCard.css";
import RightCardTemplate from "./rightCardsTemplate";
import { FaFacebookSquare,FaInstagram,FaSnapchat,FaPinterestP,FaTwitter,FaLinkedinIn } from "react-icons/fa";

const RightCard=()=>{
    return(
        <div className="rightCard">
            <div className="card">
                    <div className="first">
                        <p className="heading">My Name</p>
                        <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                    </div>
            </div>
            <RightCardTemplate title="Popular Posts">
                <p>testing</p>
            </RightCardTemplate>
            <RightCardTemplate title="Advertise">
                <p>testing</p>
            </RightCardTemplate>
            <RightCardTemplate title="Inspiration">
                <div className="inspiration-imgs">
                        <div className="img-1 img"></div>
                        <div className="img-2 img"></div>
                        <div className="img-3 img"></div>
                        <div className="img-4 img"></div>            
                </div>
            </RightCardTemplate>
            <RightCardTemplate title="Follow Me">
                <ul className="icons">
                    <li><FaFacebookSquare /></li>
                    <li><FaInstagram /></li>
                    <li><FaSnapchat /></li>
                    <li><FaPinterestP /></li>
                    <li><FaTwitter /></li>
                    <li><FaLinkedinIn />   </li>
                </ul>
            </RightCardTemplate>
        </div>
    );
}

export default RightCard;