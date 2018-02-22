import React, {Component} from 'react';
import './App.css';


//importing react router
import{
  BrowserRouter as Router,
  Route
}from 'react-router-dom';

//import components
import Home from './components/Home.js';
import Upload from './components/Upload.js';
import Trisha from './components/Trisha.js';
import Travel from './components/Travel.js';


class App extends Component {
  render() {
    return (

      <Router>
      <section className='App'>
            <Route exact path="/" component={Home} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/trisha" component={Trisha} />
            <Route exact path="/travel" component={Travel} />
      </section>
      </Router>
    );
  }
}
export default App;
