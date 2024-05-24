/* eslint-disable no-unused-vars */
import React from "react";
import data from "../Data_Folder/LandingPage";
import { Link, Route, Routes } from "react-router-dom";

function SectionLink() {
  return (
    <div className="w-full h-80 flex justify-center items-center">
      <div className="card flex gap-10  justify-center items-center shadow-2xl rounded-lg">
        {data.map((item, index) => {
          return index >= 2 ? (
            <Link to={`${item.id}`} key={index}>
              <div className="card-item relative h-52 bg-white flex justify-center items-center ">
                <img src={item.img} alt="No img found" />
                <div className="card-item-content absolute bottom-3 backdrop-blur-sm rounded-lg left-10">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default SectionLink;
