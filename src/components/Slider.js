import React from "react";

import leftArrow from "../assets/arrow-left.svg";
import rightArrow from "../assets/arrow-right.svg";
import image1 from "../assets/image.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

// import "reset-css";
import "./Slider.scss";

const testimonials = [
  {
    name: "Julia Cameron",
    title: "Creative Director, VISA",
    image: image3,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already."
  },
  {
    name: "Mark Jacobs",
    title: "Tech Lead, Google",
    image: image1,
    quote:
      "The rebranding has really helped our business. Definitely worth the investment."
  },
  {
    name: "Lisa Bearings",
    title: "Brand Coordinator, Facebook",
    image: image2,
    quote:
      "The service was excellent. Absolutely wonderful! A complete redesign did it for us."
  }
];

function Slider() {
  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
          <div className="arrows left">
              <span>
                  <img src={leftArrow} alt="left arrow" />
              </span>
          </div>

            <div className="inner">
                <div className="t-image">
                    <ul>
                        <li>
                            <img src={testimonials[0].image} alt={testimonials[0].name}/>
                        </li>
                        <li>
                            <img src={testimonials[1].image} alt={testimonials[1].name}/>
                        </li>
                        <li>
                            <img src={testimonials[2].image} alt={testimonials[2].name}/>
                        </li>
                    </ul>
                </div>
            </div>

          <div className="arrows right">
              <span>
                  <img src={rightArrow} alt="right arrow" />
              </span>
          </div>
      </div>
    </div>
  );
}

export default Slider;
