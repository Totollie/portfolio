import React, {Component} from 'react';
import {Col, PageHeader, Row} from "react-bootstrap";
import DonutChart from "../../../../components/donutChart/DonutChart";

export default class Languages extends Component {
	render(){
		return (
			<section>
				<span className="anchor" id="languages"/>
				<PageHeader>Language/Tool Proficiencies</PageHeader>
				<Row>
					<Col xs={6} md={4}>
						<DonutChart value={80} title="Javascript" strokeColour="blue"/>
					</Col>
					<Col xs={6} md={4}>
						<DonutChart value={70} title="Java" strokeColour="red"/>
					</Col>
					<Col xs={6} md={4}>
						<DonutChart value={85} title="React" strokeColour="orange"/>
					</Col>
				</Row>
				<Row>
					<Col xs={6} md={4}>
						<DonutChart value={70} title="Gradle" strokeColour="purple"/>
					</Col>
					<Col xs={6} md={4}>
						<DonutChart value={75} title="Webpack" strokeColour="green"/>
					</Col>
					<Col xs={6} md={4}>
						<DonutChart value={95} title="Git Flow" strokeColour="black"/>
					</Col>
				</Row>
			</section>
		)
	}
}