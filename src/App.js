import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';


function App() {

  return (
    <Router>
      <div className="backgroundImg">
        <div className="container cusContainer">
          <Header />
          <Container />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
