import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer';

const Frontend = React.lazy(() => import('./components/pages/Frontend'));
const Fullstack = React.lazy(() => import('./components/pages/Fullstack'));
const Automation = React.lazy(() => import('./components/pages/Automation'));
const Videos = React.lazy(() => import('./components/pages/Videos'));
const Calendar = React.lazy(() => import('./mini-apps/calendarApp/Calendar'));
const BBapiApp = React.lazy(() => import('./mini-apps/BBAPI/BbapiApp'));
const ChesperitoApp = React.lazy(() => import('./mini-apps/Chespirito/ChesperitoApp'));
const Lightbox = React.lazy(() => import('./mini-apps/FluidLightbox/Lightbox'));
const CvThemes = React.lazy(() => import('./components/pages/CvThemes'));

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
     <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
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
     </Suspense>
    <Footer />
    </Router>
    </>
  );
}

export default App;
