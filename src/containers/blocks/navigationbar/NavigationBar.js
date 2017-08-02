import React, {Component} from 'react';
import {Image, Nav, Navbar, NavItem} from "react-bootstrap";
import logo from '../../../../public/images/seyahlogo.png';

export default class NavigationBar extends Component {

    render(){
        console.log(window.pageYOffset);
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Image src={logo} height={50}/>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <a href="#home">Oliver Hayes</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#home">Home</NavItem>
                    <NavItem eventKey={2} href="#languages">Language Proficiencies</NavItem>
                    <NavItem eventKey={3} href="#education">Education</NavItem>
                </Nav>
            </Navbar>
        )
    }

}