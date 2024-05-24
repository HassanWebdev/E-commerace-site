/* eslint-disable no-unused-vars */
import React from 'react';
import LandingPage from './Components/LandingPage';
import Cardio_Item from './Components/Cardio_Item';
import Weight_Item from './Components/Weight_Items';
import Fitness_Item from './Components/Fitness_Items.jsx';
import Commercial_Item from './Components/Commercial_Items.jsx';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar.jsx';
import Product from './Components/Product';
import ScrollToTop from './Components/Scroltotop';
import Cart from './Components/Cart';
import SearchItem from './Components/SearchItem';

function App2() {
  return (
    <div>
      <Navbar />
      <ScrollToTop> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Cardio" element={<Cardio_Item />} />
          <Route path="/Weight" element={<Weight_Item />} />
          <Route path="/Fitness" element={<Fitness_Item />} />
          <Route path="/Commercial" element={<Commercial_Item />} />
          <Route path="/:catagery/:productId" element={<Product />} />
          <Route path='/:id' element={<SearchItem/>}/>
          <Route path='/Cart' element={<Cart/>}/>
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App2;