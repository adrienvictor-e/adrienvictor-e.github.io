import React from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Frontend from './components/pages/Frontend';
import Fullstack from './components/pages/Fullstack';
import Calendar from './mini-apps/calendarApp/Calendar';
import BBapiApp from './mini-apps/BBAPI/BbapiApp';
import ChesperitoApp from './mini-apps/Chespirito/ChesperitoApp';
import Automation from './components/pages/Automation';
import Footer from './components/Footer';
import Lightbox from './mini-apps/FluidLightbox/Lightbox';
import Videos from './components/pages/Videos';
import CvThemes from './components/pages/CvThemes';

function App() {
  return (
    <>
    <div className="aurora-bg-global">
      <div className="aurora-orb aurora-orb-1"></div>
      <div className="aurora-orb aurora-orb-2"></div>
      <div className="aurora-orb aurora-orb-3"></div>
    </div>
    <Router>
     <Navbar />
     <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/frontend' component={Frontend} />
      <Route path='/fullstack' component={Fullstack} />
      <Route path='/automation' component={Automation} />
      <Route path='/videos' component={Videos} />
      <Route path='/calendar' component={Calendar} />
      <Route path='/bbapi' component={BBapiApp} />
      <Route path='/chespirito' component={ChesperitoApp} />
      <Route path='/lightbox' component={Lightbox} />
      <Route path='/cv-themes' component={CvThemes} />
    </Switch>
    <Footer />
    </Router>     
    </>
  );
}

export default App;
