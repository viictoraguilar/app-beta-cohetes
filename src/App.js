import React from 'react';
import styled from '@emotion/styled'
import About from './components/About'
import Users from './components/Users'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ContenedorPrincipal = styled.div`
  background-color: whitesmoke;
`

const Encabezado = styled.header`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
`

function App() {
  return (
    <Router>
    <ContenedorPrincipal>
      <Encabezado>
        <p>App de Cohetes</p>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </Encabezado>


      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ContenedorPrincipal>
  </Router>

    // <div className="">
    //   <Rockets>
    //   {({loading, error, data}) => {
    //     if(loading) return <p>Loading ...</p>
    //     if(error) return <p>Erorr!</p>

    //     return data.rockets.map(rocket => {
    //       return <p key={rocket.id} >{rocket.description}</p>
    //     })
    //   }}
    //   </Rockets>
    // </div>
  );
}

export default App;
