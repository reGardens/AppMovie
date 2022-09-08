import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

// style
import "./style.scss";

// icons
import { IconContext } from "react-icons/lib";
import { FaStar } from "react-icons/fa";

const Popular = () => {
  const paramsID = useParams("");
  const [detail, setDetail] = useState("");
  const [loading, setLoading] = useState(false);
  const [rating, setRating] = useState(null);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  const getDataAsset = async () => {
    const res = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${paramsID.id}?api_key=8f0b026ba6cf9d21d0a94eb7a2ede055&language=en-US`,
    });

    if (res) {
      // console.log(res.data);
      const detail = res.data;
      setDetail(detail);
    } else {
      console.log("data tidak ada");
    }
  };

  const pushRating = async () => {
    const result = await axios({
      method: "POST",
      url: `https://api.themoviedb.org/3/movie/${paramsID.id}/rating?api_key=8f0b026ba6cf9d21d0a94eb7a2ede055`,
    });
  };

  // console.log(rate);

  useEffect(() => {
    setLoading(true);
    // handleSearch();

    setTimeout(() => {
      getDataAsset();
      pushRating();
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div className="detali">
      <ClipLoader
        className="loading"
        color={"#ffffff"}
        loading={loading}
        size={120}
      />
      <div className="dumy" key={detail.id}>
        <img className="jmbImg" src={`${baseUrl}${detail.poster_path}`}></img>
      </div>

      <div className="desc">
        <img className="smlImg" src={`${baseUrl}${detail.poster_path}`}></img>
        <div className="title"  key={detail.imdb_id}>
          <p>Original Title : {detail.original_title}</p>
          <p>Titiel : {detail.title}</p>
          <p>Overview : {detail.overview}</p>
          <p  key={detail.imdb_id}>Release : {detail.release_date}</p>
          <p>
            Give Your Rating :
            {[...Array(5)].map((bintang, index) => {
              const rateValue = index + 1;
              return (
                <label>
                    <input
                      type="radio"
                      name="rating"
                      value={rateValue}
                      onClick={() => setRating(rateValue)}
                    />
                    <IconContext.Provider value={{ className: "star-icon" }}>
                      <FaStar
                        className="star"
                        color={rateValue <= rating ? "#ffc107" : "#e4e5e9"}
                      />
                    </IconContext.Provider>
                </label>
              );
            })}
          </p><button onClick={null}>{rating} Star <b>Submit</b></button>
        </div>
      </div>
      {/* <p>{detail.title}</p>; */}
    </div>
  );
};

export default Popular;
