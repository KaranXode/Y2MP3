import { Route, Routes } from "react-router-dom";

import React from "react";
import Header from "../Components/Header/Header";
import Cards from "../Components/Cards/Cards";
import Infomation from "../Components/Infomation/Infomation";

export default function ConfRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/info" element={<Infomation/>} />
      </Routes>
    </>
  );
}
