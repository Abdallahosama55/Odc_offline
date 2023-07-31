import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock,faEnvelope ,faIdCard,faPhone} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../assets/ODC Logo (2).png';
import img_illstration from '../assets/Group (2).png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './login.js';
function Signup() {
    const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login/>;
  }
  return (
    <Container>
      <Row>
<Col>
<Row className='img-logo-container2'>
        
<img src={Logo} className='img_logo2' />
</Row>

<img src={img_illstration} className='signup-img' />
</Col>
        <Col>  
  

        <div className='center-container shadow-lg p-3 mb-3 mt-3 bg-white rounded'>
    

        <form >
        <h4>Signup</h4>
        <div className="input-group mb-4 ">
        <div className="input-group-append">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
        <input type="text" className="form-control " placeholder="Username" aria-label="Username" required />
        
      </div>

  <div class="input-group mb-4">
   <div className="input-group-append">
  <span className="input-group-text">
    <FontAwesomeIcon icon={faEnvelope} />
  </span>
 
</div>
    <input type="email" id="form1Example1" class="form-control" placeholder='Email'  required/>
   
  </div>


  <div class="input-group mb-4">
  <div className="input-group-append">
  <span className="input-group-text">
    <FontAwesomeIcon icon={  faLock} />
  </span>

</div>
    <input type="password" id="form1Example2" class="form-control" placeholder='Password' required />
    
  </div>
  <div class="input-group mb-4">
  <div className="input-group-append">
  <span className="input-group-text">
    <FontAwesomeIcon icon={  faLock} />
  
  </span>

</div>
  
  <input type="password" id="form1Example2" class="form-control" placeholder='Verfiy Password' required />
  
</div>
<div class="input-group mb-4">
<div className="input-group-append">
  <span className="input-group-text">
    <FontAwesomeIcon icon={  faIdCard} />
    
  </span>

</div>
<input type="number" id="form1Example2" class="form-control" placeholder='National ID' required />

</div>
<div class="input-group mb-4">
<div className="input-group-append">
  <span className="input-group-text">
    <FontAwesomeIcon icon={ faPhone} />
    
  </span>

</div>
<input type="number" id="form1Example2" class="form-control" placeholder='phone number' required />

</div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">

    </div>

 
  </div>

  <button type="submit" class="btn  btn-block login-btn">Create an account</button>
  <div class="col">
<br></br>
  <p>Do have an account? <a href="#!" className='link-login' onClick={handleLoginClick}><strong>Login</strong></a></p>
</div>
</form>
        
        
        
     

 
       
   


        </div>   
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;