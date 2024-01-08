import React from "react";
import email from "../assets/email.png";
import phone from "../assets/phone.png";

const Contact = () => {
  return (
    <div>
      {/* wrapper */}
      <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[50px] pb-[40px]">
        <h2 className="text-center mb-[2em]">Contact Us</h2>
        <div className="flex flex-col lg:flex-row justify-evenly items-center">
          {/* form side */}
          <div className=" flex-1 lg:flex-[0.5] w-full">
            <div className="mb-[2em]">
              <a
                href="mailto:"
                className="flex items-center gap-[10px] text-inherit mb-[15px]"
              >
                <img src={email} alt="" className="h-12 w-12" />
                <span>Email Us </span>
              </a>
              <a
                href="tel:0798556471"
                className="flex items-center gap-[10px] text-inherit"
              >
                <img src={phone} alt="" className="h-12 w-12" />
                <span>Call Us at 0798 556471</span>
              </a>
            </div>

            <form
              style={{
                background: "rgba(247, 240, 240, 0.9)",
                backdropFilter: "blur(4px)",
              }}
              className=" p-[10px] rounded-md w-full"
            >
              <div className="flex flex-col gap-[10px] mb-[20px]">
                <label htmlFor="fullName">What is Your Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="enter fullname"
                  className="bg-transparent p-2 rounded-lg"
                  style={{ border: "1px solid gray" }}
                />
              </div>
              <div className="flex flex-col gap-[10px] mb-[20px]">
                <label htmlFor="email">Now enter your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="enter email"
                  className="bg-transparent p-2 rounded-lg"
                  style={{ border: "1px solid gray" }}
                />
              </div>
              <div className="flex flex-col gap-[10px] mb-[20px]">
                <label htmlFor="message">What would you like to tell us</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="2"
                  placeholder="enter message"
                  className="bg-transparent p-2 rounded-lg"
                  style={{ border: "1px solid gray" }}
                ></textarea>
              </div>
              <div className="text-center">
                <button className="bg-red-600 text-white px-3 py-1 rounded-lg">
                  Send Now
                </button>
              </div>
            </form>
          </div>
          {/* iframe side */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.548288453668!2d37.04408227572438!3d-1.445705735822693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f7671796e4977%3A0xdbcf4e925dfe9a95!2sDaystar%20University!5e0!3m2!1sen!2ske!4v1704741714978!5m2!1sen!2ske"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
