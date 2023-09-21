import React, { useReducer } from "react";
import { initialState, reducer } from "./State";
import { Context } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Detail } from "./Components/Details/Detail";
import { Brand } from "./Components/Brand/Brand";
import { Compare } from "./Components/Compare/Compare";
import { Price } from "./Components/Price/Price";
import { Footer } from "./Components/Footer/Footer";
export const Routing = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/price" element={<Price />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
