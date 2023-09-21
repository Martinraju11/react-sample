import React from "react";
import "./Brand.scss";
import { AiFillStar } from "react-icons/ai";
import { PiCaretRightBold } from "react-icons/pi";
import { Context } from "../../Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const Brand = () => {
  const { state, dispatch } = useContext(Context);
  let k;
  let navig = useNavigate();
  const goToDetails = (ind) => {
    state.filterBrand.forEach((v, i) => {
      if (i === ind) {
        k = { ...v };
      }
    });
    window.scrollTo(0, 0);
    dispatch({ type: "detailsUpdate", payload: k });
    navig("/detail");
  };
  const filt = (brands) => {
    let comp = brands;
    let s = state.model.filter((v, i) => {
      return v.brand === brands;
    });

    dispatch({ type: "brandFilter", payload: s });
    dispatch({ type: "company", payload: comp });
  };
  const fillBrands = (val) => {
    let br = state.brands.filter((v, i) => {
      return val !== v.brandName;
    });
    dispatch({ type: "similiar", payload: br });
  };
  return (
    <div>
      <section id="brand">
        <div className="brand-container">
          <h1>{state.company} Cars</h1>
          <p>
            {state.company} cars are affordable and offers various models with
            utmost comfort and compatibility and provides best riding
            experience.
          </p>
          <h2>{state.company} car models</h2>
          <div className="brand-row">
            <div className="brand-col-left">
              {state.filterBrand.map((v, i) => {
                return (
                  <div
                    className="brand-card-left"
                    onClick={() => goToDetails(i)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="brand-left-image">
                      <img src={v.source} alt="car" />
                    </div>
                    <div className="brand-left-detail">
                      <div className="detail-icon">
                        <h3>{v.name} </h3>
                        <PiCaretRightBold />
                      </div>
                      <p>{v.mileage}</p>
                      <p>{v.price} onwards</p>
                      <p>Avg. Ex-showroom price</p>
                      <p className="blue-brand">Get best offer</p>
                    </div>
                    <div className="brand-left-icons">
                      <div className="rating">
                        <AiFillStar />
                        <p>{v.rating}</p>
                      </div>
                      <p id="para">10 ratings</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="brand-column-right">
              <h3 className="brand-head">Similiar brands</h3>
              <div className="brand-col-right">
                {state.similiar.map((v, i) => {
                  return (
                    <div
                      className="brand-card-right"
                      onClick={() => filt(v.brandName)}
                      style={{ cursor: "pointer" }}
                    >
                      <div
                        onClick={() => fillBrands(v.brandName)}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={v.brandSource} alt="brand" />
                      </div>
                      <p>{v.brandName}</p>
                    </div>
                  );
                })}
              </div>

              <h3 className="brand-head">Popular Brands</h3>
              <div className="brand-bottom-flex">
                <div className="brand-bottom-col" onClick={() => filt("Tata")}>
                  <div
                    onClick={() => fillBrands("Tata")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="https://imgd.aeplcdn.com/0X0/n/cw/ec/16/brands/logos/tata.jpg?v=1629973276336&q=75"
                      alt="brand"
                    />
                  </div>
                  <p>Tata</p>
                </div>

                <div
                  className="brand-bottom-col"
                  onClick={() => filt("Hyundai")}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    onClick={() => fillBrands("Hyundai")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="https://imgd.aeplcdn.com/0X0/n/cw/ec/8/brands/logos/hyundai.jpg?v=1629973193722&q=75"
                      alt="brand"
                    />
                  </div>
                  <p>Hyundai</p>
                </div>

                <div
                  className="brand-bottom-col"
                  onClick={() => filt("Maruti suzuki")}
                  style={{ cursor: "pointer" }}
                >
                  <div
                    onClick={() => fillBrands("Maruti suzuki")}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src="https://imgd.aeplcdn.com/0X0/n/cw/ec/10/brands/logos/maruti-suzuki1647009823420.jpg?v=1647009823707&q=75"
                      alt="brand"
                    />
                  </div>
                  <p>Maruti suzuki</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
