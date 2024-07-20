/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import busTimings from "./busTableData";

const BusTimingsTable = () => {
  const [selectedRoute, setSelectedRoute] = useState("");
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopyMessage("Place copied to clipboard");
    setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
  };
  const handleRouteChange = (event) => {
    setSelectedRoute(event.target.value);
  };

  const getRouteLabel = (bus) => `${bus.origin} to ${bus.destination}`;

  const selectedBus = busTimings.find(
    (bus) => getRouteLabel(bus) === selectedRoute
  );
  return (
    <div className="container mx-auto my-4 mt-10 w-min text-lg">
      {copyMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
          {copyMessage}
        </div>
      )}
      <div className="overflow-y-auto max-h-[400px]">
        {" "}
        {/* Adjust max-h value to fit 10 rows height */}
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr>
              <th className=" px-2 border-b">Bus No.</th>
              <th className=" px-2 border-b">Origin</th>
              <th className=" px-2 border-b">Destination</th>
              <th className=" px-2 border-b">Timing</th>
            </tr>
          </thead>
          <tbody>
            {busTimings.map((bus, busIndex) => (
              <tr key={busIndex}>
                <td className="py-2 px-4 border-b">{bus.busNumber}</td>
                <td
                  className="py-2 px-4 border-b cursor-pointer text-black-600 text-sm"
                  onClick={() => handleCopy(bus.origin)}
                  title="Click to copy"
                >
                  {bus.origin}
                </td>
                <td
                  className="py-2 px-4 border-b cursor-pointer text-black-600 text-sm"
                  onClick={() => handleCopy(bus.destination)}
                  title="Click to copy"
                >
                  {bus.destination}
                </td>
                <td className="py-2 px-4 border-b">
                  <select className="bg-white border border-gray-300 rounded p-1 text-sm">
                    {bus.timings.map((time, timeIndex) => (
                      <option key={timeIndex} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusTimingsTable;
