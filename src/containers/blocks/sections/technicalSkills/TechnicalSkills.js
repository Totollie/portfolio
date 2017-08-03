import React, {Component} from 'react';
import {Col, PageHeader, Panel, Row} from "react-bootstrap";

export default class TechnicalSkills extends Component {
	render(){
		return (
			<section>
				<span className="anchor" id="skills"/>
				<PageHeader>Technical Skills</PageHeader>
				<Row>
					<Col xs={12} md={6}>
						<Panel bsStyle="primary" header={<h1>Languages</h1>}>
							<Col xs={4}>Java</Col>
							<Col xs={4}>Javascript</Col>
							<Col xs={4}>Python</Col>
							<Col xs={4}>HTML</Col>
							<Col xs={4}>SASS</Col>
							<Col xs={4}>UNIX shell</Col>
							<Col xs={4}>SQL</Col>
							<Col xs={4}>XML</Col>
							<Col xs={4}>Scheme</Col>
							<Col xs={4}>OCaml</Col>
						</Panel>
					</Col>
					<Col xs={12} md={6}>
						<Panel bsStyle="info" header={<h1>Frameworks/APIs</h1>}>
							<Col xs={4}>ReactJS</Col>
							<Col xs={4}>Axios</Col>
							<Col xs={4}>REST API</Col>
							<Col xs={4}>Webpack</Col>
							<Col xs={4}>Spring Boot</Col>
							<Col xs={4}>Swing</Col>
							<Col xs={4}>JavaFX</Col>
							<Col xs={4}>RMI</Col>
						</Panel>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Panel bsStyle="success" header={<h1>Methodologies</h1>}>
							<Col xs={4}>Functional programming</Col>
							<Col xs={4}>Agile development</Col>
							<Col xs={4}>Event-B secure systems</Col>
							<Col xs={4}>Multi-threading</Col>
							<Col xs={4}>OOP</Col>
							<Col xs={4}>UML</Col>
						</Panel>
					</Col>
					<Col xs={12} md={6}>
						<Panel bsStyle="info" header={<h1>Databases</h1>}>
							<Col xs={4}>NoSQL (MongoDB + Spring Boot)</Col>
							<Col xs={4}>SQL (MySQL, SQLite, H2)</Col>
							<Col xs={4}>Hibernate ORM</Col>
						</Panel>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<Panel bsStyle="danger" header={<h1>Tools</h1>}>
							<Col xs={4}>CI</Col>
							<Col xs={4}>Docker</Col>
							<Col xs={4}>Gradle</Col>
							<Col xs={4}>Maven</Col>
							<Col xs={4}>Git</Col>
						</Panel>
					</Col>
				</Row>
			</section>
		)
	}
}