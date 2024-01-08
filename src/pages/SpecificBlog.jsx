import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

const SpecificBlog = () => {
  const singleBlog = [
    {
      id: 2,
      title: "Clothes Ninja",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      comments: "30",
      dummyComments: [
        {
          id: 1,
          username: "Joe",
          comment: "I like the content.",
          time: "2 mins ago",
        },
        {
          id: 2,
          username: "Phill",
          comment: "When can we start working on the second project ?",
          time: "6 mins ago",
        },
        {
          id: 3,
          username: "Anita",
          comment: "I agree we should help those in need",
          time: "17 mins ago",
        },
      ],
      photo:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) return toast.error("Comment Cannot Be Empty");
  };

  return (
    <div>
      {/* wrapper */}
      <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[10px] md:mt-[50px] pb-[20px]">
        <Link to="/blog" className="text-inherit text-2xl">
          <IoIosArrowRoundBack />
        </Link>
        {/* content */}
        <div>
          {singleBlog.map((item) => (
            <div key={item.id}>
              <div className="mt-[20px] flex flex-col sm:flex-row justify-between">
                <h2>{item.title}</h2>
                <div className="flex gap-[60px] items-center">
                  <div className="flex items-center gap-[8px] text-sm">
                    <p>
                      <FaRegComment />
                    </p>
                    <p>10 comments</p>
                  </div>
                  <div className="flex items-center gap-[8px] text-sm">
                    <p>
                      <AiOutlineLike />
                    </p>
                    <p>45 likes</p>
                  </div>
                </div>
              </div>

              <div className=" pt-[2em] sm:pt-[4em] w-[100%]  sm:w-[80%] m-auto">
                <p>{item.content.substring(0, 100)}</p>

                <img
                  src={item.photo}
                  alt=""
                  className="max-h-[500px] object-contain rounded-md"
                />

                <p className="mt-[10px]">{item.content.substring(100)}</p>

                {/* comments */}
                <div className="mt-[3em]">
                  <h2 className="mb-[30px]">Comments</h2>
                  <div className="mb-[30px]">
                    <form className="flex" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        placeholder="Add New Comment"
                        className="border border-zinc-600 p-2 rounded-md w-[80%]"
                      />
                      <button
                        className="w-[20%] flex justify-end items-center pr-2"
                        onClick={handleSubmit}
                      >
                        <IoIosSend className="text-3xl border border-zinc-600 rounded-md " />
                      </button>
                    </form>
                  </div>

                  {item.dummyComments.map((ip) => (
                    <div
                      key={ip.id}
                      //   style={{ lineHeight: "0.8em" }}
                      className="mb-[30px]"
                    >
                      <div className="flex gap-[8px] text-sm">
                        <p>{ip.username}</p>
                        <p>{ip.time}</p>
                      </div>
                      <p>{ip.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificBlog;
