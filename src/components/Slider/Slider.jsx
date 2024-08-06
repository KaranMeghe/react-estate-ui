import { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);
  console.log(imageIndex);

  const handleLeftSlide = (index) => {
    setImageIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const handleRightSlide = (index) => {
    setImageIndex(index === images.length - 1 ? 0 : index + 1);
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src="/arrow.png"
              alt="arrow image"
              onClick={() => handleLeftSlide(imageIndex)}
            />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="property slider image" />
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              alt="arrow image"
              onClick={() => handleRightSlide(imageIndex)}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}

      <div className="bigImage">
        <img
          src={images[0]}
          alt="Property image"
          onClick={() => setImageIndex(0)}
        />
      </div>

      <div className="smallImages">
        {images.slice(1).map((img, index) => (
          <img
            src={img}
            key={index}
            alt={"Property image"}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
