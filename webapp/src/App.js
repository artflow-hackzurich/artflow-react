import logo from './logo.svg';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/a">A</Link>
            </li>
            <li>
              <Link to="/b">B</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/a">
              <PageA />
            </Route>
            <Route path="/b">
              <PageB />
            </Route>
            <Route path="/">
              <PageHome />
            </Route>
          </Switch>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );


}

function PageA() {
  return <p>A</p>;
}

function PageB() {
  return <p>B</p>;
}

function PageHome() {
  return <p>Home</p>;
}

export default App;
