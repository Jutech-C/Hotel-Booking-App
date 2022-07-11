import React from 'react'
import "./propertyList.css"

function PropertyList() {
  return (
    <div className='pList'>

    <div className='pListItem'>
        <img className='pListImg'
        src='https://media.istockphoto.com/photos/new-modernist-townhouses-in-downtown-raleigh-nc-picture-id1319270438?b=1&k=20&m=1319270438&s=170667a&w=0&h=vlZki_l9xR3b6Lfe6pXdBgpA9QVGpYRyEin4GvqI9tk=' />
        <div className='pListTitles'>
            <h1>Apartments</h1>
            <h2>4444 hotels</h2>
        </div>
    </div>

    <div className='pListItem'>
        <img className='pListImg'
        src='https://cdn.pixabay.com/photo/2018/01/29/05/14/luxury-3115234__340.jpg' />
        <div className='pListTitles'>
            <h1>Resorts</h1>
            <h2>1240 hotels</h2>
        </div>
    </div>

    <div className='pListItem'>
        <img className='pListImg'
        src='https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156__340.jpg' />
        <div className='pListTitles'>
            <h1>Hotels</h1>
            <h2>240 hotels</h2>
        </div>
    </div>
    <div className='pListItem'>
        <img className='pListImg'
        src='https://cdn.pixabay.com/photo/2016/08/06/17/50/design-1574773__340.jpg' />
        <div className='pListTitles'>
            <h1>Villas</h1>
            <h2>240 hotels</h2>
        </div>
    </div>

    <div className='pListItem'>
        <img className='pListImg'
        src='https://cdn.pixabay.com/photo/2017/08/06/18/33/barn-2594975__340.jpg' />
        <div className='pListTitles'>
            <h1>Cabins</h1>
            <h2>240 hotels</h2>
        </div>
    </div>
    </div>
  )
}

export default PropertyList
