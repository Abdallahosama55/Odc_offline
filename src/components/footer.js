import React, { Fragment, useState } from 'react';
import { CDBBox } from 'cdbreact';
import Logo3 from '../assets/ODC LOGO-01 2.png';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer } from 'cdbreact';
import { Col, Row } from 'react-bootstrap';

function Footercomp() {
    return(
<footer>
      <Row className='footer d=flex'>
      
  <Col lg={6} md={6} sm={6}>
  
  <img src={Logo3}/>
  <p>A freely accessible and completely free technological center that offers training and events for the community of young developers, innovators, and entrepreneurs. We mainly target youth, fresh graduates, and young entrepreneurs</p>

  
  
  </Col>
       
  <Col lg={6} md={6} sm={6} className='div-footer'>
  <h3 >Subscribe to our newslatter</h3>
  <p>That's all for now, follow us on social media and subscribe to our newsletter to stay up to date!</p>
<Row>
<Col lg={12}>
<div class="form-group">
  
<input type='email' class="form-control email-filed " id="emailInput" placeholder="Enter email"></input>



</div>
</Col>

</Row>
   
  </Col>

      
    </Row>
    <Row className='d-flex'>

<Col><p className='copyright'>&copy; 2023 Orange Digital Center. All rights reserved. </p></Col>
    
  
   
    
    </Row>
          
<CDBBox display="flex">
<CDBBtn flat color="dark" className="p-2">
  <CDBIcon fab icon="facebook-f" />
</CDBBtn>
<CDBBtn flat color="dark" className="mx-3 p-2">
  <CDBIcon fab icon="twitter" />
</CDBBtn>
<CDBBtn flat color="dark" className="p-2">
  <CDBIcon fab icon="instagram" />
</CDBBtn>
</CDBBox>
    </footer>
);
}
export default Footercomp;