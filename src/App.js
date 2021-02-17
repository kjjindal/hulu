import './App.css';
import {BrowserRoute as Route , Switch,Router} from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Results from './Results';
import requests from './requests';
import { useState } from 'react';



function App() {


  const [selectedOption,setSelectedOption]=useState(requests.fetchActionMovies);




  return (
    <div className="app">
    

    <Header />
    <Nav setSelectedOption={setSelectedOption}  />
    <Results selectedOption={selectedOption} />

      
    </div>
  );
}




export default App;


