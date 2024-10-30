"use client";
import React from "react";

const Home = () => {
  return (
    <div className="py-20 px-4 h-screen">
      <form action="">
        <div>
          <label htmlFor="">title</label>
          <input type="text" className="border" />
        </div>
        <div>
          <label htmlFor="">description</label>
          <input type="text" className="border" />
        </div>
        <div>
          <label htmlFor="">image file</label>
          <input type="file" />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Home;
