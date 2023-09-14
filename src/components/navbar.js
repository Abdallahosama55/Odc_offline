import React, { Fragment, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo2 from '../assets/ODC LOGO-01 2.png';

import NotificationList from './notification.js'; // Assuming you have a NotificationList component
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { HiOutlineBell} from "react-icons/hi2";

import { FaBell } from 'react-icons/fa';
import { Button, ButtonGroup, Col, Form, Row } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dashboardd from '../pages/dashboard';
import Home from '../pages/home.js';
import Login from '../pages/login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbarcomp() {
  let url='../pages/login'
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDashbored, setShowDashbored] = useState(false);
  const [showdaSignin, setShowsignin] = useState(false);
  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };


  if (showdaSignin) {
    return <Login/>;
  }

  const handleDaschboredClick = () => {
    setShowDashbored(true);
  };

  const handleHomeClick = () => {
    setShowDashbored(false);
  };

  return (
    <Fragment>
      <Row>
        <Navbar expand="lg" className="bg-black" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img src={Logo2} className="img_logo3" />
            </Navbar.Brand>
            <Col lg={6} sm={8}>
          
              <Form className="">
                <Form.Control
                  type="search"
                  placeholder=" Search "
                  className="me-2 rounded-pill w-75 w-lg-auto text-white search_ "
                  aria-label="Search"
                  style={{
                    marginLeft: '50px',
                    '@media (min-width: 576px)': {
                      marginLeft: '0',
                    },
                    background: '#3b3a39',
                    border: 'black'
                  }}
                />
              </Form>
            </Col>
            <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
              <Navbar.Collapse id="basic-navbar-nav">
              
                <Nav className="me-auto text-white font-weight-bold">
                <div className='item-nav'>
                  <Nav.Link
                    href="#home1"
                    className={`text-white item1 mt-lg-2 ${
                      !showDashbored ? 'active2' : ''
                    }`}
                    onClick={handleHomeClick}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href="#link1"
                    className={`text-white item1 mt-lg-2 ${
                      showDashbored ? 'active2' : ''
                    }`}
                    onClick={handleDaschboredClick}
                  >
                    Dashboard
                  </Nav.Link>
                  </div>
                  <ButtonGroup>
                  <button className='btn-notification' onClick={handleNotificationClick}>
                    <HiOutlineBell size={24} color="white" />
                  </button>
                </ButtonGroup>
                
                {showNotifications && <NotificationList />}
                
                  <NavDropdown
                  
                    title={
                      <span className="text-white  ">
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ paddingRight: '10px' }}
                        />
                        Ahmed osama
                      </span>
                    }
                    id="basic-nav-dropdown"
                    className="text-white item2 "
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Setting
                    </NavDropdown.Item>
                    <NavDropdown.Item href={url}>Sign Out</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              </Col>
          </Container>
          
        </Navbar>
        
      </Row>
      {showDashbored ? <Dashboard /> : <HomePage />}
    </Fragment>
  );
}

function Dashboard() {
  return <Dashboardd/>;
}

function HomePage() {
  return <Home/>;
}

export default Navbarcomp;