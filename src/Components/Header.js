import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../index.css';
import { Switch, Route } from 'react-router-dom';
import AddUser from '../Components/AddUser';



class Header extends Component {
    render() {
        return (
            <header className="headercss">
                <Link to="/adduser" className="myButton">Add User</Link>
                </header>
                        
        );
    }
}
export default Header;



