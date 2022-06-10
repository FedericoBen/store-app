import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { SearchBar } from '../searchBar/SearchBar';
import { types } from '../../types/types';
import './navbar.css'


export const Navbar = () => {

    const { setSearch, user, dispatch } = useContext(AuthContext)
    const { name, logged } = user;

    const navigate = useNavigate();

    const hanldeDisplayMenu = () => {
        const navMenu = document.querySelector('.nav-menu');
        navMenu.classList.toggle("nav-menu_visible");
    }

    const hanldeDisplayAllProducts = () => {
        hanldeDisplayMenu();
        setSearch('');
    }

    const handleLogout = () => {

        const action = {
            type: types.logout
        }

        dispatch(action)

        navigate('/login', {
            replace: true
        })
    }


    return (
        <header className='header'>
            <nav className='nav'>
                <Link to='' className='logo nav-link'>Logo</Link>

                <div className='nav-menu-search'>
                    <SearchBar />
                </div>

                <button className='nav-toggle' onClick={hanldeDisplayMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
                <ul className='nav-menu'>
                    <li className='nav-menu-item'>
                        <NavLink to="/productos" onClick={hanldeDisplayAllProducts} className={"nav-link nav-menu-link "}>Productos</NavLink>
                    </li>
                    <li className='nav-menu-item'>
                        <NavLink to="" onClick={hanldeDisplayMenu} className={"nav-link nav-menu-link "}>About us</NavLink>
                    </li>
                    <li className='nav-menu-item'>
                        <NavLink to="" onClick={hanldeDisplayMenu} className={"nav-link nav-menu-link "}>Contact</NavLink>
                    </li>
                    <li className='nav-menu-item'>
                        <NavLink to="" onClick={handleLogout} className={"nav-link nav-menu-link "}>Logout</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}