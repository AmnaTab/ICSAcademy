import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Pages/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import About from './Pages/About';
import Pricing from './Pages/Pricing';
import NosFormations from './Pages/NosFormations';
import Evenements from './Pages/Evenements';
import Inscription from './Pages/Inscription';
import Formateurs from './Pages/Formateurs';
import Contact from './Pages/Contact';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>

        <Header />

        <Switch>

          <Route exact path='/' component = {Home} />
          <Route path='/about' component = {About} />
          <Route path='/pricing' component = {Pricing} />
          <Route path='/formations' component = {NosFormations} />
          <Route path='/evenements' component = {Evenements} />
          <Route path='/inscription' component = {Inscription} />
          <Route path='/formateur' component = {Formateurs} />
          <Route path='/contact' component = {Contact} />
         
        </Switch>

        <Footer />

      </Router>


    </div>
  

  );
}
export default App
