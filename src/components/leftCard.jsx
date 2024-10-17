import React from "react";
import "./leftCard.css";
import { FaThumbsUp } from "react-icons/fa6";

const LeftCard=({month ,date,year,src,span,para1,para2})=>{
    return(
        <div className="left-card">
            <div className="card">
                <p className="heading"> TITLE HEADING</p>
                <p className="description">Title description,<span className="span1"> {month} {date}, {year}</span></p>
                <div className="img">
                    <img src={src} alt="img" />
                </div>
                <p className="para"><span className="span2">{span}</span>{para1}</p>
                <p className="para">{para2}</p>
                <div className="card-flex">
                    <button className="left-btn"><FaThumbsUp  size="1.2em" />Like</button>
                </div>
            </div>
            
        </div>
    );
}

export default LeftCard;