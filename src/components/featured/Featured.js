import React from 'react'
import "./featured.css"

function Featured() {
  return (
    <div className='featured'>
    <div className='featuredItem'>
    <img
     src='https://cdn.pixabay.com/photo/2010/12/13/10/21/bridge-2715__340.jpg' 
     alt=''
     className='featuredImg'   
     />
    <div className='featuredTitles'>
        <h1>London</h1>
        <h2>123 properties</h2>
    </div>
    </div> 

    <div className='featuredItem'>
    <img 
    src='https://cdn.pixabay.com/photo/2017/05/15/14/33/dublin-2315013__340.jpg'
    alt=''
    className='featuredImg  '
     />
    <div className='featuredTitles'>
        <h1>Dublin</h1>
        <h2>100 properties</h2>
    </div>
    </div> 

    <div className='featuredItem'>
    <img 
    src='https://cdn.pixabay.com/photo/2015/11/18/16/03/valencia-1049389__340.jpg'
    alt=''
    className='featuredImg'
     />
    <div className='featuredTitles'>
        <h1>Texas</h1>
        <h2>140 properties</h2>
    </div>
    </div> 
   
    </div>
  )
}

export default Featured
