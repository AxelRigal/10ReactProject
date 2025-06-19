import { useState } from "react";
import leftArrow from "../assets/left-arrow.svg";
import rightArrow from "../assets/right-arrow.svg";
import sliderData from "../data/sliderData";
import "./Slider.css" 
export default function Slider() {
  const lengthMax = sliderData.length - 1;
  const [imgSlider, setImgSlider] = useState("");
  const [sliderIndex, setSliderIndex] = useState(0);

  function toggleImgSlider(value) {
    if (sliderIndex === lengthMax && value === 1) {
      setSliderIndex(0);
    } else if (sliderIndex === 0 && value === -1) {
      setSliderIndex(lengthMax);
    } else {
      setSliderIndex(sliderIndex + value);
    }
  }

  return (
    <>
    <p className="index-info"> {sliderIndex + 1 } / {sliderData.length}</p>
    <div className="slider">

      <p className="image-info">{sliderData[sliderIndex].description}</p>
      <img src={`/images/img-${sliderIndex + 1}.jpg`} alt="estate's room" className="slider-img" />

      <button className="navigation-button prev-button" onClick={() => toggleImgSlider(-1)}>
        <img className="" src={leftArrow} alt="previous image" />
      </button>
      <button className="navigation-button next-button" onClick={() => toggleImgSlider(1)}>
        <img src={rightArrow} alt="next image" />
      </button>
    </div>
    </>
  );
}
