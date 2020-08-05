import React, {useState} from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';

import Day from '../day/day.jsx';
import './month.css'

import monday from '../../res/svg/monday.svg';
import tuesday from '../../res/svg/tuesday.svg';
import wednesday from '../../res/svg/wednesday.svg';
import thursday from '../../res/svg/thursday.svg';
import friday from '../../res/svg/friday.svg';
import saturday from '../../res/svg/saturday.svg';
import sunday from '../../res/svg/sunday.svg';

const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const daysOfWeek = [
  {
    name: "Sunday",
    mood: sunday
  },
  {
    name: "Monday",
    mood: monday
  },
  {
    name: "Tuesday",
    mood: tuesday
  },  
  {
    name: "Wednesday",
    mood: wednesday
  },
  {
    name: "Thursday",
    mood: thursday
  },
  {
    name: "Friday",
    mood: friday
  },
  {
    name: "Saturday",
    mood: saturday
  }
];

// From 2000 to 2100
const years = [...Array(100).keys()].map((year) => year+2000);

function Month() {
  
    let daysToShow = [];
    const now = new Date();

    let [currentMonth, setCurrentMonth] = useState(now.getMonth());
    let [currentYear, setCurrentYear] = useState(now.getFullYear());

    const daysOfCurrentMonth = new Date(currentYear, currentMonth+1, 0).getDate();
    const firstDayOfCurrentMonth = new Date(currentYear, currentMonth, 1).getDay();

    let isToday,
        currentDate;
    for (let i=firstDayOfCurrentMonth; i<daysOfCurrentMonth+firstDayOfCurrentMonth; i++) {
        currentDate = i - firstDayOfCurrentMonth + 1;
        isToday = (now.getDate()===currentDate && now.getMonth()===currentMonth && now.getFullYear()===currentYear);
        daysToShow.push( <Day data={daysOfWeek[i%7]} today={isToday} date={currentDate} key={i} /> );
    }
    
    return (
      <div className="calendar">
        <div className="row month-name">
          <div className="calendar-title"><h2>Calendar</h2></div>
          <DropdownButton id="dropdown-month" title={monthsOfYear[currentMonth]}>
            { 
              monthsOfYear.map((month) => 
                <Dropdown.Item active={monthsOfYear[currentMonth]===month} onSelect={() => setCurrentMonth(monthsOfYear.indexOf(month))}>{month}</Dropdown.Item>
              )
            }
          </DropdownButton>    
          <DropdownButton id="dropdown-year" title={currentYear}>
            { 
              years.map((year) =>
                <Dropdown.Item active={currentYear===year} onSelect={() => setCurrentYear(year)}>{year}</Dropdown.Item>
              )
            }
          </DropdownButton>    
        </div>
        <div className="row calendar-days">
          {daysToShow}
        </div>
      </div>
    );
}

export default Month;
