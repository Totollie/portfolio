import React, {Component} from 'react';
import {Col, Grid, Image, Jumbotron, Row} from "react-bootstrap";
import TextEntry from "../../../../components/textEntry/TextEntry";
import code from '../../../../../public/images/code.jpg';

export default class ProjectSplash extends Component {
	render() {
		return (
			<section style={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center"
			}}>
				<span className="anchor exact" id="projects"/>
				<Jumbotron bsClass="jumbotron banner">
					<hr/>
                    <Grid bsClass="container projects">
						<Col xs={12} md={4}>
							<div className="centered-box">
								<Image src={code} rounded responsive/>
							</div>
						</Col>
						<Col xs={12} md={8}>
							<div className="centered-box">
								<TextEntry title={"Projects"}>
									<p style={{textAlign: "center", fontSize: "20px", margin: "20px"}}>
										Over my previous roles and experiences, I have created a portfolio of work which
										is described below, to demonstrate each of my skills.
										<br/><a style={{display: "block", fontSize: "20px", margin: "10px"}}
												href="#skills">Go >></a>
									</p>
								</TextEntry>
							</div>
						</Col>
                    </Grid>
					<hr/>
				</Jumbotron>
			</section>
		)
	}
}