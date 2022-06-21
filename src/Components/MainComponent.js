import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./HomeComponent/HomeComponent";
import Details from "./DetailsComponent/DetailsComponent";
import Transaction from "./TransactionsComponent/Transaction";

function MainComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/customers/:details" element={<Details />} />

      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  );
}

export default MainComponent;
