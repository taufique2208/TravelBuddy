import React from 'react'
import { Card,CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import './TourCard.css'

const TourCard = ({tour}) => {

    const {_id,title,city,photo,price,feautured,reviews}=tour
    // const totalRating= reviews?.reduce((acc,item)=>acc+item.rating,0);
    // const avgRating = totalRating===0?"":totalRating===1?totalRating:totalRating/ reviews?.length;
    const {totalRating,avgRating} = calculateAvgRating(reviews)

  return (
    <div className="tour__card"><Card>
        <div className="tour__img">
            <img src={photo} alt="" />
            <span>Featured</span>
        </div>
        </Card>
        <CardBody>
            <div className="card__top d-flex align-items-center justify-content-between">
                <span className="tour__locations"><i className="ri-map-pin-line"></i>{city}</span>
                <span className="tour__locations"><i className="ri-star-fill"></i>{avgRating===0?null:avgRating}{" "}{totalRating===0?('Not Rated'):(<span>({reviews.length})</span>)}</span>
            </div>
                <h2 className="tour__title"><Link to={`/tour/${_id}`}>{title}</Link></h2>
                <div className="card__bottom d-flex align-items-center justify-content-between mt-3"><h5>${price}<span>/per person</span></h5>
                    <button className="booking__btn "><Link to={`/tour/${_id}`}>Book Now</Link></button>
                </div>

        </CardBody></div>
  )
}

export default TourCard