import React, {Component} from 'react';
import {Col, Image, Jumbotron, Row} from "react-bootstrap";
import TextEntry from "../../../../components/textEntry/TextEntry";
import me from '../../../../../public/images/me.png';

export default class Splash extends Component {
	render() {
		return (
			<section style={{height: "100vh", display: "flex", justifyContent: "center"}}>
				<span className="anchor" id="home"/>
				<Jumbotron bsClass="jumbotron banner">
					<hr/>
					<Row>
						<Col xs={12} md={4}>
							<div className="centered-box">
								<Image src={me} circle responsive/>
							</div>
						</Col>
						<Col xs={12} md={8}>
							<div className="centered-box">
								<TextEntry title={"Oliver Hayes"}>
									<p className="orange"
									   style={{textAlign: "center", fontSize: "20px", margin: "20px"}}>
										Full stack web app developer, using Javascript and Java
										<br/><a style={{display: "block", fontSize: "20px", margin: "10px"}}
												href="#about">Go</a>
									</p>
								</TextEntry>
							</div>
						</Col>
					</Row>
					<hr/>
				</Jumbotron>
			</section>
		)
	}
}