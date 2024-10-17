import React from "react";
import LeftCard from "./leftCard";
import RightCard from "./rightCard";
import "./cardHolder.css";
import List from "../leftCardDetails";

const createLeftCards=(list)=>{
    return(
        <LeftCard 
            key={list.id}
            month={list.month}
            date={list.date}
            year={list.year}
            src={list.src}
            span={list.span}
            para1={list.para1}
            para2={list.para2}        
        />
    );
}

const CardHolder=()=>{
    return(
        <div className="cardHolder-container">
            <div>
                {List.map(createLeftCards)}
            </div>
            <div>
                <RightCard />
            </div>
        </div>
    );
}

export default CardHolder;