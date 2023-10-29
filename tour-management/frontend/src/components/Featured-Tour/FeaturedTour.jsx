import React from 'react'
import TourCard from '../../shared/TourCard'
// import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'
import useFetch from './../../hooks/useFetch.js'
import {BASE_URL} from './../../utils/config.js'

const FeaturedTour = () => {

  const { data: featuredTours ,loading,error}=useFetch(`${BASE_URL}/tour/search/getFeaturedTour`)
  console.log(featuredTours)
  return (
    <>{
      loading&&<h4>Loading......</h4>
    }
    {
      error && <h4>{error}</h4>
    }
    {!loading && !error && featuredTours?.map(tour=>(
        <Col lg='3' className='mb-4' key={tour.id}>
            <TourCard tour={tour}></TourCard>
        </Col>
    ))}
    </>
  )
}

export default FeaturedTour