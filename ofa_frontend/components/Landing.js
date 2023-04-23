import React from 'react';
import { Container, Row, Col } from 'reactstrap';
const Landing = () => {
  return (
    <section id="landing" className="section position-relative">
    <div className="backdrop backdrop-one" />
    <div className="backdrop backdrop-two" />
      <Container>
        <Row className="align-items-center h-100">
          <Col lg={4}>
            <div className='card-product'>
              <p className='card-num'>5+</p>
              <p>Products</p>
            </div>
            <div className='card-access'>
              <p className='card-num'>100+</p>
              <p>Accessed</p>
            </div>
            <div className='card-user'>
              <p className='card-num'>20+</p>
              <p>Users</p>
            </div>
          {/* <div className="backdrop backdrop-three" /> */}
            {/* <div className="pr-lg-5">
              <div className="backdrop"></div>
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Lorem Ipsum</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Simply dummy text of the printing <span className="text-primary font-weight-medium">Name</span></h1>
              <p className="text-muted mb-4 pb-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <a href="#" className="btn btn-warning">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div> */}
          </Col>
          <Col lg={4}>
            <div className='card-title'>
              One For All
            </div>
            <div className='hero-container'>
              <div className='backdrop-hero'></div>
              <img src="/images/landing-hero.png" alt="" className="img-fluid mx-auto d-block"/>

            </div>
          </Col>
          <Col lg={4}>
            <div className='card-content'>
              <p>All-in-one platform</p>
              <p>More services more solutions</p>
              <p>Comprehensive ecosystem</p>
            </div>
            <div className='card-start'>
              GET STARTED
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Landing;