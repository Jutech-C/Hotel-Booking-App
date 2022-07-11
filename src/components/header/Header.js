import React, { useState } from 'react'
import "./header.css"
import { Icon } from "semantic-ui-react"
import { DateRange } from "react-date-range"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import {useNavigate} from "react-router-dom" 

function Header({ type }) {
  const [destination,setDestination]=useState("")
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })
const navigate=useNavigate()

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  function handleClick(name, operation) {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
      }
    })
  }
function handleSearch(){
navigate("/hotel", {state: {destination,date,options}})
}

  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" :'headerContainer'}>
        <div className='headerList'>
          <div className="headerListItem active">
            <Icon name="bed" />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <Icon name="plane" />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <Icon name="car" />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <Icon name="bed" />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <Icon name="taxi" />
            <span>Airport taxes </span>
          </div>

        </div>

        {type!== "list" &&
          <div>

          <h1 className='headerTitle'>A lifetime of discounts? its Genius.</h1>
          <p className="headerDesc">Get rewarded for your travels unlock instant savings of 10% or more with a free Lamabooking account</p>
          <button className="headerBtn"> Sign in / Register</button>

          <div className='headerSearch'>
            <div className='headerSearchItem'>
              <Icon name='bed' className='headerIcon' />
              <input type="text" onChange={(e) => setDestination(e.target.value)} placeholder="Where are you going" className='headerSearchInput ' />
            </div>
            <div className='headerSearchItem'>
              <Icon name='calendar' className='headerIcon' />
              <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'> {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
                minDate={new Date()}
              />
              }
            </div>

            <div className='headerSearchItem'>
              <Icon name='male' className='headerIcon' />
              <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
              {openOptions && <div className='options'>

                <div className='optionItem'>
                  <span className='optiontext'>Adult </span>
                  <div className='optionCounter'>
                    <button disabled={options.adult <= 1} className='optionCounterButton' onClick={() => handleClick("adult", "d")}>-</button>
                    <span className='optionCounterNumber'>{options.adult}</span>
                    <button className='optionCounterButton' onClick={() => handleClick("adult", "i")}>+</button>
                  </div>
                </div>

                <div className='optionItem'>
                  <span className='optiontext'>Children </span>
                  <div className='optionCounter'>
                    <button disabled={options.children <= 0} className='optionCounterButton' onClick={() => handleClick("children", "d")}>-</button>
                    <span className='optionCounterNumber'>{options.children}</span>
                    <button className='optionCounterButton' onClick={() => handleClick("children", "i")}>+</button>
                  </div>
                </div>

                <div className='optionItem'>
                  <span className='optiontext'>Room </span>
                  <div className='optionCounter'>
                    <button disabled={options.room <= 1} className='optionCounterButton' onClick={() => handleClick("room", "d")}>-</button>
                    <span className='optionCounterNumber'>{options.room}</span>
                    <button className='optionCounterButton' onClick={() => handleClick("room", "i")}>+</button>
                  </div>
                </div>
              </div>}
            </div>

            <div className='headerSearchItem'>
              <button onClick={handleSearch} className='headerBtn'>Search</button>
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Header
