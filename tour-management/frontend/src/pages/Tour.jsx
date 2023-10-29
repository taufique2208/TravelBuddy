import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'
import tourData from '../assets/data/tours'
import SearchBar from '../shared/SearchBar'
import TourCard from '../shared/TourCard'
import { Container,Row,Col } from 'reactstrap'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'

const Tour = () => {
  const [pageCount,setPageCount]=useState(0)
  const [page,setPage]=useState(0);
const {data: tours,loading,error} = useFetch(`${BASE_URL}/tour?page=${page}`)
const {data: tourCount} = useFetch(`${BASE_URL}/tour/search/getTourCount`)

  useEffect(()=>{
    const pages  = Math.ceil(tourCount/4)
    setPageCount(pages)
    window.scrollTo(0,0)
  },[page,tourCount,tours])

  return (
   <>
   <CommonSection title={'All Tours'}>
    </CommonSection>
    <section>
      <Container><Row>
        <SearchBar></SearchBar>
      </Row></Container>
    </section>
    <section>
      <Container>
        {
          loading&& <h4 className="text-center">Loading.....</h4>
        }
        {
          error&& <h4 className="text-center">{error}</h4>
        }
        { !loading && !error && <Row>
        {tours?.map(tour=>
            <Col lg='3' key={tour.id}><TourCard tour={tour}></TourCard></Col>
          )}

          <Col lg='12'>
            <div className="pagination">
              {[...Array(pageCount).keys()].map(number=>(
                <span key={number} onClick={()=>setPageCount(number)}>{number+1}</span>
              ))}
            </div>
          </Col>
      </Row>
      
              }
              </Container>
    </section>
    </>
  )
}

export default Tour