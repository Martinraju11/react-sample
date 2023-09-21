import React, { useContext } from "react";

import "./Home.css";

import { Context } from "../../Context";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const { state, dispatch } = useContext(Context);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  let m;
  let navv = useNavigate();
  const goToDetails = (ind) => {
    state.feature.forEach((v, i) => {
      if (i === ind) {
        m = { ...v };
      }
    });
    window.scrollTo(0, 0);
    dispatch({ type: "detailsUpdate", payload: m });
    navv("/detail");
  };
  let nav = useNavigate();
  const fil = (brands) => {
    let comp = brands;
    let s = state.model.filter((v, i) => {
      return v.brand === brands;
    });
    window.scrollTo(0, 0);
    dispatch({ type: "brandFilter", payload: s });
    dispatch({ type: "company", payload: comp });
    nav("/brand");
  };
  const fillBrand = (val) => {
    let br = state.brands.filter((v, i) => {
      return val !== v.brandName;
    });
    dispatch({ type: "similiar", payload: br });
  };
  let navit = useNavigate();
  const goToCompare = () => {
    window.scrollTo(0, 0);
    navit("/compare");
  };
  let ma = useNavigate();
  const goToPrice = (a, b) => {
    console.log(a, b);
    let pri = state.model.filter((v, i) => {
      return v.amount > a && v.amount < b;
    });
    dispatch({ type: "priceFilter", payload: pri });
    window.scrollTo(0, 0);
    ma("/price");
  };
  return (
    <div>
      <div className="banner">
        <div className="banner-input">
          <input type="text" placeholder="Type to select car name" />
          <div className="banner-button">
            <button>Search</button>
          </div>
        </div>
      </div>

      <div className="featured">
        <h2 className="head-feature">Featured Cars</h2>

        <div style={{ width: "100%" }}>
          <Slider {...settings}>
            {state.feature.map((v, i) => {
              return (
                <div className="featured-col">
                  <div
                    className="featured-card"
                    onClick={() => goToDetails(i)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={v.source} alt="car" />
                    <div className="feature-bottom">
                      <h3>{v.name}</h3>
                      <p>
                        <b>{v.price}</b> onwards
                      </p>
                      <p className="fea-para">On-road Price,Chennai</p>
                      <button onClick={() => goToDetails(i)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      <div className="brands">
        <div className="head-brands">
          <h2>All Brands</h2>
        </div>
        <div className="brands-row">
          {state.brands.map((v, i) => {
            return (
              <div
                className="brands-col"
                onClick={() => fillBrand(v.brandName)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="brands-card"
                  onClick={() => fil(v.brandName)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="brand-img">
                    <img src={v.brandSource} alt="brand" />
                  </div>
                  <p>{v.brandName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="priceList">
        <h2 className="priceList-head">Find Cars of Your Choice</h2>
        <div className="priceList-row">
          <div className="priceList-col">
            <div
              className="priceList-card"
              onClick={() => goToPrice(0, 600000)}
            >
              <p>Under 6 lakh</p>
            </div>
          </div>

          <div className="priceList-col">
            <div
              className="priceList-card"
              onClick={() => goToPrice(0, 700000)}
            >
              <p>Under 7 lakh</p>
            </div>
          </div>

          <div className="priceList-col">
            <div
              className="priceList-card"
              onClick={() => goToPrice(0, 800000)}
            >
              <p>Under 8 lakh</p>
            </div>
          </div>

          <div className="priceList-col">
            <div
              className="priceList-card"
              onClick={() => goToPrice(0, 900000)}
            >
              <p>Under 9 lakh</p>
            </div>
          </div>

          <div className="priceList-col">
            <div
              className="priceList-card"
              onClick={() => goToPrice(0, 1000000)}
            >
              <p>Under 10 lakh</p>
            </div>
          </div>

          <div className="priceList-col">
            <div
              className="priceList-card"
              onClick={() => goToPrice(1100000, 30000000)}
            >
              <p>Luxury Cars</p>
            </div>
          </div>
        </div>
      </div>

      <div className="compare">
        <div className="compare-card">
          <h3 onClick={goToCompare}>Compare Cars</h3>
        </div>
      </div>
    </div>
  );
};
