import React, { useContext } from "react";
import "./Detail.css";
import { AiOutlineClockCircle, AiOutlineCar } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsCurrencyRupee, BsFuelPump } from "react-icons/bs";
import {
  PiEngineBold,
  PiCaretRightBold,
  PiHandCoinsFill,
} from "react-icons/pi";
import {
  GiGearStickPattern,
  GiPathDistance,
  GiHouseKeys,
} from "react-icons/gi";
import { MdAirlineSeatReclineExtra, MdOutlineFilterAlt } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { RiUserLocationLine } from "react-icons/ri";
import { Context } from "../../Context";

export const Detail = () => {
  const { state } = useContext(Context);
  const readmore = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

  const readmor = () => {
    var dot = document.getElementById("dot");
    var moreTex = document.getElementById("mor");
    var btnTex = document.getElementById("bt");

    if (dot.style.display === "none") {
      dot.style.display = "inline";
      btnTex.innerHTML = "Read more";
      moreTex.style.display = "none";
    } else {
      dot.style.display = "none";
      btnTex.innerHTML = "Read less";
      moreTex.style.display = "inline";
    }
  };
  return (
    <div className="det-container">
      <div className="detail-1">
        <h1>{state.detail.name}</h1>
        <div className="detail-1-row">
          <div className="detail-1-col">
            <div className="detail-1-card">
              <img src={state.detail.source} alt="car" />
            </div>
          </div>

          <div className="detail-1-col">
            <div className="detail-1-card">
              <div className="det-top">
                <div className="det-left">
                  <p className="det-para">Version</p>
                  <p>
                    <b>{state.detail.version}</b>
                  </p>
                </div>

                <div className="det-right">
                  <p className="det-para">City</p>
                  <p>
                    <b>Chennai</b>
                  </p>
                </div>
              </div>

              <div className="det-bottom">
                <h2>{state.detail.price}</h2>
                <p>On-road price , Chennai</p>

                <div className="emi">
                  <div className="emi-left">
                    <p>EMI {state.detail.emi} for 5 years</p>
                    <p>EMI calculator</p>
                  </div>

                  <div className="emi-right">
                    <button>Get EMI offers</button>
                  </div>
                </div>
              </div>

              <div className="offers">
                <div className="off">
                  <AiOutlineClockCircle />
                  <p>
                    Waiting period <b>14-34 weeks</b>
                  </p>
                </div>
                <button>Get August Offers</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-2">
        <h2>{state.detail.name} Car Specifications</h2>
        <div className="detail-2-row">
          <div className="detail-2-col-left">
            <div className="detail-2-card">
              <div className="det-2-left">
                <div className="det-tab">
                  <div className="fle-ico">
                    <BsCurrencyRupee />
                    <p>Price</p>
                  </div>
                  <h4>{state.detail.price}</h4>
                </div>

                <div className="det-tab">
                  <div className="fle-ico">
                    <GiPathDistance />
                    <p>Mileage</p>
                  </div>
                  <h4>{state.detail.mileage}</h4>
                </div>

                <div className="det-tab">
                  <div className="fle-ico">
                    <PiEngineBold />
                    <p>Engine</p>
                  </div>
                  <h4>{state.detail.cc}</h4>
                </div>
              </div>

              <div className="det-2-left">
                <div className="det-tab">
                  <div className="fle-ico">
                    <BsFuelPump />
                    <p>Fuel type</p>
                  </div>
                  <h4>{state.detail.fuel}</h4>
                </div>

                <div className="det-tab">
                  <div className="fle-ico">
                    <GiGearStickPattern />
                    <p>Transmission</p>
                  </div>
                  <h4>{state.detail.transmission}</h4>
                </div>

                <div className="det-tab">
                  <div className="fle-ico">
                    <MdAirlineSeatReclineExtra />
                    <p>Seating capacity</p>
                  </div>
                  <h4>{state.detail.seating}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-2-col-right">
            <div className="detail-2-card">
              <img
                src="https://tpc.googlesyndication.com/simgad/2974536725463390255"
                alt="ad"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="detail-3">
        <div className="detail-3-row">
          <div className="detail-3-col-left">
            <h2>All new {state.detail.name} Summary</h2>
            <div className="detail-3-card-left">
              <p>
                {state.detail.sum}
                <span id="dots">...</span>
                <span id="more">{state.detail.less}</span>
              </p>
              <div className="btn-less">
                <button id="btn" onClick={readmore}>
                  Read More
                </button>
              </div>
            </div>

            <h2>{state.detail.name} Price</h2>
            <div className="detail-3-card-left-2">
              <p>
                {state.detail.summary} <span id="dot">...</span>
                <span id="mor">{state.detail.more}</span>
              </p>
              <div className="btn-more">
                <button id="bt" onClick={readmor}>
                  Read More
                </button>
              </div>
            </div>

            <div className="filter-detail">
              <div className="filter-flex">
                <MdOutlineFilterAlt />
                <p>Filter by fuel type & transmission</p>
              </div>

              <div className="filter-manual">
                <div>Manual</div>
                <div>Automatic (AMT)</div>
                <div>Automatic (TC)</div>
              </div>
            </div>
          </div>

          <div className="detail-3-col-right">
            <div className="detail-3-card-right">
              <div className="card-in">
                <h3>{state.detail.brand}</h3>
                <h4>
                  <BiPhoneCall /> 18002090230
                </h4>

                <div className="demo">
                  <p>
                    Get in touch with Authorised {state.detail.brand} Dealership
                    on call for best buying options like:
                  </p>
                  <div className="demo-flex">
                    <p>Doorstep Demo</p>
                    <p>Offers and Discounts</p>
                  </div>
                  <div className="demo-flex">
                    <p>Lowest EMI</p>
                    <p>Exchange benefits</p>
                  </div>

                  <h3>Get the best deal</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-4">
        <div className="detail-4-row">
          <div className="detail-4-col-left">
            <div className="detail-4-card-left">
              <table>
                <tr>
                  <td>Versions</td>
                  <td>Price</td>
                  <td>Compare</td>
                </tr>
                <tr>
                  <td>
                    <p className="det-bld">{state.detail.version1}</p>
                    <p>{state.detail.cc}</p>
                  </td>
                  <td className="det-bld">{state.detail.price1}</td>
                  <td>
                    <p>Add to compare</p>
                    <p className="det-blue">View Price breakup | Offers</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="det-bld">{state.detail.version2}</p>
                    <p>{state.detail.cc}</p>
                  </td>
                  <td className="det-bld">{state.detail.price2}</td>
                  <td>
                    <p>Add to compare</p>
                    <p className="det-blue">View Price breakup | Offers</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="det-bld">{state.detail.version3}</p>
                    <p>{state.detail.cc}</p>
                  </td>
                  <td className="det-bld">{state.detail.price3}</td>
                  <td>
                    <p>Add to compare</p>
                    <p className="det-blue">View Price breakup | Offers</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="det-bld">{state.detail.version4}</p>
                    <p>{state.detail.cc}</p>
                  </td>
                  <td className="det-bld">{state.detail.price4}</td>
                  <td>
                    <p>Add to compare</p>
                    <p className="det-blue">View Price breakup | Offers</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div className="detail-4-col-right">
            <h2>{state.detail.name} Price in India</h2>
            <div className="detail-4-card-right">
              <div className="det-4-right">
                <p>City</p>
                <p>On-road prices</p>
              </div>

              <div className="det-4-right">
                <p className="right-city">Mumbai</p>
                <p className="right-price">{state.detail.price} onwards</p>
              </div>

              <div className="det-4-right">
                <p className="right-city">Bangalore</p>
                <p className="right-price">{state.detail.price} onwards</p>
              </div>

              <div className="det-4-right">
                <p className="right-city">Delhi</p>
                <p className="right-price">{state.detail.price} onwards</p>
              </div>

              <div className="det-4-right">
                <p className="right-city">Pune</p>
                <p className="right-price">{state.detail.price} onwards</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-5">
        <div className="detail-5-row">
          <div className="detail-5-col-left">
            <div className="detail-5-card-left">
              <div className="det-5-first">
                <GrNotes />
              </div>

              <div className="det-5-second">
                <h3>{state.detail.name} 2023 Brochure</h3>
                <p>
                  Download the Brochure in just one click to view{" "}
                  {state.detail.name} price,specs and features of all variants.
                </p>
                <div className="bot-det">
                  <p>Check Other car's brochure</p>
                  <PiCaretRightBold />
                </div>
              </div>

              <div className="det-5-third">
                <button>Download brochure</button>
              </div>
            </div>
          </div>

          <div className="detail-5-col-right">
            <div className="detail-5-card-right">
              <img
                src="https://tpc.googlesyndication.com/simgad/4279025265454136407"
                alt="ad"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="detail-6">
        <h2>{state.detail.name} Mileage</h2>
        <p>
          {state.detail.name} Mileage claimed by ARAI is {state.detail.mileage1}
        </p>
        <div className="detail-6-row">
          <div className="detail-6-col-left">
            <div className="detail-6-card-left">
              <table>
                <tr className="table-clr">
                  <td>Fuel type</td>
                  <td>Transmission</td>
                  <td>ARAI mileage</td>
                </tr>
                <tr className="table-bold">
                  <td>
                    {state.detail.variant1} ({state.detail.cc})
                  </td>
                  <td>{state.detail.type1}</td>
                  <td>{state.detail.mileage1}</td>
                </tr>
                <tr className="table-bold">
                  <td>
                    {state.detail.variant2} ({state.detail.cc})
                  </td>
                  <td>{state.detail.type2}</td>
                  <td>{state.detail.mileage2}</td>
                </tr>
                <tr className="table-bold">
                  <td>
                    {state.detail.variant3} ({state.detail.cc})
                  </td>
                  <td>{state.detail.type1}</td>
                  <td>{state.detail.mileage3}</td>
                </tr>
              </table>
            </div>
            <h2 className="detail-head-6">{state.detail.name} Images</h2>
            <div className="det-6-fl">
              <div className="det-6-img">
                <div>
                  <img src={state.detail.source1} alt="alternative" />
                </div>
              </div>
              <div className="det-6-img">
                <div>
                  <img src={state.detail.source2} alt="alternative" />
                </div>
              </div>
              <div className="det-6-img">
                <div>
                  <img src={state.detail.source3} alt="alternative" />
                </div>
              </div>
              <div className="det-6-img">
                <div>
                  <img src={state.detail.source4} alt="alternative" />
                </div>
              </div>
            </div>
          </div>

          <div className="detail-6-col-right">
            <h2>Car Buyer tools</h2>
            <div className="detail-6-card-right">
              <div className="det-6-right">
                <div className="det-icon">
                  <PiHandCoinsFill />
                </div>
                <div>
                  <h4>Instant Car Loan</h4>
                  <p>Apply and Get best car loan offers within minutes</p>
                </div>
              </div>

              <div className="det-6-right">
                <div className="det-icon">
                  <RiUserLocationLine />
                </div>
                <div>
                  <h4>Locate dealer</h4>
                  <p>Locate {state.detail.brand} Dealers</p>
                </div>
              </div>

              <div className="det-6-right">
                <div className="det-icon">
                  <GiHouseKeys />
                </div>
                <div>
                  <h4>Used {state.detail.brand} cars</h4>
                  <p>30,300 used {state.detail.brand} cars</p>
                </div>
              </div>

              <div className="det-6-right">
                <div className="det-icon">
                  <AiOutlineCar />
                </div>
                <div>
                  <h4>{state.detail.brand} cars</h4>
                  <p>Explore other {state.detail.brand} cars</p>
                </div>
              </div>
            </div>

            <div className="last-img">
              <img
                src="https://tpc.googlesyndication.com/simgad/3235745227051909468"
                alt="ad"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
