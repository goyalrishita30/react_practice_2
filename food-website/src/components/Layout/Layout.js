import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
