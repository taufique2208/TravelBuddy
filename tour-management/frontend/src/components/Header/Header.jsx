import React from 'react'
import {Container,Row,Button} from 'reactstrap'
import { NavLink,Link } from 'react-router-dom'
import logo from '../../assets/images/TravelBuddy_Logo.png'
import '../../App.css'
import './Header.css'
import { AuthContext } from '../../context/authContext'
import { BASE_URL } from '../../utils/config'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

const Header = () => {
    const headerRef=useRef(null);
    const navigate=useNavigate();
    const {user,dispatch} = useContext(AuthContext)
    // console.log(user,'78')

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }

    const stickyHeaderFunc=()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>80|| document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky__header');
            }else{
                headerRef.current.classList.remove('sticky__header');

            }
        })
    }

  return (
    <>
    <header className='header'>
        <Container>
            <Row>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                    <img src={logo} width={'20%'}></img></div>
                    
                <div className='navigation'>
                    <ul className='menu d-flex align-items-center gap-5'>
                        
                                <li className='nav__item' key={1}>
                                <NavLink to='/home' className={navClass=>navClass.isActive?'active__link':''}><div>Home</div></NavLink></li>
                                <li className='nav__item' key={2}>
                                <NavLink to='/about' className={navClass=>navClass.isActive?'active__link':''}><div>About</div></NavLink></li>
                                <li className='nav__item' key={3}>
                                <NavLink to='/tour' className={navClass=>navClass.isActive?'active__link':''}><div>Tours</div></NavLink></li>
                        
                    </ul>
                </div>
                <div className='nav__right d-flex align-items-center gap-4'>
                    <div className='nav__btns d-flex align-items-center gap-4'>
                        {
                            user?<>
                            <h5 className="mb-0">{user.username}</h5>
                            <Button className="btn btn-dark" onClick={logout}>Logout</Button>
                            </> :<>
                        <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                        <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
                        </>}
                    </div>
                </div>
                <span className='menu'>
                    <i className='ri-menu-line'></i>
                </span>
                </div>
            </Row>
        </Container>
    </header>
    </>
  )
}

export default Header