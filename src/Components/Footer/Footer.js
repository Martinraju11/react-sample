import React from "react";
import "./Footer.css";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <div>
      <div className="foot-container">
        {/* <div className="foot-1">
          <div className="foot-row-1">
            <div className="foot-image">
              <img
                src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"
                alt="logo"
              />
            </div>

            <div className="foot-image">
              <img
                src="https://d5x4wettsjecf.cloudfront.net/images4/cartrade_logo_238-48.png"
                alt="logo"
              />
            </div>

            <div className="foot-image">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSnc4G4oIvQgQ0_-j3GeehmX4jM67peT6Gf3GUQ5F1RAzsG3T_9"
                alt="logo"
              />
            </div>

            <div className="foot-image">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcReVr_V7v5Wm7YRZza5CmxFIfWszdh0xM3jMsVkaiF-V1R9M_D4"
                alt="logo"
              />
            </div>

            <div className="foot-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzES8BZMk3wgU5bsOyiaXfWJMee2V3Os7HLTwkFTiahJjuGoP"
                alt="logo"
              />
            </div>
          </div>
        </div> */}
        <div className="foot-2">
          <div className="foot-row-2">
            <div className="foot-2-left">
              <div>
                <p>Language:English,हिंदी</p>
              </div>
              <div className="foot-col">
                <p className="foot-para">About Us</p>
                <p className="foot-para">Terms & Conditions</p>
                <p className="foot-para">Careers</p>
                <p className="foot-para">Advertise</p>
              </div>
            </div>

            <div className="foot-2-right">
              <h5>Download Mobile App</h5>
              <div className="footer-btn">
                <div className="foot-play">
                  <img
                    src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2"
                    alt="footer"
                  />
                </div>

                <div className="foot-play">
                  <img
                    src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2"
                    alt="footer"
                  />
                </div>
              </div>
              <p>Connect with us</p>

              <div className="footer-icons">
                <BsFacebook />
                <AiFillTwitterCircle />
                <BsLinkedin />
                <AiOutlineInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="foot-3">
          <div className="foot-row-3">
            <div className="foot-last">
              <div className="foot-last-1">
                <p className="foot-pr rig">
                  &copy; 2006 - 2023. www.carwale.com
                </p>
                <p className="foot-pr">Visitor Agreement & Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
