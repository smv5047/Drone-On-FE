import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "pages/Home";
import AuthView from "pages/AuthView";
import RenterView from "pages/RenterView";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/signup" render={props => <AuthView {...props} signup />} />
      <Route path="/login" component={AuthView} />
      <Route
        path="/onboarding"
        render={props => <Home {...props} onboarding />}
      />
      <Route path="/find-drone" component={RenterView} />
    </div>
  );
}

export default App;
