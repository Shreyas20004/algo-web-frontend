import React, { useState, useEffect } from 'react';

import { UserContext } from './context/UserContext';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { onAuthStateChanged, getAuth } from "firebase/auth";

import { 
  About, 
  Contact, 
  Experience, 
  Hero,  
  Clients, 
  StarsCanvas, 
  Faq, 
  Foot 
} from "./components";

import { Register, SignIn, Edit, Dashboard } from "./pages"

const App = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

const Landing = () => {
  return (
    <div className='relative z-0 bg-black overflow-x-hidden'>
      <div className="relative z-0">
        <Hero />
      </div>
      <div className='relative z-0'>
        <About />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Experience />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Faq />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Clients />
        <StarsCanvas />
      </div>
      <div className='relative z-0'>
        <Contact />
        <Foot />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;
