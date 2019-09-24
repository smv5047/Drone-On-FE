import React from "react"
import { Route, Redirect } from "react-router-dom"
import styled from "styled-components"
import NavBar from "components/NavBar"
import Home from "pages/Home"
import AuthView from "pages/AuthView"
import RenterView from "pages/RenterView"
import Footer from "components/Footer"

const Style = styled.div`
  max-width: 900px;
  margin: 5rem auto;
`

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

function App() {
  return (
    <Style className="App">
      <NavBar />
      <PrivateRoute path="/" exact component={Home} />
      <Route
        path="/signup"
        render={(props) => <AuthView {...props} signup />}
      />
      <Route path="/login" component={AuthView} />
      <PrivateRoute
        path="/onboarding"
        render={(props) => <Home {...props} onboarding />}
      />
      <PrivateRoute path="/find-drone" component={RenterView} />

      <Footer />
    </Style>
  )
}

export default App
