import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu';
import Hero from './Hero/Hero'
import About from './AboutPage/About';
import HomePage from './HomePage/HomePage';
import Login from './LoginPage/LoginPage';
import Contact from './ContactPage/Contact';
import Footer from './Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="MainContainer">
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <HomePage/>
          </Route>
          
        </Switch>
      
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
