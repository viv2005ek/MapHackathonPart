/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function GoogleMapEmbed() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("Manipal Jaipur");
  const [mapUrl, setMapUrl] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    // Function to get the current location and set the origin state
    const fetchCurrentLocation = async () => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const URL_Location = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=0d7e0434effa4ea3825e16245d95ba24`;

          try {
            let response_Location = await fetch(URL_Location);
            let data_Location = await response_Location.json();
            const address = data_Location.features[0].properties.formatted;

            setCurrentLocation(address);
            setOrigin(address);
            updateMapUrl(address, destination);
          } catch (error) {
            console.error("Error fetching location:", error);
          }
        });
      }
    };

    fetchCurrentLocation();
  }, []); // Run only once when the component mounts

  const updateMapUrl = (origin, destination) => {
    setMapUrl(
      `https://www.google.com/maps/embed/v1/directions?origin=${encodeURIComponent(
        origin
      )}&destination=${encodeURIComponent(
        destination
      )}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
    );
  };

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMapUrl(origin, destination);
  };
  return (
    <div className="flex flex-col items-center ">
      <form className=" flex gap-6" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="origin" className="block">
            From:
          </label>
          <input
            id="origin"
            type="text"
            value={origin}
            onChange={handleOriginChange}
            placeholder="Enter origin"
            className="border p-2"
            list="placesRoot"
          />
        </div>

        <div>
          <label htmlFor="destination" className="block">
            To:
          </label>
          <input
            id="destination"
            type="text"
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Enter destination"
            className="border p-2"
            list="placesRoot"
          />
        </div>
        <datalist id="placesRoot">
          <option value={currentLocation}>Current Location</option>
          <option value="AMER FORT">AMER FORT</option>
          <option value="HAWA MAHAL">HAWA MAHAL</option>
          <option value="JANTAR MANTAR">JANTAR MANTAR</option>
          <option value="CITY PALACE">CITY PALACE</option>
          <option value="BIRLA MANDIR">BIRLA MANDIR</option>
          <option value="NAHARGARH FORT">NAHARGARH FORT</option>
          <option value="JAL MAHAL">JAL MAHAL</option>
          <option value="ALBERT HALL MUSEUM">ALBERT HALL MUSEUM</option>
          <option value="MOTI DUNGARI TEMPLE">MOTI DUNGARI TEMPLE</option>
          <option value="AKSHARDHAM TEMPLE">AKSHARDHAM TEMPLE</option>
          <option value="WORLD TRADE PARK">WORLD TRADE PARK</option>
          <option value="KHOKE KE HANUMAN JI TEMPLE">
            KHOKE KE HANUMAN JI TEMPLE
          </option>
          <option value="JAIPUR CHAUPATI">JAIPUR CHAUPATI</option>
          <option value="AJMERI GATE">AJMERI GATE</option>
          <option value="BADA PADAMPURA">BADA PADAMPURA</option>
          <option value="TEETRIYA">TEETRIYA</option>
          <option value="BAGRU">BAGRU</option>
          <option value="GONER">GONER</option>
          <option value="VATIKA">VATIKA</option>
          <option value="RENWAL">RENWAL</option>
          <option value="BADI CHAUPAR">BADI CHAUPAR</option>
          <option value="RAMGANJ BAZAR">RAMGANJ BAZAR</option>
          <option value="ANANDAM MANGLAM">ANANDAM MANGLAM</option>
          <option value="JDA COLONY">JDA COLONY</option>
          <option value="KUKAS">KUKAS</option>
          <option value="SANGANER">SANGANER</option>
          <option value="MGH">MGH</option>
          <option value="JOSHI MARG">JOSHI MARG</option>
          <option value="CHOMU PULIYA">CHOMU PULIYA</option>
          <option value="DANTLI PHATAK">DANTLI PHATAK</option>
          <option value="CHOTI CHAUPAR">CHOTI CHAUPAR</option>
          <option value="BHAIRU KHEJDA">BHAIRU KHEJDA</option>
          <option value="KHOLE KE HANUMAN JI">KHOLE KE HANUMAN JI</option>
          <option value="VKI NO. 17">VKI NO. 17</option>
          <option value="KANOTA">KANOTA</option>
          <option value="DWARKA PURI">DWARKA PURI</option>
          <option value="TRANSPORT NGR">TRANSPORT NGR</option>
          <option value="RSBTDA BUS TERMINAL HEERAPURA">
            RSBTDA BUS TERMINAL HEERAPURA
          </option>
          <option value="NAYLA">NAYLA</option>
          <option value="AIRPORT">AIRPORT</option>
          <option value="KHIRNI PHATAK PULIYA">KHIRNI PHATAK PULIYA</option>
          <option value="AGARWAL FARM">AGARWAL FARM</option>
          <option value="DADI KA PHATAK">DADI KA PHATAK</option>
          <option value="GALTA">GALTA</option>
          <option value="NIWARU">NIWARU</option>
          <option value="BASSI">BASSI</option>
          <option value="CHANDPOLE">CHANDPOLE</option>
          <option value="CHAKSU">CHAKSU</option>
          <option value="PATRAKAR COLONY">PATRAKAR COLONY</option>
          <option value="KALWAR">KALWAR</option>
        </datalist>

        <button type="submit" className="border-0 p-2">
          Search
        </button>
      </form>
      <div
        className="w-full max-w-lg h-[500px]"
        style={{ marginTop: "", overflow: "hidden" }}
      >
        <iframe
          title="Google Map"
          style={{ height: "100%", width: "100%", border: "0" }}
          src={mapUrl}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleMapEmbed;
