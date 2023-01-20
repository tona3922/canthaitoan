import React, { useEffect } from "react";
import { Navbar } from "../navbar/navbar";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div>Thong tin</div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        aliquid labore possimus, eveniet natus veniam in deleniti assumenda
        facere quam voluptatum illo ullam eaque modi sequi amet ut atque magnam.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
        delectus a asperiores ex quidem quisquam, officiis vero, est suscipit
        harum minus quis? Veniam, voluptates? Voluptate aperiam debitis pariatur
        hic ipsum?
      </p>
    </div>
  );
};
