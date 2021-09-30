import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.PNG';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <figure className='w-1/5 mx-auto'>
                <img src={logo} alt="" />
            </figure>
            <div className='text-xl font-bold bg-gray-900 text-center text-white py-2'>
                <Link className='mx-2 hover:bg-gray-100 hover:text-gray-900 py-2 px-3' to='/home'>Home</Link>
                <Link  className='mx-2 hover:bg-gray-100 hover:text-gray-900 py-2 px-3' to='/foodzone'>Food Category</Link>
                <Link className='mx-2 hover:bg-gray-100 hover:text-gray-900 py-2 px-3' to='/aboutus'>About Us</Link>
                <Link className='mx-2 hover:bg-gray-100 hover:text-gray-900 py-2 px-3' to='/order'>Order</Link>
            </div>
        </nav>
    )
}

export default Header
