import React, { useState } from 'react'
import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom"
import { format } from "date-fns"
import { DateRange } from 'react-date-range'
import SearchItem from '../../components/SearchItem/SearchItem'
import Footer from '../../components/Footer/Footer'

function List() {

  const location = useLocation()
  console.log(location)
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar /><Header type="list" />    {/* using type list means that when rendering header, if type is not list then the components wont show */}
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
            <h1 className='listTitle'>Search</h1>

            <div className='listItem'>
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>

            <div className='listItem'>
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}> {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")} `}</span>
              {openDate && <DateRange
                onChange={item => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />}
            </div>

            <div className='listItem'>
              <label className='listLabel'>Options</label>

              <div className='listOptionItem'>
                <span className='listOptionText'>
                  Min price <small> per night</small>
                </span>
                <input type="number" className='listOptionInput' />
              </div>

              <div className='listOptionItem'>
                <span className='listOptionText'>
                  Max price <small> per night </small>
                </span>
                <input min={1} type="number" className='listOptionInput' />
              </div>

              <div className='listOptionItem'>
                <span className='listOptionText'>
                  Adult
                </span>
                <input min={0} placeholder={options.adult} type="number" className='listOptionInput' />
              </div>

              <div className='listOptionItem'>
                <span className='listOptionText'>
                  Children
                </span>
                <input min={1} placeholder={options.children} type="number" className='listOptionInput' />
              </div>


              <div className='listOptionItem'>
                <span className='listOptionText'>
                  Room
                </span>
                <input placeholder={options.room} type="number" className='listOptionInput' />
              </div>

            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
          <SearchItem />
          
          </div>
         
        </div>
      </div>
    
    </div>
  )
}

export default List
