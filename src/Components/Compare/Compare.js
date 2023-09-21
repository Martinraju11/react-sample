import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Compare.scss";

import { Context } from "../../Context";
import Accordion from "react-bootstrap/Accordion";
import Modal from "react-bootstrap/Modal";
export const Compare = () => {
  const { state } = useContext(Context);
  const [link, setLink] = useState(
    "https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg"
  );
  const [link2, setLink2] = useState(
    "https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg"
  );
  const [comp1, setComp1] = useState(false);
  const [comp2, setComp2] = useState(false);
  const [obj, setObj] = useState({});
  const [obj2, setObj2] = useState({});
  const [tab, setTab] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const fun = (e) => {
    console.log(1);
    state.model.forEach((v, i) => {
      if (v.name === e) {
        setLink(v.source);

        setObj(v);
        setComp1(true);
        setShow(false);
      }
    });
  };
  const fun2 = (e) => {
    console.log(2);
    state.model.forEach((v, i) => {
      if (v.name === e) {
        setLink2(v.source);

        setObj2(v);
        setComp2(true);
        setShow2(false);
      }
    });
  };
  return (
    <div>
      <div className="compare-container">
        <h2 className="compare-top-head">Compare Cars</h2>
        <p className="compare-top-para">
          Are you confused between multiple cars to choose from? Not sure what
          to look for in comparison? Don't worry, car comparison was never so
          easy. Hence, CarWale brings you an amazing tool 'Compare Cars' for car
          comparison based on prices, mileage, power, performance, and other
          features. Compare your favourite cars to choose the one that suits
          your needs. Compare multiple cars at once to find the best one.
        </p>

        <div className="compare-row">
          <div className="compare-col">
            <img
              src={link}
              alt="compare"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            />

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Select car</Modal.Title>
              </Modal.Header>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Tata</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun("Tata Harrier")}
                    className="acc"
                  >
                    Tata Harrier
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Tata Tiago")}
                    className="acc"
                  >
                    Tata Tiago
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Tata Safari")}
                    className="acc"
                  >
                    Tata Safari
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Tata Altroz")}
                    className="acc"
                  >
                    Tata Altroz
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Tata Punch")}
                    className="acc"
                  >
                    Tata Punch
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Hyundai</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun("Hyundai Grand i10 Nios")}
                    className="acc"
                  >
                    Hyundai Grand i10 Nios
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Hyundai Exter")}
                    className="acc"
                  >
                    Hyundai Exter
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Hyundai Verna")}
                    className="acc"
                  >
                    Hyundai Verna
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Hyundai Creta")}
                    className="acc"
                  >
                    Hyundai Creta
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Hyundai Venue")}
                    className="acc"
                  >
                    Hyundai Venue
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Mahindra</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun("Mahindra Scorpio")}
                    className="acc"
                  >
                    Mahindra Scorpio
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Mahindra Thar")}
                    className="acc"
                  >
                    Mahindra Thar
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Mahindra Bolero")}
                    className="acc"
                  >
                    Mahindra Bolero
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Mahindra Marazzo")}
                    className="acc"
                  >
                    Mahindra Marazzo
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Mahindra XUV300")}
                    className="acc"
                  >
                    Mahindra XUV300
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Maruti suzuki</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun("Maruti Fronx")}
                    className="acc"
                  >
                    Maruti Fronx
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Maruti Invicto")}
                    className="acc"
                  >
                    Maruti Invicto
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Maruti Grand Vitara")}
                    className="acc"
                  >
                    Maruti Grand Vitara
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Maruti Baleno")}
                    className="acc"
                  >
                    Maruti Baleno
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Maruti Ertiga")}
                    className="acc"
                  >
                    Maruti Ertiga
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Toyota</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun("Toyota Fortuner")}
                    className="acc"
                  >
                    Toyota Fortuner
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Toyota Innova Crysta")}
                    className="acc"
                  >
                    Toyota Innova Crysta
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Toyota Glanza")}
                    className="acc"
                  >
                    Toyota Glanza
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Toyota Hilux")}
                    className="acc"
                  >
                    Toyota Hilux
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun("Toyota Urban Cruiser")}
                    className="acc"
                  >
                    Toyota Urban Cruiser
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Modal>
          </div>

          <div className="compare-col">
            <img
              src={link2}
              alt="compare"
              onClick={handleShow2}
              style={{ cursor: "pointer" }}
            />

            <Modal
              show={show2}
              onHide={handleClose2}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Select car</Modal.Title>
              </Modal.Header>
              <Accordion>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Tata</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun2("Tata Harrier")}
                    className="acc"
                  >
                    Tata Harrier
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Tata Tiago")}
                    className="acc"
                  >
                    Tata Tiago
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Tata Safari")}
                    className="acc"
                  >
                    Tata Safari
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Tata Altroz")}
                    className="acc"
                  >
                    Tata Altroz
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Tata Punch")}
                    className="acc"
                  >
                    Tata Punch
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>Hyundai</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun2("Hyundai Grand i10 Nios")}
                    className="acc"
                  >
                    Hyundai Grand i10 Nios
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Hyundai Exter")}
                    className="acc"
                  >
                    Hyundai Exter
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Hyundai Verna")}
                    className="acc"
                  >
                    Hyundai Verna
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Hyundai Creta")}
                    className="acc"
                  >
                    Hyundai Creta
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Hyundai Venue")}
                    className="acc"
                  >
                    Hyundai Venue
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>Mahindra</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun2("Mahindra Scorpio")}
                    className="acc"
                  >
                    Mahindra Scorpio
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Mahindra Thar")}
                    className="acc"
                  >
                    Mahindra Thar
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Mahindra Bolero")}
                    className="acc"
                  >
                    Mahindra Bolero
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Mahindra Marazzo")}
                    className="acc"
                  >
                    Mahindra Marazzo
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Mahindra XUV300")}
                    className="acc"
                  >
                    Mahindra XUV300
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>Maruti suzuki</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun2("Maruti Fronx")}
                    className="acc"
                  >
                    Maruti Fronx
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Maruti Invicto")}
                    className="acc"
                  >
                    Maruti Invicto
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Maruti Grand Vitara")}
                    className="acc"
                  >
                    Maruti Grand Vitara
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Maruti Baleno")}
                    className="acc"
                  >
                    Maruti Baleno
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Maruti Ertiga")}
                    className="acc"
                  >
                    Maruti Ertiga
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>Toyota</Accordion.Header>
                  <Accordion.Body
                    onClick={() => fun2("Toyota Fortuner")}
                    className="acc"
                  >
                    Toyota Fortuner
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Toyota Innova Crysta")}
                    className="acc"
                  >
                    Toyota Innova Crysta
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Toyota Glanza")}
                    className="acc"
                  >
                    Toyota Glanza
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Toyota Hilux")}
                    className="acc"
                  >
                    Toyota Hilux
                  </Accordion.Body>
                  <Accordion.Body
                    onClick={() => fun2("Toyota Urban Cruiser")}
                    className="acc"
                  >
                    Toyota Urban Cruiser
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Modal>
          </div>
        </div>
        {comp1 && comp2 ? (
          <>
            <div className="compare-btn">
              <button onClick={() => setTab(true)}>Compare</button>
            </div>
          </>
        ) : (
          ""
        )}
        {tab ? (
          <div className="compare-table">
            <h2>Specifications and Finance</h2>
            <table>
              <tr>
                <th colSpan={3}>Engine & Transmission</th>
              </tr>
              <tr>
                <th>Engine</th>
                <td>{obj.cc}</td>
                <td>{obj2.cc}</td>
              </tr>
              <tr>
                <th>Engine Type</th>
                <td>{obj.enginetype}</td>
                <td>{obj2.enginetype}</td>
              </tr>
              <tr>
                <th>Fuel Type</th>
                <td>{obj.fuel}</td>
                <td>{obj2.fuel}</td>
              </tr>
              <tr>
                <th>Max Power</th>
                <td>{obj.maxpower}</td>
                <td>{obj2.maxpower}</td>
              </tr>
              <tr>
                <th>Max Torque</th>
                <td>{obj.maxtorque}</td>
                <td>{obj2.maxtorque}</td>
              </tr>
              <tr>
                <th>Mileage(ARAI)</th>
                <td>{obj.mileage}</td>
                <td>{obj2.mileage}</td>
              </tr>
              <tr>
                <th>Driving Range(km)</th>
                <td>{obj.range}</td>
                <td>{obj2.range}</td>
              </tr>
              <tr>
                <th>Drivetrain</th>
                <td>{obj.train}</td>
                <td>{obj2.train}</td>
              </tr>
              <tr>
                <th>Transmission</th>
                <td>{obj.transmission}</td>
                <td>{obj2.transmission}</td>
              </tr>
              <tr>
                <th>Emission Standard</th>
                <td>{obj.emission}</td>
                <td>{obj2.emission}</td>
              </tr>
              <tr>
                <th colSpan={3}>Dimensions & Weight</th>
              </tr>
              <tr>
                <th>Length(mm)</th>
                <td>{obj.lengths}</td>
                <td>{obj2.lengths}</td>
              </tr>
              <tr>
                <th>Width(mm)</th>
                <td>{obj.width}</td>
                <td>{obj2.width}</td>
              </tr>
              <tr>
                <th>Height(mm)</th>
                <td>{obj.height}</td>
                <td>{obj2.height}</td>
              </tr>
              <tr>
                <th>Wheelbase(mm)</th>
                <td>{obj.wheelbase}</td>
                <td>{obj2.wheelbase}</td>
              </tr>
              <tr>
                <th>Ground Clearance(mm)</th>
                <td>{obj.ground}</td>
                <td>{obj2.ground}</td>
              </tr>
              <tr>
                <th colSpan={3}>Capacity</th>
              </tr>
              <tr>
                <th>Doors</th>
                <td>{obj.doors}</td>
                <td>{obj2.doors}</td>
              </tr>
              <tr>
                <th>Seating Capacity</th>
                <td>{obj.seating}</td>
                <td>{obj2.seating}</td>
              </tr>
              <tr>
                <th>No.of seating rows</th>
                <td>{obj.seatingrow}</td>
                <td>{obj2.seatingrow}</td>
              </tr>
              <tr>
                <th>Bootspace(litres)</th>
                <td>{obj.bootspace}</td>
                <td>{obj2.bootspace}</td>
              </tr>
              <tr>
                <th>Fuel Tank Capacity(litres)</th>
                <td>{obj.tank}</td>
                <td>{obj2.tank}</td>
              </tr>
              <tr>
                <th colSpan={3}>Suspension,Brakes,Steering & Tyres</th>
              </tr>
              <tr>
                <th>Front Suspension</th>
                <td>{obj.susfront}</td>
                <td>{obj2.susfront}</td>
              </tr>
              <tr>
                <th>Rear Suspension</th>
                <td>{obj.rearsus}</td>
                <td>{obj2.rearsus}</td>
              </tr>
              <tr>
                <th>Front Brake type</th>
                <td>{obj.brakefront}</td>
                <td>{obj2.brakefront}</td>
              </tr>
              <tr>
                <th>Rear Brake type</th>
                <td>{obj.brakerear}</td>
                <td>{obj2.brakerear}</td>
              </tr>
              <tr>
                <th>Minimum turning radius</th>
                <td>{obj.radius}</td>
                <td>{obj2.radius}</td>
              </tr>
              <tr>
                <th>Steering type</th>
                <td>{obj.steering}</td>
                <td>{obj2.steering}</td>
              </tr>
              <tr>
                <th>Wheels</th>
                <td>{obj.wheel}</td>
                <td>{obj2.wheel}</td>
              </tr>
              <tr>
                <th>Spare Wheel</th>
                <td>{obj.spare}</td>
                <td>{obj2.spare}</td>
              </tr>
              <tr>
                <th>Front tyres</th>
                <td>{obj.tyrefront}</td>
                <td>{obj2.tyrefront}</td>
              </tr>
              <tr>
                <th>Rear tyres</th>
                <td>{obj.tyrerear}</td>
                <td>{obj2.tyrerear}</td>
              </tr>
              <tr></tr>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
