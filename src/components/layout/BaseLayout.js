import React from "react";
import Header from "./Header";
import FooterBlank from "./FooterBlank";
import Footer from "./Footer";

const BaseLayout = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <FooterBlank />
    </div>
  );
};

export default BaseLayout;
