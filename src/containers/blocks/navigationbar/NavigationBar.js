import React, {Component} from 'react';
import {Image, Nav, Navbar, NavItem} from "react-bootstrap";
import logo from '../../../../public/images/seyahlogo.png';

export default class NavigationBar extends Component {

    render(){
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
                    <NavItem eventKey={10} href="#about">About Me</NavItem>
                    <NavItem eventKey={20} href="#skills">Technical Skills</NavItem>
                    <NavItem eventKey={30} href="#languages">Language Proficiencies</NavItem>
                    <NavItem eventKey={40} href="#work">Work History</NavItem>
                    <NavItem eventKey={50} href="#extra-curricular">Extra-curricular</NavItem>
                    <NavItem eventKey={60} href="#education">Education History</NavItem>
                </Nav>
            </Navbar>
        )
    }

}