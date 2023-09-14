import { trueFunc } from 'boolbase';
import React from 'react';
import { Row,Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { TbPointFilled } from "react-icons/tb";
import { AiOutlineFieldTime } from "react-icons/ai";
import { height, padding } from 'styled-system';

import { LuAlarmCheck } from "react-icons/lu";

const CourseCard = ({ title, description, image,date,durr,status }) => (
  <div className="card cards"  style={{ width: '22rem' ,height :'20rem'}}>
  <div className='img-card-div'>
    <img src={image} className="card-img-top" alt={title} rounded />
    </div>
    <div className="card-body">
    
    
      <h5 className="card-title">{title}</h5>
      
      <Row className=" status-card d-flex">
<Col><LuAlarmCheck color='orange' size={20}/>{durr}</Col>

<Col className='col-color'><TbPointFilled  color='orange' size={20}/>{status}</Col>
<Col><AiOutlineFieldTime  color='orange' size={22}/>{date}</Col>
      </Row>
      <p className='p-card'>{description}</p>
      <Button className='card-btn'>Enroll</Button>
    </div>
  </div>
);

const CourseCarousel = ({ courses }) => {
  const chunkSize = 3; // Number of cards per slide
  const slides = [];

  for (let i = 0; i < courses.length; i += chunkSize) {
    const chunk = courses.slice(i, i + chunkSize);
    slides.push(chunk);
  }

  return (
    <Carousel
    
      nextIcon={<BsChevronRight color='red'  style={{ marginLeft:'130px' }}/>}
      prevIcon={<BsChevronLeft  color='red'  style={{ marginRight:'130px' }}/>}
      indicators={false}
      
    >
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="row">
            {slide.map((course) => (
              <div className="col-md-4" key={course.id}>
                <CourseCard
                image={course.image}
                  title={course.title}
                  description={course.description}
                  durr={course.durr}
                  date={course.date}
                  status={course.status}

               
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CourseCarousel;