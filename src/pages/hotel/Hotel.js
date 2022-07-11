import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import { Icon } from "semantic-ui-react"
import { useState } from "react"
import MailList from "../../components/MailList/MailList"
import Footer from "../../components/Footer/Footer"

function Hotel() {

  const [slideNum, setSlideNum] = useState(0)
  const [open, setOpen] = useState(false)

  const photos = [
    { src: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { src: "https://images.pexels.com/photos/3201922/pexels-photo-3201922.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { src: "https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { src: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600 " },
    { src: "https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { src: "https://images.pexels.com/photos/277572/pexels-photo-277572.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ]

  function handleOpen(i) {
    setSlideNum(i)
    setOpen(true)
  }

  function handleMove(direction) {

    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNum === 0 ? 5 : slideNum - 1
    }
    else {
      newSlideNumber = slideNum === 5 ? 0 : slideNum + 1
    }

    setSlideNum(newSlideNumber)
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <div className="hotelContainer">
        {open &&
          <div className="slider">
            <Icon size="large" name="window close" className="close" onClick={() => setOpen(false)} />
            <Icon size="large" name="arrow left" className="arrow1" onClick={() => handleMove("l")} />
            <div className="sliderWrapper">
              <img src={photos[slideNum].src} className="sliderImg" />
            </div>
            <Icon size="large" name="arrow right" className="arrow2" onClick={() => handleMove("r")} />
          </div>
        }
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAdress">
            <Icon name="" />
            <span>Etlon St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>

          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper">
                <img onClick={() => handleOpen(i)} src={photo.src} className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">

            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Feel Nigerian Vibe</h1>
              <p className="hotelDesc">
                BookIt is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting of Taormina and the Ionian Sea.
                The rooms here are new, well-lit and inviting. Our reception staff will be happy to help you during your stay in Nigeria, suggesting itineraries, guided visits and some good restaurants in the historic centre.
                While you enjoy a cocktail by the swimming pool on the rooftop terrace, you will be stunned by the breathtaking at the pool. Here, during your summer stays, our bar serves traditional Sicilian dishes, snacks and salads.
              </p>

            </div>
            <div className="hotelDetailsPrice">
              <h1> Perfect for a 9-night stay!</h1>
              <span>Located in the real heart of Nigeria, this property has an excellent location score of 9.9</span>
              <h2>
                <b>$999.9</b>  (9 nights)
              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>
        </div>

        <MailList />
        <Footer />
        <div>
        </div>

      </div>
    </div>
  )
}

export default Hotel
