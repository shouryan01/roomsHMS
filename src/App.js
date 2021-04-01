import './App.css';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Modal from 'react-modal';
import Form from 'react-bootstrap/Form'

// Make booked rooms disabled buttons

function App() {
  const [checkIn, onChangeCheckIn] = useState(new Date());
  const [checkOut, onChangeCheckOut] = useState(new Date());
  const [modalIsOpen,setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ROOMS HMS</h1>
        

        <Container fluid>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="success" onClick={openModal}>101</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">201</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">301</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="danger">401</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="danger">501</Button>
            </Col>
          </Row>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="success">102</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">202</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">302</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">402</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">502</Button>
            </Col>
          </Row>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="success">103</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">203</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="danger">303</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">403</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">503</Button>
            </Col>
          </Row>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="danger">104</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">204</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">304</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">404</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">504</Button>
            </Col>
          </Row>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="danger">105</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">205</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">305</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">405</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">505</Button>
            </Col>
          </Row>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="danger">106</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">206</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="danger">306</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">406</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">506</Button>
            </Col>
          </Row>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="danger">107</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">207</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">307</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">407</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">507</Button>
            </Col>
          </Row>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="success">108</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="danger">208</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">308</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">408</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">508</Button>
            </Col>
          </Row>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="success">109</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">209</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">309</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">409</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="danger">509</Button>
            </Col>
          </Row>
          <Row style = {{margin: 15}}>
            <Col>
              <Button size = "lg" variant="success">110</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">210</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">310</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="success">410</Button>
            </Col>
            <Col>
              <Button size = "lg" variant="danger">510</Button>
            </Col>
          </Row>
          
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <Button variant="secondary" onClick={closeModal}>Close</Button>
            <div style={{marginTop: 20, padding: 15}}>
            <Form>
              <Form.Group controlId="name">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Control type="tel" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email Address" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Number of Guests</Form.Label>
                <Form.Control as="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form>
              <br /> Check In? <br />
              <DatePicker 
                onChange={onChangeCheckIn}
                value={checkIn}
              />
              <br /> Check Out? <br />
              <DatePicker 
                onChange={onChangeCheckOut}
                value={checkOut}
              />
              <br /><br />
              <Button variant="primary" onClick={closeModal} style={{float: 'right'}}>Close</Button>
            </div>
          </Modal>
        </Container>
        
        
      </header>
    </div>
  );
}

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '50%',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
  
export default App;
