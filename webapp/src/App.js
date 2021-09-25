import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import SwipePage from './pages/SwipePage';

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
            <Route path="/details">
              <DetailsPage />
            </Route>
            <Route path="/">
              <SwipePage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
