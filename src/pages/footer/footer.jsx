import React from "react";
import "./footer.scss";
export const Footer = () => {
  return (
    <div className="footer">
      <h1>info</h1>
      <hr />
      <div className="footer_info">
        <div className="leftfooter_info">
          <h2>Thong tin</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod vero
            voluptates nobis blanditiis consectetur aperiam dolorum dignissimos
            incidunt necessitatibus repudiandae! Facere asperiores quasi
            cupiditate deleniti? Temporibus necessitatibus cumque ut
            perspiciatis.
          </p>
        </div>
        <div className="rightfooter_info">
          <div>
            <h2>col1</h2>
            <h2>col2</h2>
            <h2>col3</h2>
          </div>
          <div>cola</div>
          <div>coke</div>
        </div>
      </div>
    </div>
  );
};
