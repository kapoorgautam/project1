import "./WorkCardStyles.css";
import React from 'react'

import { Link } from "react-router-dom";

function WorkCard(props) {
    return (
        <div className="project-card">
                    <img src={props.imgsrc} alt="error" />
                    <h2 className="project-title">{props.title}</h2>
                    <div className="pro-details">
                        <p>{props.text}</p>
                        <div className="pro-btns">
                            <Link to={props.view} className="btn">Get appointed</Link>
                            
                        </div>
                    </div>
                </div>
    );
}

export default WorkCard
