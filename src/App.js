import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css'

import Home from './components/Home.js'
import Header from './components/ui/Header.js'
import Characters from './components/Characters.js'
import CharacterDetail from './components/CharacterDetail.js'
import EpisodeDetail from './components/EpisodeDetail';

function App (){
  return (
      <BrowserRouter>
        <Route path="/" component={Header}/>
        <Route path="/" exact component={Home}/>
        <Route path="/characters" exact component={Characters}/>
        <Route path="/characters/:id" component={CharacterDetail}/>
        <Route path="/episodes/:id" component={EpisodeDetail}/>
      </BrowserRouter>
    )

}
export default App;
