import React from 'react'
import CommonSection from '../shared/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import { useState } from 'react'

const SearchResult = () => {
  const location = useLocation()

  const [data] = useState(location.state)
  
  return (
    <>
    <CommonSection title={'Tour Search Result'}></CommonSection>
    <section>
      <Container>
        <Row>
          {
            data.length===0?<h4>No tour Found</h4>:data?.map(tour=>
              <Col lg='3' className='mb-4'>
                <TourCard tour={tour}></TourCard>
              </Col>
              )
          }
        </Row>
      </Container>
    </section>
    </>
  )
}

export default SearchResult