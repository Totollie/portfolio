import React, {Component} from 'react';
import {Col, Image, Jumbotron, Row} from "react-bootstrap";
import TextEntry from "../../../../components/textEntry/TextEntry";
import seyahlogo from '../../../../../public/images/seyahlogo.png';

export default class AboutSplash extends Component {
	render() {
		return (
			<section style={{
				height: "100vh",
				display: "flex",
				justifyContent: "center"
			}}>
				<span className="anchor exact" id="about"/>
				<Jumbotron bsClass="jumbotron banner">
					<hr/>
					<Row>
						<Col xs={12} md={4}>
							<div className="centered-box">
								<Image src={seyahlogo} rounded responsive/>
							</div>
						</Col>
						<Col xs={12} md={8}>
							<div className="centered-box">
								<TextEntry title={"About Me"}>
									<p style={{textAlign: "center", fontSize: "20px", margin: "20px"}}>
										I am an active web developer with significant experience in back-end
										systems. I have worked with a wide range of technologies depending on the
										requirements of the project and I am flexible to its needs.<br/><br/>I am also a
										full-time student, in my third year of a degree towards MEng Computer Science,
										having taken a year out working as a research intern.<br/><br/>Take a look at
										the skills I have acquired below!<br/>
										<a style={{display: "block", fontSize: "20px", margin: "10px"}} href="#skills">Go</a>
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