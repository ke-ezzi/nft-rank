import React from 'react';
import { Routes , Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import Rank from "./pages/Rank"
import About from "./pages/About"
import Project from "./pages/Project"


const App = () => {
  return (
    <div className='App'>
      <Header />
        <Routes>
        <Route path ="/" element = {<Home />}></Route>
          <Route path ="/ranking" element = {<Rank />}></Route>
          <Route path ="/about" element = {<About/>}></Route>
          <Route path ="/project" element = {<Project />}></Route>
        </Routes>
    </div>
  )
}

export default App
