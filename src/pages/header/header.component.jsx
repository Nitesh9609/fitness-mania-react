import './header.style.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/dumbell.svg'
import { useNavigate } from 'react-router-dom'


const Header = () => {
const auth = localStorage.getItem('user')
const navigate = useNavigate()

const logOut = () =>{
    localStorage.clear()
    navigate('/login')
}
  return (
    <>

    <div className='link-tags'>
        <Link
            to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='nav-link'>
            <Link 
                className='link'
                to='/about'>
                About
            </Link>

            <Link
                className='link'
                to='/service'>
                Services
            </Link>

            <Link
                className='link'
                to='/pricing'>
                Pricing
            </Link>

            { auth ? <Link
                className='link'
                to='/login'
                onClick={logOut}>
                LogOut
            </Link> :

            <Link
                className='link'
                to='/login'>
                Login
            </Link>}

            

            <Link
                className='link'
                to='/signUp'>
                SignUp
            </Link>


        </div>
        
    </div>
        
    </>
  )
}

export default Header