import React, { Component } from "react";
import Slider from "react-slick";

export default class Gallery extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div className="pl-[1em] pr-[1em] mt-[1em]">
        <h2
          className="font-bold text-2xl text-center my-[2em]"
          style={{ lineHeight: "1.3em" }}
        >
          Click To Access Our Gallery
        </h2>
        <Slider {...settings} className="w-[100%] overflow-x-hidden">
          <div>
            <img
              src="https://images.pexels.com/photos/10638071/pexels-photo-10638071.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div>
            <a href="#" target="_blank">
              <img
                src="https://images.pexels.com/photos/8927014/pexels-photo-8927014.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </a>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2600339/pexels-photo-2600339.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/6718450/pexels-photo-6718450.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/8419169/pexels-photo-8419169.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4001269/pexels-photo-4001269.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5428012/pexels-photo-5428012.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
