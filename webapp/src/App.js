import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import SwipePage from './pages/SwipePage';
import FancyButton from './components/FancyButton';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      appTitle: "SuperApp"
    };
  }

  render() {
    return (
      <Router>
        <div className="container-fluid vh-100 d-flex flex-column">
          <section className="row py-3 text-center" style={{ background: '#EEE' }}>
            <h1 className="col mb-0">{this.state.appTitle}</h1>
          </section>
          <Switch>
            <Route path="/artwork/:id">
              <DetailsPage />
            </Route>
            <Route path="/">
              <SwipePage />
            </Route>
          </Switch>
        
    
          <section className="row py-3 text-center" style={{ background: '#EEE' }}>
            <div className="text-center d-flex align-items-center justify-content-center pb-4">
              <FancyButton message="Browse" />
              <FancyButton message="History" />
              <FancyButton message="Messages" />
              <FancyButton message="Profile" />
            </div>
          </section>
      
        </div>
      </Router>
    );
  }
}

export default App;
