import React, {Component} from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";

export default class NavigationBar extends Component {

    render(){
        console.log(window.pageYOffset);
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">Oliver Hayes</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#home">Home</NavItem>
                    <NavItem eventKey={2} href="#about">About Me</NavItem>
                    <NavItem eventKey={3} href="#languages">Language Proficiencies</NavItem>
                </Nav>
            </Navbar>
        )
    }

}