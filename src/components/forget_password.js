
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Illustration_Reset from '../assets/Group.png';
import Logo from '../assets/ODC Logo (2).png';
import img_tree from '../assets/tree vector.png';
import Signup from './signup.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function Forget() {
    const [showSignup, setShowSignup] = useState(false);
    
  
    const handleSignupClick = () => {
      setShowSignup(true);
    };
  
    if (showSignup) {
      return <Signup />;
    }
  return (
    <Container>
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
        <span className='reset-p'>No worries , we will sent you some instructions to reset it.</span>
  <div class="form-outline mb-4">
    <input type="email" id="form1Example1" class="form-control form-control2"  placeholder='Email'  required/>
   
  </div>





  <button type="submit" class="btn  btn-block login-btn">Send</button>
  <div class="col">
  <br></br>
    <p>Don't have an account? <a href="#!" className='link-login'onClick={handleSignupClick}><strong>Sign up</strong></a></p>
  </div>

</form>
        
        
        
     

 
       
   

<img src={img_tree} className='img_tree '/>
        </div>   
        </Col>
      </Row>

    </Container>

  );
}

export default Forget;