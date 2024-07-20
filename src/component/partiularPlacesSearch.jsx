/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function ParticularPlacesSearch() {
  const [place, setPlace] = useState("Bus Stops");
  const [show, setShow] = useState("Bus Stops");

  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };
  const handleShow = (event) => {
    setShow(place);
  };

  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex items-center gap-5">
        <label htmlFor="place-search" className="block">
          Search Place:
        </label>
        <input
          id="place-search"
          type="text"
          value={place}
          onChange={handlePlaceChange}
          placeholder="Enter place"
          className="border  "
          list="places"
        />
        <datalist id="places">
          <option value="Bus Stop" />
          <option value="Metro" />
          <option value="Railways" />
          <option value="Gardens" />
          <option value="Temples" />
          <option value="Hospitals" />
        </datalist>

        <button onClick={handleShow}>Search</button>
      </div>
      <iframe
        width="500"
        height="500"
        style={{ border: "none" }}
        src={`https://www.google.com/maps/embed/v1/search?q=${encodeURIComponent(
          show
        )}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
        allowFullScreen
        title="Google Map Search"
      ></iframe>
    </div>
  );
}

export default ParticularPlacesSearch;
