/* eslint-disable no-unused-vars */
import GoogleMapEmbed from "./GoogleMapEmbed";
import PartiularPlacesSearch from "./partiularPlacesSearch";
import StreatMapList from "./StreetMapList";
import StreatView from "./StreatView";
import BusTimingsTable from "./busTable";
import React, { useState } from "react";
import styles from "./Map.module.css";
function Map() {
  const [activeTab, setActiveTab] = useState("section1");

  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          color: "green",
        }}
      >
        EcoTravel
      </h1>
      <div className={styles.map}>
        <ul className={styles.tabList}>
          <li>
            <button
              className={activeTab === "section1" ? styles.active : ""}
              onClick={() => handleTabClick("section1")}
            >
              Public Transport
            </button>
          </li>
          <li>
            <button
              className={activeTab === "section2" ? styles.active : ""}
              onClick={() => handleTabClick("section2")}
            >
              Routes
            </button>
          </li>
          <li>
            <button
              className={activeTab === "section3" ? styles.active : ""}
              onClick={() => handleTabClick("section3")}
            >
              Famous Places
            </button>
          </li>
        </ul>
        <div className={styles.tabPanels}>
          <section
            id="section1"
            className={
              activeTab === "section1" ? styles.visible : styles.hidden
            }
          >
            <div className={styles.openedSection}>
              <BusTimingsTable />
              <PartiularPlacesSearch />
            </div>
          </section>
          <section
            id="section2"
            className={
              activeTab === "section2" ? styles.visible : styles.hidden
            }
          >
            <div className={styles.openedSection}>
              <BusTimingsTable />
              <GoogleMapEmbed />
            </div>
          </section>
          <section
            id="section3"
            className={
              activeTab === "section3" ? styles.visible : styles.hidden
            }
          >
            <div className={`${styles.openedSection} `}>
              <StreatMapList />
              <StreatView />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Map;
