import React, { useEffect } from 'react'
import './Booking.css'
import { Form,FormGroup,ListGroup,ListGroupItem,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { useContext } from 'react';
import { BASE_URL } from '../../utils/config';
const Booking = (props) => {
    const {price,reviews,title}=props.tour;
    const navigate=useNavigate()
    const {user} = useContext(AuthContext)
    const [booking,setBooking]=useState({
        userId:user&&user._id,
        userEmail:user && user.email,
        tourName:title,
        fullName:'',
        phone:'',
        guestSize:1,
        bookAt:'',

    })

    const handleChange=e=>{
setBooking(prev=>({...prev,[e.target.id]:e.target.value}))
    }
    const serviceFee=10;
    const[total,setTotal]=useState(Number(price)*Number(booking.guestSize) + Number(serviceFee))
    // const total=Number(price)*Number(booking.guestSize) + Number(serviceFee);

useEffect(()=>{

    setTotal(Number(price)*Number(booking.guestSize) + Number(serviceFee))
},[booking])

    const handleClick= async e=>{
        e.preventDefault();
        // console.log(credentials);
        alert('Thankyou')
        try{
            if(!user||user===undefined||user===null){
                return alert('Please Sign In')
                navigate('/login')
            }
            const res= await fetch(`${BASE_URL}/booking`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body:JSON.stringify(booking)
            })

            const result =await res.json()

            if(!res.ok){return alert(result.message)}
        }catch(e){
            alert(e.message)
        }
    }

  return (
    <>
    <div className="booking">
        <div className="booking__top d-flex align-items-center-justify-content-between">
        <h3>${price}
        <span>/per person</span></h3>
        <span className='tour__rating d-flex align-items-center'><i className="ri-star-s-fill"></i>{props.avgRating===0?null:props.avgRating}({reviews?.length})</span>
        </div>
        <div className="booking__form">
            <h5>Information</h5>
            <Form className="booking__info-form" onSubmit={handleClick}>
                <FormGroup>
                    <input id='fullName' type="text" placeholder='Full Name' required onChange={handleChange}/>
                    <input id='phone' type="number" placeholder='Number' required onChange={handleChange}/>
                    <input id='bookAt' type="date" placeholder='bookAt' required onChange={handleChange}/>
                    <input id='guestSize' type="number" placeholder='guestSize' required onChange={handleChange}/>
                </FormGroup>
            </Form>
        </div>
        <div className="booking__bottom">
            <ListGroup className='border-0 px-0'>
                <h5>${price} <i className="ri-close-line"></i>{booking.guestSize} person
                </h5><span>${price}</span>
            </ListGroup>
            <ListGroup className='border-0 px-0'>
                <h5>Service Charge <i className="ri-close-line"></i>{booking.guestSize} person
                </h5><span>${serviceFee}</span>
            </ListGroup>
            <ListGroup className='border-0 px-0'>
                <h5>Total <i className="ri-close-line"></i>{booking.guestSize} person
                </h5><span>${total}</span>
            </ListGroup>
            <Button className="btn primary__btn w-100" onClick={handleClick}>Book Now</Button>
        </div>
    </div>
    </>
  )
}

export default Booking