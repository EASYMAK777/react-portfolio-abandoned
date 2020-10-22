import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import './App.css';
import Header from "./components/Navbar/header";
import Main from './components/Main/main';



function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Main/>
          </Col>
        </Row>
      </Container>
    </div>











  );
}

export default App;








  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>