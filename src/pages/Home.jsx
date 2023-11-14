import React from "react";
import Workimages from "../components/Workimages";
import Header from '../components/Header'
import Whatwedo from "../components/Whatwedo";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Whatwedo/>
      <Workimages />
    </div>
  );
};

export default Home;
