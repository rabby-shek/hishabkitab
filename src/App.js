import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Test from './components/test/test';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_data from './components/test/nav_data';
import NAV from './components/test/test_2';
import Slider from './components/slider/Slider';
import AutoCounter from './components/autoCounter/AutoCounter';
import Test_canvas from './components/sideNav/Test_canvas';
import Services from './components/services_2/Services';
import About from './components/aboutus/About';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Foter from './components/foteer/Foter';
import New_footer from './components/Bootstrap/BT_foter/New_footer';
import {Route , Routes } from "react-router-dom";
import Article from './components/article/Article';
import WishList from './components/wishList/WishList';
import Compare from './components/compare/Compare';





function App() {
  return (
    <Routes>
      <Route path="/" element={<><Navbar /> <Services /> <About /> <Pricing /> <Blog /> <Article /> <Foter />
      </>} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/compare" element={<Compare />} />
    </Routes>








  );
}

export default App;
