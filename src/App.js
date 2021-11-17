import React, { Component } from 'react';
import './App.css';

// Using for routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// Import Bootstrap components etc.
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

// Import local components
import Header from './components/header'
import Content from './components/content'
import Footer from './components/footer';
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';

// App class - extends Component Class
class App extends Component {

  // Method - Visual content
  render() {
    return (
      <Router>
        <div className="App">
          {/* BootStrap Navigation Bar - Component */}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                {/* Link to specified component */}
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

          {/* Switches between the local components */}
          <Switch>
            <Route path="/" exact><Content /></Route>
            <Route path="/create" ><Create /></Route>
            <Route path="/read" ><Read /></Route>
            <Route path={"/edit/:id"} component={Edit}></Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

// Export App class
export default App;
