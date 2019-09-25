import React from "react"
import { Route, Redirect } from "react-router-dom"
import styled from "styled-components"
import NavBar from "components/NavBar"
import Dashboard from "pages/Dashboard"
import AuthView from "pages/AuthView"
import RenterView from "pages/RenterView"
import VendorView from "pages/VendorView"
import SettingsView from "pages/SettingsView"
import Header from "components/Header"
import Footer from "components/Footer"

const Style = styled.div`
  max-width: 900px;
  margin: 5rem auto;
  background-color: #172233;
  .container {
    background-color: white;
  }
`

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)

function App() {
  return (
    <Style className="App">
      <Header />
      <NavBar />
      <div className="container">
      <PrivateRoute path="/" exact component={Dashboard} />
      <Route
        path="/signup"
        render={(props) => <AuthView {...props} signup />}
      />
      <Route path="/login" component={AuthView} />
      <PrivateRoute path="/have-drone" component={VendorView} />
      <PrivateRoute path="/find-drone" component={RenterView} />
      <PrivateRoute path="/settings" component={SettingsView} />
      </div>
      <Footer />
    </Style>
  )
}

export default App
