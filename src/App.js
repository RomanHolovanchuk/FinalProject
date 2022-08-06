
import React from 'react';

import {Routes, Route} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { News } from './pages/News/News';
import {AllGames} from './pages/AllGames/AllGames';
import SingleGames from './pages/SingleGame/SingleGames';
import Home from  './pages/Home/Home'
import Anime from './pages/SingleGame/Anime';
import Shooter from './pages/SingleGame/Shooter';
import MOBA from './pages/SingleGame/MOBA';
import Browser from './pages/SingleGame/Browser';
import Giveaways from './pages/Giveaways/Giveaways';
import Footer from './components/Footer/Footer';
import './App.scss';

import Test from './pages/Test/Test';




function App() {

  

  return (
  <div >
  
 
    <Header />
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/test' element={ <Test />}/>
      <Route path='/:id' element={ <SingleGames />}/>
      <Route path="/anime" element={<Anime />} />
      <Route path="/shooter" element={<Shooter />} />
      <Route path="/moba" element={<MOBA />} />
      <Route path="/browser" element={<Browser />} />
      <Route path="/news" element={<News />} />
      <Route path="/all" element={<AllGames />} />
      <Route path="/giveaways" element={<Giveaways />} />
      <Route path="/all/:id" element={<SingleGames />} />
      <Route path="/anime/:id" element={<SingleGames />} />
      <Route path="/shooter/:id" element={<SingleGames />} />
      <Route path="/moba/:id" element={<SingleGames />} />
      <Route path="/browser/:id" element={<SingleGames />} />


   
    </Routes>

      <Footer />
    </div>
  );
}

export default App;
