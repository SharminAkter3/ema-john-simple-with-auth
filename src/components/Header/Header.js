import React from 'react';
import { Link } from 'react-router-dom';
import UserContext, { AuthContext } from '../../Contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    const { user, logOut } = UserContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button className='btn-logOut' onClick={logOut}>Log Out</button>
                        :
                        <>
                            <Link to="/login">Log In</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }
                <span>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;