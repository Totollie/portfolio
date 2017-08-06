import React, {Component} from 'react';
import {Image, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import logo from '../../../../public/images/seyahlogo.png';
import minorProjects from "../../../../public/minorprojects.json";
import majorProjects from "../../../../public/majorprojects.json";

export default class NavigationBar extends Component {

    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Image src={logo} height={50}/>
                    </Navbar.Brand>
                    <Navbar.Brand>
                        <a href="#home">Oliver Hayes</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="#about">About Me</NavItem>
                        <NavDropdown eventKey={2} title="Technical Skills" id="tech-skills">
                            <MenuItem eventKey={2.1} href="#skills">Technical Skills</MenuItem>
                            <MenuItem eventKey={2.2} href="#languages">Language Proficiencies</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Experience" id="experience">
                            <MenuItem eventKey={3.1} href="#work">Work History</MenuItem>
                            <MenuItem eventKey={3.2} href="#extra-curricular">Extra-curricular</MenuItem>
                            <MenuItem eventKey={3.3} href="#education">Education History</MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Projects" id="projects">
                            {majorProjects.map(proj => <MenuItem eventKey={proj.key} href={"#"+proj.key}>{proj.header}</MenuItem>)}
                            <MenuItem divider />
                            {minorProjects.map(proj => <MenuItem eventKey={proj.key} href={"#"+proj.key}>{proj.name}</MenuItem>)}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}