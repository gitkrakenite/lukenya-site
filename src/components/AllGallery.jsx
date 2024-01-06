import React, { useEffect, useState } from "react";
import {
  AiOutlineArrowRight,
  AiOutlineArrowUp,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoReload } from "react-icons/io5";
import Masonry from "react-masonry-css";
import "./masonry.css";
import Navbar from "./Navbar";

const AllGallery = () => {
  const DummyPictures = [
    {
      id: 1,
      title: "Makinika High School",
      picture:
        "https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Juan High School",
      picture:
        "https://images.pexels.com/photos/9628112/pexels-photo-9628112.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Zaidi Slums",
      picture:
        "https://images.pexels.com/photos/9968379/pexels-photo-9968379.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Random Photo in Thika",
      picture:
        "https://images.pexels.com/photos/3213283/pexels-photo-3213283.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "kkkdkfdfk",
      picture:
        "https://images.pexels.com/photos/4483669/pexels-photo-4483669.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "kkkdkfdfk",
      picture:
        "https://images.pexels.com/photos/6646851/pexels-photo-6646851.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      title: "kkkdkfdfk",
      picture:
        "https://images.pexels.com/photos/17903032/pexels-photo-17903032/free-photo-of-kids-outside-of-a-traditional-african-hut-with-a-thatched-roof-in-the-village.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      title: "kkkdkfdfk",
      picture:
        "https://images.pexels.com/photos/13998689/pexels-photo-13998689.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      title: "kkkdkfdfk",
      picture:
        "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      title: "kkkdkfdfk",
      picture:
        "https://images.pexels.com/photos/4587189/pexels-photo-4587189.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 11,
      title: "kkkdkfdfk",
      picture:
        "https://images.pexels.com/photos/14554004/pexels-photo-14554004.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 12,
      title: "kkkdkfdfk",
      picture:
        "https://images.pexels.com/photos/8349235/pexels-photo-8349235.jpeg?auto=compress&cs=tinysrgb&w=600",
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
  const records = DummyPictures?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(DummyPictures?.length / recordsPerPage);
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
        const searchResults = DummyPictures.filter((item) =>
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

      {!searchText && (
        <>
          <Navbar />
          <div className="px-[10px] md:px-[2em] xl:px-[5em] mt-[100px] pb-[20px]">
            <h2>Our Gallery</h2>
            <p className="w-[30%]">
              In every picture, there is a story to be told, a memory to be
              cherished, and a moment to be remembered. Our gallery is a
              testament to the beautiful tapestry of shared experiences and the
              power of memories captured in each frame{" "}
            </p>
            <p className="text-sm text-red-500">
              All images are subject to copyright
            </p>
          </div>
        </>
      )}

      {/* wrapper */}
      <div className="px-[10px] sm:px-[3em] lg:px-[4em] pt-3">
        {/* topbar */}
        {/* {!searchText && (
          
        )} */}

        {loading ? (
          <>
            <div className="h-[70vh] w-full flex justify-center items-center">
              {/* <Spinner message="fetching ..." /> */}
              <p>Loading ...</p>
            </div>
          </>
        ) : (
          <>
            {DummyPictures?.length < 1 ? (
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
                      No Photos Added
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
                                      <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <div className="bg-gradient-to-t from-transparent to-black opacity-90 w-full h-full rounded-md">
                                          <div className="absolute top-[20px] w-full px-2 mb-[2em] flex justify-end">
                                            {/* top stats */}
                                            hh
                                          </div>
                                          {/* likes and stats */}
                                          <div className="absolute top-[140px] left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <p className="text-white"></p>
                                          </div>
                                          {/*  */}
                                          <div className="absolute bottom-[20px] flex gap-[10%] w-full ">
                                            <div className="pl-2">
                                              <div className="flex gap-[10px] text-zinc-300">
                                                {/* <p>#{item.category}</p> */}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <img
                                        src={item.picture}
                                        alt=""
                                        className="rounded-md object-cover"
                                      />

                                      {/* more items */}
                                      <div className="flex justify-between items-center mt-[10px]">
                                        {item.title}
                                      </div>
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
                                  <div className="overlay absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="bg-gradient-to-t from-transparent to-black opacity-90 w-full h-full rounded-md">
                                      <div className="absolute top-[20px] w-full px-2 mb-[2em] flex justify-end">
                                        {/* top stats */}
                                        hh
                                      </div>
                                      {/* likes and stats */}
                                      <div className="absolute top-[140px] left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="text-white"></p>
                                      </div>
                                      {/*  */}
                                      <div className="absolute bottom-[20px] flex gap-[10%] w-full ">
                                        <div className="pl-2">
                                          <div className="flex gap-[10px] text-zinc-300">
                                            {/* <p>#{item.category}</p> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <img
                                    src={item.picture}
                                    alt=""
                                    className="rounded-md object-cover"
                                  />

                                  {/* more items */}
                                  <div className="flex justify-between items-center mt-[10px]">
                                    {item.title}
                                  </div>
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

export default AllGallery;
