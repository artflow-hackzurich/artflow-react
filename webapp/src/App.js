import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import SwipePage from './pages/SwipePage';

const App = () => {
  return (
    <Router>
      <div className='container-fluid vh-100 d-flex flex-column'>
        <section className='app-header row py-3 text-center bg-dark'>
          <img src={logo} style={{ height: '1.2rem' }} className="my-0" />
        </section>
        <Switch>
          <Route path='/artwork/:id' component={DetailsPage} />
          <Route component={SwipePage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
