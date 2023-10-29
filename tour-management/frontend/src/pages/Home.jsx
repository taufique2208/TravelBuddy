import React from 'react'
import './Home.css'

import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitles from '../shared/Subtitles'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTour from '../components/Featured-Tour/FeaturedTour'
import MasonryImageGallery from '../components/GalleryImages/MasonryImageGallery'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return (<>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitles subtitle={'Know Before You Go'}/>
                <img src={worldImg}></img>
              </div>
                <h1>Travelling opens the door to creating <span className="highlight">memories</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos labore optio accusantium ab! Fugit quidem delectus, inventore explicabo atque ea ab, ex beatae at fuga magni iste porro nostrum mollitia.</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg}></img>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroVideo} ></video>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02}></img>
            </div>
          </Col>
          <SearchBar></SearchBar>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row><Col lg='3'>
          <h5 className="services__subtitle">What we serve</h5>
          <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServiceList></ServiceList>
          </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitles subtitle={'Explore'}></Subtitles>
            <h2 className="feautred__tour-title">Featured Tours</h2>
          
          </Col>
          <FeaturedTour></FeaturedTour>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience_content">
              <Subtitles subtitle={'Experience'}></Subtitles>
              <h2>With our all experience <br />we will serve you</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>980+</span>
                <h6>Successfull Trips</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular Clients</h6>
              </div>
              <div className="counter__box">
                <span>15+</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
            </Col>        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitles subtitle={'Gallery'}/>
            <h2 className="gallery__title">Visit Our Customers Gallery</h2>
          </Col>
          <Col lg='12'><MasonryImageGallery></MasonryImageGallery></Col>
        </Row>
      </Container>
    </section>

    <Newsletter></Newsletter>
    </>
  )
}

export default Home