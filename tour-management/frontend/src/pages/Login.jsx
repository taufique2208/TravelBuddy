import React from 'react'
import { useState,useContext } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { Container,Row,Col,Form,FormGroup,Button } from 'reactstrap'
import './Login.css'
import loginImg from'../assets/images/login.png'
import userIcon from'../assets/images/user.png'
import { AuthContext } from '../context/authContext'
import { BASE_URL } from '../utils/config'

const Login = () => {
  const [credentials,setCredentials]=useState({
    email:undefined,
    password:undefined,
  })

  const {dispatch} = useContext(AuthContext)
  const navigate=useNavigate()
  const handleChange=e=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
  }

  const handleClick= async e=>{
    e.preventDefault();
    dispatch({type:'LOGIN_START'})
    try{
      const res=await fetch(`${BASE_URL}/auth/login`,{
        method:'post',
        headers:{
          "content-type":'application/json',
        },
        credentials:'include',
        body : JSON.stringify(credentials)
      })
      console.log(res)
      const result=await res.json()

      if(!res.ok){alert(result.message)}
      console.log(result.data)
      dispatch({type: "LOGIN_SUCCESS" ,payload : result.data})
      console.log(result.data)
      navigate('/')
    }catch(e){
      dispatch({type:"LOGIN_FAILURE",payload:e.message})
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
                  <img src={loginImg} alt="" />
                </div>
                <div className="login__form d-flex">
                  <div className="user">
                    <img src={userIcon} alt="" />
                    
                  </div>
                  {/* <h2>Login</h2> */}
                  <Form>
                    <FormGroup>
                      <input type="email" placeholder='Email' required id='email' onChange={handleChange}/>
                    </FormGroup>
                    <FormGroup>
                      <input type="password" placeholder='Password' required id='password' onChange={handleChange}/>
                    </FormGroup>
                    <Button className='auth__btn' type='submit' onClick={handleClick}>Login</Button>
                    <p>Don't have an account?<Link to='/register'>Register</Link></p>
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

export default Login