
import React from 'react';

import {Routes, Route} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { News } from './pages/News/News';
import {AllGames} from './pages/AllGames/AllGames';
import SingleGames from './pages/SingleGame/SingleGames';
import Home from  './pages/Home/Home'

import Giveaways from './pages/Giveaways/Giveaways';
import Footer from './components/Footer/Footer';
import FavGames from './components/FavGames/FavGames'
import TagsPage from 'pages/TagsPage/TagsPage';
import Auth from 'components/FormLoginAutorization/Authorization/Auth';





function App() {



  return (
  <div >
  
 
    <Header />
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/authorization' element={ <Auth />}/>
      <Route path='/:id' element={ <SingleGames />}/>
      <Route path='/FavGames' element={ <FavGames  />}/>

      <Route path="/anime" element={<TagsPage title={'POPULAR TAGS: Anime'} category={'anime'}/>} />
      <Route path="/shooter" element={<TagsPage title={'POPULAR TAGS: Shooter'} category={'shooter'} />} />
      <Route path="/moba" element={<TagsPage title={'POPULAR TAGS: MOBA'} category='moba'/>} />
      <Route path="/browser" element={<TagsPage title={'Best Free Games for Browser in 2022!'} platform='browser' />} />

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
