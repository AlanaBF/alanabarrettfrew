import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, Contact, ProjectGallery, CV, Skills} from "./Pages"
import {Footer, Header} from "./components";

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App;
