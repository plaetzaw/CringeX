import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const BaseLayout = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default BaseLayout;
