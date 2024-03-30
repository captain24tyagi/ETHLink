import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Feed from './components/Feed';
import Bio from './components/Bio';
import Signin from './components/Signin';
import Jobs from './components/Jobs';
import Notifications from './components/Notifications';
import Tickets from './components/Tickets';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-mono md:w-full w-fit">
      <Router>
        <Routes>
          <Route exact path='/signup' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/feed' element={<Feed/>} />
          <Route exact path='/profile' element={<Bio/>} />
          <Route exact path='/signin' element={<Signin/>} />
          <Route exact path='/jobs' element={<Jobs/>} />
          <Route exact path='/notifications' element={<Notifications/>} />
          <Route exact path='/tickets' element={<Tickets/>} />
        </Routes>
      </Router>
    </div>
  );
}

