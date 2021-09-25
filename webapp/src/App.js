import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import SwipePage from './pages/SwipePage';

const App = () => {
  const [appTitle] = useState('ARTSEE');

  return (
    <Router>
      <div className='container-fluid vh-100 d-flex flex-column'>
        <section
          className='row py-3 text-center'
          style={{ background: '#EEE' }}
        >
          <h1 className='col mb-0'>{appTitle}</h1>
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
