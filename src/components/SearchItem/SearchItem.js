import React from 'react'
import "./SearchItem.css"
import {useNavigate} from "react-router-dom"

function SearchItem() {

  const navigate=useNavigate()

  function listRender(){
  navigate("/hotel/render")
  }

  return (
    <div className='searchItems'>

      <div onClick={listRender}  className='searchItem'>
        <img className='siImg'
          src='https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156__340.jpg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Tower Street Apartments</h1>
          <span className='siDistance'>500m from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
          <span className='siFeatures'>Entire studio . 1 bathroom . 21m 1 full bed</span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>9.0</button>
          </div>
          <div className='siDetailsTexts'>
            <span className='siPrice'>$220</span>
            <span className='siTaxiOp2'>Includes taxes and fees </span>
            <button className='siCheckButton'>See available </button>
          </div>
        </div>
      </div>

      <div onClick={listRender} className='searchItem'>
        <img className='siImg'
          src='https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Staybridge Suits</h1>
          <span className='siDistance'>50km from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>Queen Studio Suits . Non Smoking</span>
          <span className='siFeatures'>Entire studio . 1 bathroom . 21m 1 full bed</span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>8.0</button>
          </div>
          <div className='siDetailsTexts'>
            <span className='siPrice'>$240</span>
            <span className='siTaxiOp2'>Includes taxes and fees </span>
            <button className='siCheckButton'>See available </button>
          </div>
        </div>
      </div>

      <div onClick={listRender} className='searchItem'>
        <img className='siImg'
          src='https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523__340.jpg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Colton house Hotel</h1>
          <span className='siDistance'>40km from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
          <span className='siFeatures'>1 Full bed . 1 bathroom </span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>8.1</button>
          </div>
          <div className='siDetailsTexts'>
            <span className='siPrice'>$120</span>
            <span className='siTaxiOp2'>Includes taxes and fees </span>
            <button className='siCheckButton'>See available </button>
          </div>
        </div>
      </div>

      <div onClick={listRender} className='searchItem'>
        <img className='siImg'
          src='https://cdn.pixabay.com/photo/2018/01/06/18/40/relaxation-3065577__340.jpg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Hyatt Place Columbus</h1>
          <span className='siDistance'>50km from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>Queen Studio Suite . non-Smoking</span>
          <span className='siFeatures'>1 King bed</span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>9.0</button>
          </div>
          <div className='siDetailsTexts'>
            <span className='siPrice'>$220</span>
            <span className='siTaxiOp2'>Includes taxes and fees </span>
            <button className='siCheckButton'>See available </button>
          </div>
        </div>
      </div>

      <div onClick={listRender} className='searchItem'>
        <img className='siImg'
          src='https://cdn.pixabay.com/photo/2014/10/16/08/41/bathroom-490781__340.jpg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Holiday Inn Express</h1>
          <span className='siDistance'>200m from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
          <span className='siFeatures'>Entire studio . 1 bathroom . 21m 1 full bed</span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>9.0</button>
          </div>
          <div className='siDetailsTexts'>
            <span className='siPrice'>$220</span>
            <span className='siTaxiOp2'>Includes taxes and fees </span>
            <button className='siCheckButton'>See available </button>
          </div>
        </div>
      </div>

      <div onClick={listRender} className='searchItem'>
        <img className='siImg'
          src='https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072__340.jpg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Bling Upper Room</h1>
          <span className='siDistance'>250km from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
          <span className='siFeatures'>Entire studio . 1 bathroom </span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>8.8</button>
          </div>
          <div className='siDetailsTexts'>
            <span className='siPrice'>$250</span>
            <span className='siTaxiOp2'>Includes taxes and fees </span>
            <button className='siCheckButton'>See available </button>
          </div>
        </div>
      </div>

      <div onClick={listRender} className='searchItem'>
        <img className='siImg'
          src='https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666__340.jpg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Haven Abode</h1>
          <span className='siDistance'>330km from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
          <span className='siFeatures'>Entire studio . 1 bathroom . 21m 1 full bed</span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>9.3</button>
          </div>
          <div className='siDetailsTexts'>
            <span className='siPrice'>$266.5</span>
            <span className='siTaxiOp2'>Includes taxes and fees </span>
            <button className='siCheckButton'>See available </button>
          </div>
        </div>
      </div>

      <div onClick={listRender} className='searchItem'>
        <img className='siImg'
          src='https://cdn.pixabay.com/photo/2016/02/10/13/39/hotel-1191725__340.jpg'
        />
        <div className='siDesc'>
          <h1 className='siTitle'>Upper Chamber</h1>
          <span className='siDistance'>520km from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>Studio Apartment with Air conditioning</span>
          <span className='siFeatures'>Entire studio . 1 bathroom . 21m 1 full bed</span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span>
        </div>
        <div className='siDetails'>
          <div className='siRating'>
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className='siDetailsTexts'>
            <span className='siPrice'>$229</span>
            <span className='siTaxiOp2'>Includes taxes and fees </span>
            <button className='siCheckButton'>See available </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SearchItem
