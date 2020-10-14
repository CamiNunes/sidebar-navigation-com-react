import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Messages from './pages/Messages';
import Support from './pages/Support';
import Team from './pages/Team'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/products' component={Products}/>
          <Route path='/messages' component={Messages}/>
          <Route path='/support' component={Support}/>
          <Route path='/team' component={Team}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
