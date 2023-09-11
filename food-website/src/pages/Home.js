import { Button } from "@mui/base";
import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Banner from "../images/banner1.jpg"
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="header-container">
          <h1>Food Website</h1>
          <p>We serve the best food</p>
          <Link to="/menu">
            <Button>Order Now</Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
