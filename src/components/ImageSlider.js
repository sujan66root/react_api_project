import { React, useState, useEffect } from "react";
import { IMAGE_URL } from "../config";

function ImageSlider({ images }) {
  let interval;

  const [index, setIndex] = useState(0);
  useEffect(() => {
    interval = setInterval(() => {
      if (index > images.length) {
        setIndex(0);
      } else {
        setIndex((index) => index + 1);
      }
      clearInterval(interval);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [index]);

  console.log(images);

  return (
    <div>
      <div className="container">
        <h1 className="text-center">Image Slider</h1>
        {images[index] && (
          <img
            className="img-fluid"
            src={IMAGE_URL + images[index].source}
            alt=""
          />
        )}
      </div>
    </div>
  );
}

export default ImageSlider;
