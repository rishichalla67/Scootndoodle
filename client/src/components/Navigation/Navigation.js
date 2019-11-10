import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'


import './Navigation.css'

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar expand='sm' className='nav-container'>
                <Navbar.Toggle area-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Link className='d-inline p-2 text-white' to={'/'} style={{ textDecoration: 'none' }}>Home</Link>
                        <Link className='d-inline p-2 text-white' to={'/#about-us'} style={{ textDecoration: 'none' }}>About Us</Link>
                        <Link className='d-inline p-2 text-white' to={'/Shop'} style={{ textDecoration: 'none' }}>Buy</Link>
                        <Link className='d-inline p-2 text-white' to={'/#contact-us'} style={{ textDecoration: 'none' }}>Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
