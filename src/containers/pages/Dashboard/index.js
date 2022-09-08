import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../../configs/redux/action";

import ClipLoader from "react-spinners/ClipLoader";

// images
import tmdbLogo from "../../../assets/logo/tmdb-logo.png";

// style
import "./style.scss";

// icons
import { IconContext } from "react-icons/lib";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { getUser } = useSelector((state) => state);
  //   const [images, setImages] = useState("");
  const [movie, setMovie] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const baseImgUrl = "https://image.tmdb.org/t/p/original";

  const getMovie = async () => {
    const res = await axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=8f0b026ba6cf9d21d0a94eb7a2ede055&language=en-US&page=1",
    });

    if (res) {
      const data = res.data.results;
      //   const detail = res.data.results;
      //   const jmbImage = res.data.results.backdrop_path;
      setMovie(data);
      //   console.log(detail);
    }
  };

  //   console.log(search);

  useEffect(() => {
    setLoading(true);
    // handleSearch();

    setTimeout(() => {
      getMovie();
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      <div className="img-besar">
        <img src={tmdbLogo} />
        <div className="input-wrap">
          <div className="wrap">
            <div className="src">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
              />

              <IconContext.Provider value={{ className: "search-icon" }}>
                <BsSearch />
              </IconContext.Provider>
            </div>
            <div className="hasil">
              {
                movie.length > 0 ? (
                  <Fragment>
                    {movie
                      .filter((val) => {
                        if (search == "") {
                          // return val;
                        } else if (
                          val.title
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          loading == true
                        ) {
                          // setLoading(true)
                          return val;
                        }
                      })
                      .map((movie, index) => {
                        return (
                          <div className="search-wrap" key={index}>
                            {/* <p>{movie.title}</p> */}
                            {/* <Link to="popular">{movie.title}</Link> */}
                            <Link
                              to={{
                                pathname: `detail/${movie.id}`,
                                // query: { id: movie.id },
                              }}
                            >
                              {movie.title}
                            </Link>
                            {/* <option value={null}>
                            </option> */}
                          </div>
                        );
                      })}
                  </Fragment>
                ) : null
                //   (
                //     <ClipLoader
                //       className="loading"
                //       color={"#ffffff"}
                //       loading={loading}
                //       size={120}
                //     />
                //   )
              }
            </div>
          </div>
        </div>
        <div className="dumy" />
      </div>

      <div className="subLink">
        <p>Ter Populer</p>
      </div>

      <div className="card-overflow">
        <div className="image-wrap">
          {movie.length > 0 ? (
            <Fragment>
              {movie.map((movie, index) => {
                return (
                  <Link
                    to={{
                      pathname: `detail/${movie.id}`,
                      // query: { id: movie.id },
                    }}
                    key={index}
                  >
                    <div className="image-wrap">
                      <img src={`${baseImgUrl}${movie.poster_path}`}></img>
                      <p>{movie.title}</p>
                    </div>
                  </Link>
                );
              })}
            </Fragment>
          ) : (
            <ClipLoader
              className="loading"
              color={"#ffffff"}
              loading={loading}
              size={120}
            />
          )}
        </div>

        {/* <Carousel> */}
        {/* <Carousel.Item>
          <img
          className="d-block w-100"
          src={`${baseImgUrl}${movie.poster_path}`}
          alt="First slide"
          />
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
          className="d-block w-100"
          src={`${baseImgUrl}/${movie[1].poster_path}`}
          alt="Second slide"
          />
        </Carousel.Item> */}
        {/* </Carousel> */}
      </div>
      <div className="showMore">
        <p>More...</p>
      </div>
    </>
  );
};

export default Dashboard;
