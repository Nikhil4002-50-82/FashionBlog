import React from "react";
import "./header.css";
import { FaFacebookSquare , FaSnapchat , FaTwitter , FaLinkedinIn , FaSearch }  from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";

const Header=()=>{
    return(
        <div className="container">
            <ul>
                <li><FaFacebookSquare /></li>
                <li><FaInstagram /></li>
                <li><FaSnapchat /></li>
                <li><IoLogoDiscord /></li>
                <li><FaTwitter /></li>
                <li><FaLinkedinIn /></li>
            </ul>
            <ul><li><FaSearch /></li></ul>
        </div>
    )
}

export default Header;