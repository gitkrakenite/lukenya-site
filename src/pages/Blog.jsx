import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaRegComment } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Masonry from "react-masonry-css";
import "./masonry.css";
import { AiOutlineArrowUp, AiOutlineSearch } from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import { Link } from "react-router-dom";

const Blog = () => {
  const [images, setImages] = useState([
    /* your array of images */
    "https://images.pexels.com/photos/908965/pexels-photo-908965.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1671643/pexels-photo-1671643.jpeg?auto=compress&cs=tinysrgb&w=600",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const dummyBlogs = [
    {
      id: 1,
      title: "Food Drive",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      comments: "30",
      photo:
        "https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Clothes Ninja",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      comments: "30",
      photo:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Addressing Education",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      comments: "30",
      photo:
        "https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "General Education",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      comments: "30",
      photo:
        "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Fun Community",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      comments: "30",
      photo:
        "https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const breakpointColumnsObj = {
    default: 5,
    3000: 5,
    2000: 4,
    1500: 3,
    1200: 2,
    800: 1,
  };

  //   pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = dummyBlogs?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dummyBlogs?.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(4);

  const handleClick = (number) => {
    setStart(number);
    setEnd(number + 3);
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      handleClick(currentPage);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      handleClick(currentPage);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  // search  states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setsearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  // search user func
  const handleSearchChange = async (e) => {
    e.preventDefault();
    clearTimeout(setsearchTimeout);

    setSearchText(e.target.value);

    // console.log(searchText);

    setsearchTimeout(
      setTimeout(() => {
        const searchResults = dummyBlogs.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedResults(searchResults);
      }, 500)
    );
  };

  // scroll to top functionality
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [loading, setLoading] = useState(false);

  return (
    <div>
      {/* arrow to scroll to top */}
      {showArrow && (
        <div
          className="fixed bottom-20 right-4 text-3xl z-[999] cursor-pointer bg-red-700 text-zinc-50 rounded-full p-[5px]"
          onClick={handleScrollTop}
        >
          <AiOutlineArrowUp />
        </div>
      )}
      {/* navbar and other content */}
      <div>
        <Navbar />
        {/* hero section */}
        {!searchText && (
          <div>
            <div className="w-full h-[60vh] sm:h-[70vh]">
              {currentIndex < images.length ? (
                <img
                  src={images[currentIndex]}
                  alt="Background Placeholder"
                  className="w-full h-[60vh] sm:h-[70vh] object-cover"
                />
              ) : null}

              {/* overlay div */}
              <div className="absolute top-0 left-0 w-full h-[60vh] sm:h-[70vh] bg-[rgba(235,90,90,0.6)]" />
              {/* content */}
              <div className="absolute w-full h-[60vh] sm:h-[70vh]  top-[100px]  text-white px-[20px] pt-[1.5em]  sm:pt-[4em]">
                <div>
                  <h2 className="text-4xl sm:text-7xl font-bold">
                    The LuKenya
                  </h2>
                  <h2 className="text-4xl sm:text-7xl font-bold">---Connect</h2>
                  <h2 className="text-4xl sm:text-7xl font-bold">Blog.</h2>
                  <p className="mt-[20px]">Where voice meets understanding</p>
                </div>

                <div className="">
                  <h3 className="mb-[30px]">Get More From Us</h3>
                  <div className="flex gap-[10px] text-xl">
                    <a
                      href="#f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit"
                    >
                      <CiFacebook />
                    </a>
                    <a
                      href="#f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="#f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit"
                    >
                      <FaSpotify />
                    </a>
                    <a
                      href="#f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-inherit"
                    >
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/*  */}
      {/* wrapper */}
      <div className="px-[10px] sm:px-[3em] lg:px-[4em] pt-3 mt-[60px]">
        {loading ? (
          <>
            <div className="h-[70vh] w-full flex justify-center items-center">
              {/* <Spinner message="fetching ..." /> */}
              <p>Loading ...</p>
            </div>
          </>
        ) : (
          <>
            {dummyBlogs?.length < 1 ? (
              <>
                <div
                  className="flex items-center gap-[10px] cursor-pointer"
                  //   onClick={() => handleFetchBiz()}
                >
                  <p>Reload</p>
                  <IoReload className="text-xl" />
                </div>
                <div className="h-[70vh] w-full flex justify-center items-center">
                  <div>
                    <h2 className="text-center mb-2">😢Ouch.</h2>

                    <h2 className="mt-[20px] mb-[10px] text-center">
                      No Blogs Added
                    </h2>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* searchbar */}
                <div
                  className="mt-[1em] mb-[1em] w-full flex justify-center"
                  // style={{
                  //   // position: "-webkit-sticky",
                  //   position: "sticky",
                  //   zIndex: 1000,
                  //   top: "2em",
                  // }}
                >
                  <form
                    className="flex items-center gap-3
            w-[99%] sm:w-[70%] md:w-[60%] xl:w-[40%] border border-zinc-600   p-[8px] rounded-lg"
                  >
                    <AiOutlineSearch className="text-xl" />
                    <input
                      type="text"
                      placeholder="search anything"
                      className="w-full bg-transparent border-none outline-none"
                      value={searchText}
                      onChange={handleSearchChange}
                    />
                  </form>
                </div>

                {/* data */}
                <div>
                  {/* nav numbers */}
                  {!searchText && (
                    <nav className="flex justify-center">
                      <ul className="flex gap-[2em] mt-[10px] px-[5px] py-[10px] items-center ">
                        {/* map */}

                        <>
                          <li>
                            <a
                              href="#"
                              onClick={prevPage}
                              className="text-zinc-700 text-inherit"
                            >
                              <p className="text-zinc-700">Prev</p>
                            </a>
                          </li>
                          <li className="flex gap-[10px] ">
                            {numbers
                              .slice(start - 1, end)
                              .map((item, index) => (
                                <li
                                  key={index}
                                  className={`normal-nav ${
                                    currentPage === item && "active-nav"
                                  }`}
                                >
                                  <a
                                    href="#"
                                    onClick={() => {
                                      handleClick(item);
                                      changeCurrentPage(item);
                                    }}
                                    className="text-inherit"
                                  >
                                    <p>{item}</p>
                                  </a>
                                </li>
                              ))}
                          </li>

                          <li>
                            <a href="#" onClick={nextPage}>
                              <p className="text-zinc-700">Next</p>
                            </a>
                          </li>
                        </>
                      </ul>
                    </nav>
                  )}
                  {/* photos */}
                  <div>
                    <div className="mt-[2em]">
                      {searchText ? (
                        <>
                          <div className="mb-[15px] text-zinc-400">
                            {searchText && <p>Results For : {searchText}</p>}
                          </div>

                          {searchedResults?.length > 0 ? (
                            <>
                              <div>
                                <Masonry
                                  breakpointCols={breakpointColumnsObj}
                                  className="my-masonry-grid "
                                  columnClassName="my-masonry-grid_column"
                                >
                                  {searchedResults?.map((item) => (
                                    <div
                                      className="mb-8 relative group"
                                      key={item.id}
                                    >
                                      <Link
                                        to={`/blog/${item.id}`}
                                        className="text-inherit"
                                      >
                                        <img
                                          src={item.photo}
                                          alt=""
                                          className="rounded-md object-cover max-h-[300px] w-full"
                                        />

                                        <div className=" mt-[10px]">
                                          <p className="">{item.title}</p>
                                          <p className="mt-[-10px] text-sm">
                                            {item.content.substring(0, 80)}...
                                          </p>
                                          <div className="flex gap-[6px] items-center text-sm">
                                            <p>
                                              <FaRegComment />
                                            </p>
                                            <p>{item.comments} comments</p>
                                          </div>
                                        </div>
                                      </Link>
                                    </div>
                                  ))}
                                </Masonry>
                              </div>
                            </>
                          ) : (
                            <div className="flex justify-center mt-[7em]">
                              <p>😥 No results for {searchText}</p>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <div>
                            <Masonry
                              breakpointCols={breakpointColumnsObj}
                              className="my-masonry-grid "
                              columnClassName="my-masonry-grid_column"
                            >
                              {records?.map((item) => (
                                <div
                                  className="mb-8 relative group"
                                  key={item.id}
                                >
                                  <Link
                                    to={`/blog/${item.id}`}
                                    className="text-inherit"
                                  >
                                    <img
                                      src={item.photo}
                                      alt=""
                                      className="rounded-md object-cover max-h-[300px] w-full"
                                    />

                                    <div className=" mt-[10px]">
                                      <p className="">{item.title}</p>
                                      <p className="mt-[-10px] text-sm">
                                        {item.content.substring(0, 80)}...
                                      </p>
                                      <div className="flex gap-[6px] items-center text-sm">
                                        <p>
                                          <FaRegComment />
                                        </p>
                                        <p>{item.comments} comments</p>
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </Masonry>
                          </div>
                        </>
                      )}

                      {/*  */}
                    </div>
                  </div>
                  {/*  */}
                </div>
              </>
            )}
          </>
        )}

        {/*  */}
      </div>
      {/*  */}
      {/*  */}
    </div>
  );
};

export default Blog;
