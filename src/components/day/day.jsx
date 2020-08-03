import React from 'react';
import './day.css';

function Day(props) {
    return (
        <div className="day col-2">
            {props.today}
            <div className={"day-container row " + (props.today ? "today": "")}>
                <div className="col-2 date">
                    <p>{props.date}</p>
                </div>
                <div className="col-10 day-info">
                    <div className="day-name"><p>{props.data.name}</p></div>
                    <div className="day-img"><img src={props.data.mood} alt={props.data.name} /></div>
                </div>
            </div>
        </div>
    );
}

export default Day;