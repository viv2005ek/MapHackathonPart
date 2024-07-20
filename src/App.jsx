/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import GoogleMapEmbed from "./component/GoogleMapEmbed";
import PartiularPlacesSearch from "./component/partiularPlacesSearch";
import StreatView from "./component/StreatView";
import BusTimingsTable from "./component/busTable";

const App = () => {
  return (
    <div className="my-5">
      <div style={{ display: "flex", justifyContent: "center", gap: "200px" }}>
        <GoogleMapEmbed />

        <StreatView />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "70px",
          padding: "20px",
        }}
      >
        <PartiularPlacesSearch />

        <BusTimingsTable />
      </div>
    </div>
  );
};

export default App;
