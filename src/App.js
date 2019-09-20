import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import AuthView from 'pages/AuthView';
import renterView from 'pages/renterview';

function App() {
  return (
    <div className="App">
      <Route path='/' exact component={Home}/>
      <Route path='/signup' render={<AuthView {...props} signup/>}/>
      <Route path='/login'  render={<AuthView {...props} login/>}/>
      <Route path='/find-drone'  component={renterView}/>

    </div>
  );
}

export default App;
