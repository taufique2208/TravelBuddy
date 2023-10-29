import React from 'react'
import './Newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import Tourist from '../assets/images/male-tourist.png'

const Newsletter = () => {

    const sendEmail=(e)=>{
        const email=e.target.value;
        if(email!=null){
            const recipient = email;
const subject = 'Hello';
const body = 'This is the body of the email.';

const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

window.location.href = mailtoLink;
        }
    }
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful travelling information</h2>
                        <div className="newsletter__input"><input type="email" placeholder='Enter Your Email' />
                        <button className="newsletter__btn" onClick={sendEmail}>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={Tourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter