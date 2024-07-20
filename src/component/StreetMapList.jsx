import React, { useState } from "react";

const StreatMapListData = [
  {
    name: "Manipal University Jaipur",
    params_id:
      "CAoSLEFGMVFpcE5jMW5rN21LOU8zYzkwRkxHdFl1eFdxdFhTUUd0Q05xYXFPVDJ0",
  },
  { name: "AMER FORT", params_id: "rySzVU_fD4V2eKzhyi88Ug" },
  { name: "HAWA MAHAL", params_id: "ZYsTem4c3584X0_-Sl5okg" },
  { name: "JANTAR MANTAR", params_id: "gAjFYrLKrkTDsQNbg89Fiw" },
  { name: "CITY PALACE", params_id: "G6IWSAmyLx6HEXseZs_dSA" },
  { name: "BIRLA MANDIR", params_id: "1jnNXMiVelsMSyeqHa64Lg" },
  { name: "NAHARGARH FORT", params_id: "miAseWuvLp-WwEIdcICoRA" },
  { name: "JAL MAHAL", params_id: "2YWrMvDqX8mKKL9CpO0XTQ" },
  { name: "ALBERT HALL MUSEUM", params_id: "oosgFMT4COaldeLHtPbaqA" },
  { name: "MOTI DUNGARI TEMPLE", params_id: "uorEA9mVXiQMHVdLKHUDaA" },
  { name: "AKSHARDHAM TEMPLE", params_id: "NtI_L0fidOFUQORpPXafJg" },
  { name: "WORLD TRADE PARK", params_id: "W6eaAFyWkltK5eqOLp2q9w" },
  { name: "KHOKE KE HANUMAN JI TEMPLE", params_id: "hJoPcnMDmjP7a_7mEKJkXw" },
  { name: "JAIPUR CHAUPATI", params_id: "ZnWtcvKLH6hZcriiksAahQ" },
  { name: "AJMERI GATE", params_id: "LZ09nzSYf3HkOVFAdLTZDA" },
];

const timings = "8 AM to 9 PM";
const days = "Mon to Fri";

const Table = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const handleCopy = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopyMessage(`Copied "${text}" to clipboard!`);
        setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
      })
      .catch((err) => {
        setCopyMessage("Failed to copy!");
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="container mx-auto my-4 mt-10bw-min">
      <h1
        style={{
          display: "block",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "28px",
          color: "#1e7e34",
        }}
      >
        Places Information
      </h1>

      {copyMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
          {copyMessage}
        </div>
      )}

      <div className="overflow-x-auto ">
        <div className="h-[400px] overflow-y-auto scrollbar-hidden">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Place Name</th>
                <th className="py-2 px-4 border-b">Timings</th>
                <th className="py-2 px-4 border-b">Days</th>
              </tr>
            </thead>
            <tbody>
              {StreatMapListData.map((place, index) => (
                <tr key={index}>
                  <td
                    className="py-2 px-4 border-b cursor-pointer text-black-600"
                    onClick={() => handleCopy(place.name)}
                    title="Click to copy"
                  >
                    {place.name}
                  </td>
                  <td className="py-2 px-4 border-b">{timings}</td>
                  <td className="py-2 px-4 border-b">{days}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
