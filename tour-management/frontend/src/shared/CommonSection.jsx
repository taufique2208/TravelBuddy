import React from 'react'
import './CommonSection.css'
import { Container,Row,Col } from 'reactstrap'

const CommonSection = (props) => {
  return (
    <section className="common__section align-items-center">
        <Container>
            <Row>
                <Col lg='6'>
                    <h1>{props.title}</h1>
                </Col>

                
            </Row>
        </Container>
    </section>
  )
}

export default CommonSection