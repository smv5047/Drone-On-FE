import React from "react"
import { Route } from "react-router-dom"
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

function App() {
  return (
    <Style className="App">
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route
        path="/signup"
        render={(props) => <AuthView {...props} signup />}
      />
      <Route path="/login" component={AuthView} />
      <Route
        path="/onboarding"
        render={(props) => <Home {...props} onboarding />}
      />
      <Route path="/find-drone" component={RenterView} />

      <Footer />
    </Style>
  )
}

export default App
