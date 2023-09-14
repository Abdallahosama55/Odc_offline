import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Illustration_Reset from '../assets/Group.png';
import Logo from '../assets/ODC Logo (2).png';
import img_tree from '../assets/tree vector.png';
import img_ill_3 from '../assets/09632af1-0fe8-4159-8063-a072b7cf233e.png';
import img_ill_2 from '../assets/Clip path group.png';

import OtpInput from 'react-otp-input';
import Signup from './signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function Forget() {
  const [isVerified, setIsVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [showSlideTwo, setShowSlideTwo] = useState(false);
  const [showSlideOne, setShowSlideOne] = useState(true);
  const [showSignup, setShowSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  

  const handleContinue = () => {
    if (email && validateEmail(email)) {
      setShowSlideTwo(true);
      setShowSlideOne(false);
    } else {
      setShowWarning(true);
    }
  };

  const handleSignupClick = () => {
    setShowSignup(true);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleVerify = () => {
    if (otp) {
    // Perform the necessary verification logic
    setShowSlideTwo(false);
    setShowSlideOne(false);
    setIsVerified(true);
     } else{
      setShowWarning(true);

    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  if (showSignup) {
    return <Signup />;
  }

  return (
    <Container>
      {showSlideOne && (
        <Row>
          <Col className='col-img'>
            <img src={Illustration_Reset} className='reset' />
          </Col>

          <Col>
            <Row className='img-logo-container'>
              <img src={Logo} className='img_logo' />
            </Row>

            <div className='center-container shadow-lg p-3 mb-5 bg-white rounded'>
              <form>
                <h4>Reset Password</h4>
                <span className='reset-p'>
                  No worries, we will send you some instructions to reset it.
                </span>
                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    id='form1Example1'
                    className='form-control form-control2'
                    placeholder='Email'
                    required
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                <button
                  type='button'
                  className='btn btn-block login-btn'
                  onClick={handleContinue}
                >
                  Continue
                </button>
                <div className='col'>
                  <br></br>
                  <p>
                    Don't have an account?{' '}
                    <a
                      href='#!'
                      className='link-login'
                      onClick={handleSignupClick}
                    >
                      <strong>Sign up</strong>
                    </a>
                  </p>
                </div>
              </form>

              <img src={img_tree} className='img_tree ' />
            </div>
          </Col>
        </Row>
      )}

      {showSlideTwo && (
        <div className='slidetwo'>
          <Row className='Row'>
            <Col>
              
              <img src={Logo} className='img_logo' />
            </Col>
            </Row>
            <Row className='mt-lg-5'>
            <Col className='d-flex align-items-center justify-content-center'>
               <div>
               
                <img src={img_ill_2} className='reset2' />
                </div>
              </Col>
              <Col>
              <div className='center-container shadow-lg p-3 mb-5 bg-white rounded'>
                <form>
                  <h4>OTP Code</h4>
                  <span className='reset-p d'>
                  Please enter the code that we sent to your email.
                  </span>
                  <div className='form-outline  m-5 mt-3 mb-3'>
                  
                
                  <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={5}
                  renderSeparator={<span>-</span>}
                  inputStyle={{
                    width: '40px',
                    height: '40px',
                    margin: '0 5px',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '18px',
                    borderRadius: '5px',
                    border: '1px solid #ced4da',
                    textAlign: 'center',
                    alignContent: 'center',
                 
                  }}
                  renderInput={(props) => <input {...props} />}
                />
                  </div>
                  <button type='submit' className='btn btn-block login-btn' onClick={handleVerify}>
                  Verify
                </button>
                  <div className='col'>
                    <br></br>
                    <p>
                    Didn’t receive code ?{' '}
                      <a
                        href='#!'
                        className='link-login'
                      
                      >
                        <strong>Resend</strong>
                      </a>
                    </p>
                  </div>
                </form>
    

                <img src={img_tree} className='img_tree ' />
              </div>
              </Col>
              </Row>
    
        </div>
    
      )}                           
    
      {isVerified && (
        <div className='slidetwo'>

        
        <Row className='Row'>
          
            
            <img src={Logo} className='img_logo' />
          
          </Row>
          <Row className='mt-lg-5'>
          <Col className='d-flex align-items-center justify-content-center'>
             <div>
             
              <img src={img_ill_3} className='reset2' />
              </div>
            </Col>
            <Col>
            <div className='center-containerr shadow-lg p-5 mb-5 bg-white rounded'>
              <form>
                <h4>Reset Password</h4>
               
                <div className='form-outline  '>
                
                <input
                type='Password'
                id='form1Example1'
                className='form-control form-control2 mt-2 mb-3  rounded'
                placeholder='New Password'
                required
                
            
              />
              <input
              type='password'
              id='form1Example1'
              className='form-control form-control2 mt-3 mb-4 w-100 '
              placeholder='Confirm'
              required
             
         
            />
             <button type='submit' className='btn btn-block login-btn' onClick={handleVerify}>
                Reset
              </button>
           
                </div>
               
              
              </form>

              <img src={img_tree} className='img_tree ' />
            </div>
            </Col>
            </Row>
      </div>
     
        
      )}
    
    </Container>
  );
  {/* Warning Message */}
      <Alert variant="warning" show={showWarning} onClose={() => setShowWarning(false)} dismissible>
      Please enter a valid email address.
    </Alert>
}

export default Forget;