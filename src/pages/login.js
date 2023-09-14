
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../assets/Rectangle 2696 (2).png';
import Img2 from '../assets/unsplash_0LaBRkmH4fM (2).png';
import Img3 from '../assets/Rectangle 2696 (5).png';
import Logo from '../assets/ODC Logo (2).png';
import Signup from './signup.js'
import Forget from './forget_password.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  if (showSignup) {
    return <Signup />;
  }



  const handleForgetClick = () => {
    setShowPass(true);
  };

  if (showPass) {
    return <Forget/>;
  }
  return (
    <Container>
      <Row>
        <Col className='col-img'>
          <Carousel
            className='carousel-img'
            prevIcon={null}
            nextIcon={null}
            interval={5000}
            variant='orange'
            indicatorClassName='carousel-indicators'
          >
            <Carousel.Item>
              <img className="d-block w-100 Img1" src={Img1} alt="First slide" />
              <Carousel.Caption className='captionn'>
                <div className='caption-content'>
                  <h2>Learning Paths</h2>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 Img1" src={Img2} alt="Second slide" />
              <Carousel.Caption className='captionn'>
                <div className='caption-content'>
                  <h2>Assessments</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100 Img1" src={Img3} alt="Third slide" />
              <Carousel.Caption className='captionn'>
                <div className='caption-content'>
                  <h2>Developement</h2>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

 
 
        <Col>  
        <Row className='img-logo-container'>
        
        <img src={Logo} className='img_logo' />
        </Row>
    
        <div className='center-container shadow-lg p-3 mb-5 bg-white rounded'>
    

        <form>
        <h4>Login</h4>

  <div class="form-outline mb-4">
    <input type="email" id="form1Example1" class="form-control" placeholder='Email'  required/>
   
  </div>


  <div class="form-outline mb-4">
    <input type="password" id="form1Example2" class="form-control" placeholder='Password' required />
    
  </div>


  <div class="row mb-4">
    <div class="col d-flex justify-content-center">

      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form1Example3" />
        <label class="form-check-label" for="form1Example3"> Remember me </label>
      </div>
    </div>

    <div class="col">

      <a href="#!" className='link-login' onClick={handleForgetClick}>Forgot password?</a>
    </div>
  </div>

  <button type="submit" class="btn  btn-block login-btn">Sign in</button>
  <div class="col">
<br></br>
  <p>Don't have an account? <a href="#!" className='link-login' onClick={handleSignupClick}><strong>Sign up</strong></a></p>
</div>
</form>
        
        
        
     

 
       
   


        </div>   
        </Col>
      </Row>
    </Container>
  );
}

export default Login;