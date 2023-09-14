import React, { Fragment, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footercomp from '../components/footer';
import CourseCarousel from'../components/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import img_icon from '../assets/Ellipse 173.png'
import { IoMdAddCircleOutline } from 'react-icons/io';

import IMG from '../assets/Kofis.jpg';
import { Button, ButtonGroup } from 'react-bootstrap';

function Home() {
  
const courses = [
  {
    id: 1,
    title: 'Eid Hackthon ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: img_icon,
    date:'20/5',
    durr:'2week',
    status:'offline',
  },
  {
    id: 2,
    title: 'Techie Kit ',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    image: img_icon,
    date:'25/5',
    durr:'4 week',
    status:'offline',
  },
  {
    id: 3,
    title: 'Reimgine your city',
    description: 'Proin bibendum aliquam risus, et tristique felis gravida non.',
    image: img_icon,
    date:'14/6',
    durr:'3 week',
    status:'offline',
  },
  {
    id: 4,
    title: '3D printing Diploma',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: img_icon,
    date:'18/6',
    durr:'2week',
    status:'offline',
  },
  {
    id: 5,
    title: 'Startups Acceleration Program',
    description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.',
    image: img_icon,
    date:'19/5',
    durr:'2week',
    status:'offline',
  },
  {
    id: 6,
    title: 'Intro Ai Event',
    description: 'Proin bibendum aliquam risus, et tristique felis gravida non.',
    image: img_icon,
    date:'22/6',
    durr:'2 week',
    status:'offline',
  },
];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  
  return (
    <Fragment>

      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="custom-carousel"
        indicators
      >
        {/* Carousel items */}
        <Carousel.Item>
          <img className="d-block w-100" src={IMG} alt="First slide" />
          <Carousel.Caption className="custom-caption">
            <h3>Coding School</h3>
            <p>Coding schools are educational institutions that provide training and courses in programming and software development. There are numerous coding schools around the world, both online and in physical locations, offering various programs and curriculum. If you have more information about the specific Orange Coding School you are referring to, please provide additional details so I can assist you better.</p>
            <Button className='btn-warning btn-describe'>View more</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={IMG} alt="Second slide" />
          <Carousel.Caption className="custom-caption">
            <h3>Our Courses</h3>
            <p>Coding school provides a wide variety of courses, covering diverse subjects and disciplines. Learners can choose from thousands of courses offered by top universities and institutions from around the world. This extensive selection allows individuals to explore new fields, develop new skills, and pursue their areas of interest.</p>
            <Button className='btn-warning btn-describe'>View more</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={IMG} alt="Third slide" />
          <Carousel.Caption className="custom-caption">
            <h3>Interactive Learning Experience</h3>
            <p>Coding school provides interactive learning experiences through video lectures, quizzes, assignments, and discussion forums. These elements facilitate engagement and interactivity, enabling learners to reinforce their understanding, apply concepts, and collaborate with peers through discussions.</p>
            <Button className='btn-warning btn-describe'>View more</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  <section className='contaier-section2'>
  <div className='container-sectionn'>
<div className='section2-home'>
<div className='section2-h'>
<h2>My Courses</h2>
<p>Here you’ll have all of the Courses 
you’ve applied to</p>
<a className='p-section2' href='#'>
<IoMdAddCircleOutline color="orange"/> Add Courses </a>
</div>
</div>

<div className='section2-home'>
<div className='section2-h'>
<h2>Up coming events</h2>
<div className="container">

<CourseCarousel courses={courses} />

</div>
</div>

</div>

</div>
</section>

      <Footercomp></Footercomp>
    </Fragment>
  );
}

export default Home;