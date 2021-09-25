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
    const sampleArtist = { name: 'Van Gogh', bio: 'Bio preview' };
    const sampleArtwork = { name: 'Starry Night', year: 2021, desc: 'A timeless classic.', artist: sampleArtist, imageUrl: 'http://172.22.0.2:3000/starry-night.jpg' };

    return (
      <Router>
        <div className="container-fluid vh-100 d-flex flex-column">
          <section className="row py-3 text-center" style={{ background: '#EEE' }}>
            <h1 className="col mb-0">{this.state.appTitle}</h1>
          </section>
          <Switch>
            <Route path="/details">
              <DetailsPage artwork={sampleArtwork} artist={sampleArtist} />
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
