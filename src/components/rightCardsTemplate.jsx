import React from "react";
import "./rightCardsTemplate.css";

const RightCardTemplate=({title,children})=>{
    return(
        <div className="template-container">
            <div className="template-header">
                <p>{title}</p>
            </div>
            <div className="template-content">
                {children}
            </div>            
        </div>
    );
}

export default RightCardTemplate;