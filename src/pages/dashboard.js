import React, { Fragment, useState } from 'react';
import Navbarcomp from '../components/navbar';
import { BsChevronRight } from 'react-icons/bs';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import { CDBBox } from 'cdbreact';
import Container from 'react-bootstrap/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo3 from '../assets/ODC LOGO-01 2.png';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import { Button, Col, Row } from 'react-bootstrap';

import Footercomp from '../components/footer';

function Dashboard() {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showAssignment, setShowAssignment] = useState(false);




  const handleCompletedClick = () => {
    setShowCompleted(true);
    setShowAssignment(false);
  };


  const handleInProgressClick = () => {
    setShowCompleted(false);
    setShowAssignment(false);
  };

  const handleAssignmentClick = () => {
    setShowCompleted(false);
    setShowAssignment(!showAssignment);
  };

  return (
    <Fragment>
    
      <h3 className='title-dashbored p-5 pb-3 '>
        <BsChevronRight className='ml-1' />
        Dashboard
      </h3>
      <hr className='fw-bold hr-dash' />
      <Row>
        <Navbar expand='lg' className='bg-white' variant='light'>
          <Container className='containerr'>
            <Navbar.Toggle aria-controls='basic-navbar-nav'>
              <BsChevronRight className='ml-1' />
            </Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto text-center'>
                <Nav.Link
                  href='#progess'
                  className={`item3 ${!showCompleted && !showAssignment ? 'active' : ''}`}
                  onClick={handleInProgressClick}
                >
                  In Progress
                </Nav.Link>
                <Nav.Link
                  href='#completed'
                  className={`item3 ${showCompleted && !showAssignment ? 'active' : ''}`}
                  onClick={handleCompletedClick}
                >
                  Completed
                </Nav.Link>
                <Nav.Link
                  href='#assignment'
                  className={`item3 ${showAssignment ? 'active' : ''}`}
                  onClick={handleAssignmentClick}
                >
                  Assignment
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className='d-lg-none text-center'>Your Courses</Navbar.Brand>
          </Container>
        </Navbar>
      </Row>
      <Row>
        <Col lg={12}>
          <h2 className='pt-5 text-center d-none d-lg-block'>Your Courses</h2>
        </Col>
      </Row>
      {!showCompleted && !showAssignment ? (
        <Row>
          <Container className='containerr'>
          <Card className='m-3 m-lg-5 card-progress p-lg-5'>
          <Card.Body>
            <Row className='d-flex align-items-center'>
              <Col lg={8} sm={12} md={12}>
                <Card.Title className='Card-title pb-3 p-3'>Flutter Development Course</Card.Title>
                <Card.Text className='p-3'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has survived not only five centuries
                </Card.Text>
                <h5 className='p-3'>overall progress 45%</h5>
                <ProgressBar variant="custom" now={45} className="custom-progress-bar" />
              </Col>
              <Col lg={4} md={12} sm={12} className='d-flex justify-content-center'>
                <Button variant="custom" className='cust-btn m-lg-5 m-5'>Complete</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
            <Card className='m-3 m-lg-5 card-progress  p-lg-5'>
            <Card.Body>
              <Row className='d-flex align-items-center'>
                <Col lg={8} sm={12} md={12}>
                  <Card.Title className='Card-title pb-3  p-3 '>UI/UX Course</Card.Title>
                  <Card.Text className=' p-3 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries
                  </Card.Text>
                  <h5 className='p-3'>overall progress 75%</h5>
                  <ProgressBar variant="custom" now={75} className="custom-progress-bar " />
                </Col>
                <Col lg={4} md={12} sm={12} className='d-flex justify-content-center'>
                  <Button variant="custom" className='cust-btn m-lg-5 m-5'>Complete</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className='m-3 m-lg-5 card-progress  p-lg-5'>
          <Card.Body>
            <Row className='d-flex align-items-center'>
              <Col lg={8} sm={12} md={12}>
                <Card.Title className='Card-title pb-3  p-3 '>Web Development Course</Card.Title>
                <Card.Text className=' p-3 '>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has survived not only five centuries
                </Card.Text>
                <h5 className='p-3'>overall progress 25%</h5>
                <ProgressBar variant="custom" now={25} className="custom-progress-bar " />
              </Col>
              <Col lg={4} md={12} sm={12} className='d-flex justify-content-center'>
                <Button variant="custom" className='cust-btn m-lg-5 m-5'>Complete</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
          </Container>
        </Row>
      ) : showCompleted && !showAssignment ? (
        <Row>
          <Container className='containerr'>
          <Card className='m-3 m-lg-5 card-progress p-5'>
          <Card.Body>
            <Row className='d-flex align-items-center'>
              <Col lg={8} sm={12} md={12}>
                <Card.Title className='Card-title pb-3'>React Course</Card.Title>
                <Card.Text className=''>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has survived not only five centuries
                </Card.Text>
                <h5 className='p-3'>overall progress 100%</h5>
                <ProgressBar variant="custom" now={100} className="custom-progress-bar" />
              </Col>
              <Col lg={4} md={12} sm={12} className='d-flex justify-content-center'>
                <Button variant="custom" className='cust-btn m-lg-5 mt-5'>certificate</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
          </Container>
        </Row>
      ) : (
        <Row>
          <Container className='containerr'>
          <Card className='m-3 m-lg-5 card-progress p-5'>
          <Card.Body>
            <Row className='d-flex align-items-center'>
              <Col lg={8} sm={12} md={12}>
                <Card.Title className='Card-title pb-3'>Assignment Course</Card.Title>
                <Card.Text className=''>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                  the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has survived not only five centuries
                </Card.Text>
                <h5 className='p-3'>overall progress 0%</h5>
                <ProgressBar variant="custom" now={0} className="custom-progress-bar" />
              </Col>
              <Col lg={4} md={12} sm={12} className='d-flex justify-content-center'>
                <Button variant="custom" className='cust-btn m-lg-5 mt-5'>Start</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
          </Container>
        </Row>
   




      )}
      <Footercomp/>

    </Fragment>
  );
}

export default Dashboard;