import React, { useEffect, useRef,useState ,useContext} from 'react'
import './TourDetails.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import tourData from '../assets/data/tours'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/authContext'
import { useNavigate } from 'react-router-dom'
const TourDetails = () => {

  const {id} = useParams()
  const navigate = useNavigate()
  const reviewMsgRef=useRef();
  const [tourRating,setTourRating]=useState(null);
  const {user}=useContext(AuthContext)
  // console.log(id)
  // const tour = tourData.find(tour=>tour.id===id)

  const { data : tour,loading,error} = useFetch(`${BASE_URL}/tour/${id}`)

  const {photo,title,desc,price,reviews,city,distance,maxgroupSize}=tour

  const {totalRating,avgRating}=calculateAvgRating(reviews)

  const options={day:'numeric',month:'long',year:'numeric'}

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])
  const submitHandler= async e=>{
    e.preventDefault();
    const reviewText=reviewMsgRef.current.value;
    try{
    if(!user||user===undefined||user===null){
      alert('Please Sign In')
      navigate('/login')
    }
    const reviewObj={
      username: user.username,
      reviewText,
      rating : tourRating
    }
      const res= await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)

      })
      const result =await res.json()
      alert(result.message)
    }catch(e){
      alert(e.message)
    }


    // alert(`${reviewText},${tourRating}`)
  }  

  return (
    <>
    <section>
      <Container>
        {
          loading && <h2>Loading.....</h2>
        }
        {
          error && <h2>{error}</h2>
        }
        {!loading && !error &&<Row>
          <Col lg='8'>
            {/* <img src={photo} alt="" height={'100'} style={{objectFit:'cover',borderRadius:'2rem'}} /> */}
            <div class="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                <img src={photo}class="img-fluid" alt="Image" />
                                <div class="img-overlay bg-dark"></div>
                            </div>
            <div className="tour__info">
              <h2>{title}</h2>
              <div className="d-flex align-item-center gap-5">
                <span className='tour__rating d-flex align-items-center gap-1'>
                  <i className="ri-star-s-fill" style={{'color':'var(--secondary-color)'}}></i>
                  {avgRating===0?null:avgRating}
                  {totalRating===0?('Not Rated'):( <span>({reviews?.length})</span>)}
                </span>

                <span><i className="ri-map-pin-fill"></i>{city}</span>
              </div>
              <div className="tour__extra-details">
                <span><i className="ri-map-pin-2-line"></i>{city}</span>
                <span><i className="ri-money-dollar-circle-line"></i>{price}</span>
                <span><i className="ri-group-line"></i>{maxgroupSize}</span>
              </div>
              <h5>Description</h5>
              <p>{desc}</p>
            </div>
            <div className="tour__reviews mt-4">
              <h4>Reviews ({reviews?.length} reviews)</h4>
              <Form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 rating__group">
                  <span onClick={()=>setTourRating(1)}><i className="ri-star-s-fill"></i>1</span>
                  <span onClick={()=>setTourRating(2)}><i className="ri-star-s-fill"></i>2</span>

                  <span onClick={()=>setTourRating(3)}><i className="ri-star-s-fill"></i>3</span>
                  <span onClick={()=>setTourRating(4)}><i className="ri-star-s-fill"></i>4</span>
                  <span onClick={()=>setTourRating(5)}><i className="ri-star-s-fill"></i>5</span>

                  <div className="review__input">
                    <input type="text" ref={reviewMsgRef} placeholder='Share Your Thoughts' required />
                    <button className="btn primary__btn" type='submit'>
                      Submit
                    </button>
                  </div>



                </div>
              </Form>
              <ListGroup className='user__reviews'>
                {
                  reviews?.map(review=>(
                    <div className="review__item">
                      <img src={avatar} alt="" />
                      <div className="w-100">
                        <div className='d-flex align-items-center justify-content-between'>
                          <h5>{review.username}</h5>
                          <p>{new Date(review.createdAt).toLocaleDateString('en-US',options)}</p>
                        </div>
                        <span className="d-flex align-items-center">{review.rating}<i className="ri-star-s-fill"></i></span>
                      <h5>{review.reviewText}</h5>
                      
                      </div>
                    </div>
                  ))
                }
              </ListGroup>
            </div>
          </Col>
          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating}/>
          </Col>
        </Row>
}
      </Container>
    </section>
    </>
  )
}

export default TourDetails