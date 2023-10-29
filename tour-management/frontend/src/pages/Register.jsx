import React from 'react'
import { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
import './Login.css'
import registerImg from'../assets/images/register.png'
import userIcon from'../assets/images/user.png'
import { AuthContext } from '../context/authContext'
import { BASE_URL } from '../utils/config'
import { Navigate,useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()
  const [credentials,setCredentials]=useState({
    username:undefined,
    email:undefined,
    password:undefined,
  })

  const {dispatch} = useContext(AuthContext)
  

  const handleChange=e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    // console.log(credentials)
  }

  const handleClick=async e=>{
    console.log(credentials)

    e.preventDefault();
    try{
      const res= await fetch(`${BASE_URL}/auth/register`,{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(credentials)
      })
      console.log(res)

      const result = await res.json()

      if(!res.ok){
        alert('fail')
      }else{
      dispatch({type:'REGISTER_SUCCESS'})
      navigate('/login')}
    }catch(e){
      alert(e.message)
    }
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8' className='m-auto d-flex'>
              <div className="login__container justify-content-between d-flex">
                <div className="login__img">
                  <img src={registerImg} alt="" />
                </div>
                <div className="login__form d-flex">
                  <div className="user">
                    <img src={userIcon} alt="" />
                    
                  </div>
                  {/* <h2>Login</h2> */}
                  <Form>
                  <FormGroup>
                      <input type="text" placeholder='Username' required id='username' onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                      <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder='Create Password' required id='password' onChange={handleChange}/>
                    </FormGroup>
                    <Button className='auth__btn' type='submit' onClick={handleClick}>Create Account</Button>
                    <p>Already have an account?<Link to='/login'>Login</Link></p>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Register