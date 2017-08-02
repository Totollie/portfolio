import React, {Component} from 'react';
import me from '../../../public/images/me.png';
import seyahlogo from '../../../public/images/seyahlogo.png';
import itinnov from '../../../public/images/itInnov.png';
import sotonuni from '../../../public/images/sotonuni.png';
import {Button, Col, Grid, Image, Jumbotron, Media, PageHeader, Row, Table, Thumbnail} from "react-bootstrap";
import TextEntry from "../../components/textEntry/TextEntry";

class HomePage extends Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div className="document">
				<Grid>
					<section>
						<span className="anchor" id="home"/>
						<Jumbotron id="home" bsClass="jumbotron row banner">
							<Col xs={12} md={3}>
								<Image src={me} circle responsive/>
							</Col>
							<Col xs={12} md={9}>
								<div className="centered-box">
									<TextEntry title={"Oliver Hayes"}>
										<p style={{textAlign: "center", fontSize: "16px"}}>
											Full stack web app developer, using Javascript and Java
										</p>
									</TextEntry>
								</div>
							</Col>
						</Jumbotron>
					</section>
					<section>
						<span className="anchor" id="languages"/>
						<PageHeader id="languages">Language/Tool Proficiencies</PageHeader>
						<Row>
							<Col xs={6} md={4}>
								<DonutChart value={80} title="Javascript" strokeColour="blue"/>
							</Col>
							<Col xs={6} md={4}>
								<DonutChart value={70} title="Java" strokeColour="red"/>
							</Col>
							<Col xs={6} md={4}>
								<DonutChart value={85} title="React" strokeColour="purple"/>
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={4}>
								<DonutChart value={60} title="Gradle" strokeColour="green"/>
							</Col>
							<Col xs={6} md={4}>
								<DonutChart value={65} title="Webpack" strokeColour="orange"/>
							</Col>
							<Col xs={6} md={4}>
								<DonutChart value={95} title="Git Flow" strokeColour="black"/>
							</Col>
						</Row>
					</section>
					<section>
						<span className="anchor" id="work"/>
						<PageHeader>Work History</PageHeader>
						<Row>
							<Media>
								<Media.Left>
									<img width={64} src={itinnov} alt="Image"/>
								</Media.Left>
								<Media.Body>
									<Media.Heading>
										<span style={{display: "block"}}>Research Project Assistant 5G-ENSURE</span>
										&nbsp;
										<small>
											IT Innovation Centre (June 2016 - September 2017)
										</small>
									</Media.Heading>
									<span style={{fontWeight: "600", display: "block", marginBottom: "5px"}}>
										Contributions towards H2020 Research Project 5G-ENSURE for modelling security
										threats in future mobile networks.
									</span>
									Developing and maintaining ReactJS + Spring Boot based modelling
									application, for the purpose of creating graphical diagrams. Designed user
									interface and contributed to development of RESTful web service, alongside
									deployment of the application. It used libraries such as JSPlumb, Axios, and
									common web development integration tools such as hot module reloading.
								</Media.Body>
							</Media>
						</Row>
						<Row>
							<Media>
								<Media.Left>
									<img width={64} src={seyahlogo} alt="Image"/>
								</Media.Left>
								<Media.Body>
									<Media.Heading>Principal Software Developer
										&nbsp;
										<small>
											SEYAH Freelancing (May 2012 - Ongoing)
										</small>
									</Media.Heading>
									<span style={{fontWeight: "600", display: "block", marginBottom: "5px"}}>
										Dedication to completing contracted jobs for clients from multiple
										countries, using my skills in Java and Javascript to give them the solution they
										are looking for.
									</span>
									<p>
										Developing and maintaining code for a range of clients, from startups to
										individual clients. Requests range from gaming mods to business dashboards and
										secure site areas. This has used all of my skills in timekeeping and
										organisation, on top of my coding ability in Java and Javascript. It also
										reflects on my ability to work in teams and to pick up on code and API developed
										before my contributions.
									</p>
								</Media.Body>
							</Media>
						</Row>
						<Row>
							<Media>
								<Media.Left>
									<img width={64} src={sotonuni} alt="Image"/>
								</Media.Left>
								<Media.Body>
									<Media.Heading>Student Programming Support
										&nbsp;
										<small>
											iSolutions (ECS) - University of Southampton (March 2017 - June 2017)
										</small>
									</Media.Heading>
									<span style={{fontWeight: "600", display: "block", marginBottom: "5px"}}>
										Teaching and aiding fellow students in various programming languages and problems.
									</span>
									<p>
										Dedicated time to offering assistance to other students that are struggling with
										a particular problem or concept, specifically teaching them and working with
										them how to derive the solution, which is far more effective than just showing
										it to them. Languages encountered include Java, Javascript, OCaml, Scheme, C++,
										C and more. I also helped the students new to programming with setting up their
										environment, as this can be confusing to beginners.
									</p>
								</Media.Body>
							</Media>
						</Row>
					</section>
					<section>
						<span className="anchor" id="education"/>
						<PageHeader>Education</PageHeader>
						<span style={{display: "block", marginBottom: "10px"}}>
						MEng Computer Science <small style={{color: "#828282", marginLeft: "10px"}}>(2014-2019) University of Southampton</small>
					</span>
						<Row>
							<Col xs={12} md={6}>
								<div>
									<Table responsive striped>
										<thead>
										<tr>
											<th>Year</th>
											<th>Classification</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>Year 1</td>
											<td>First Class</td>
										</tr>
										<tr>
											<td>Year 2</td>
											<td>2:1</td>
										</tr>
										</tbody>
									</Table>
									<p>
										My time at uni has involved learning to work in teams using a number of
										technologies
										to find solutions to problems. I have completed a year in industry mid-way
										through
										my degree.
									</p>
								</div>
							</Col>
							<Col xs={12} md={6}>
								<Table responsive striped>
									<thead>
									<tr>
										<th>Module</th>
										<th>Score (%)</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>Programming I</td>
										<td>90</td>
									</tr>
									<tr>
										<td>Programming II</td>
										<td>83</td>
									</tr>
									<tr>
										<td>Data Management</td>
										<td>83</td>
									</tr>
									<tr>
										<td>Software Modelling & Design</td>
										<td>82</td>
									</tr>
									<tr>
										<td>Software Engineering Group Project</td>
										<td>80</td>
									</tr>
									</tbody>
								</Table>
							</Col>
						</Row>
						<span style={{display: "block", marginBottom: "10px"}}>
						A-Level/GCSE <small style={{color: "#828282", marginLeft: "10px"}}>(2007-2014) Westcliff High School for Boys</small>
					</span>
						<Row>
							<Col xs={12} md={6}>
								<Table responsive striped>
									<thead>
									<tr>
										<th>Subject</th>
										<th>Grade</th>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td>Computing</td>
										<td>A</td>
									</tr>
									<tr>
										<td>Maths</td>
										<td>A</td>
									</tr>
									<tr>
										<td>Physics</td>
										<td>C</td>
									</tr>
									<tr>
										<td>Geography</td>
										<td>B</td>
									</tr>
									</tbody>
								</Table>
							</Col>
							<Col xs={12} md={6}>
								<p>Achieved 13 GCSEs graded A*-C, with A* in Maths, Computing, and statistics.</p>
							</Col>
						</Row>
					</section>
				</Grid>
			</div>
		);
	}

}

class DonutChart extends Component {

	render() {

		const halfsize = (this.props.size * 0.5);
		const radius = halfsize - (this.props.strokewidth * 0.5);
		const circumference = 2 * Math.PI * radius;
		const strokeval = ((this.props.value * circumference) / 100);
		const dashval = (strokeval + ' ' + circumference);

		const trackstyle = {strokeWidth: this.props.strokewidth};
		const indicatorstyle = {
			strokeWidth: this.props.strokewidth,
			strokeDasharray: dashval,
			stroke: this.props.strokeColour
		};
		const rotateval = 'rotate(-90 ' + halfsize + ',' + halfsize + ')';

		return (
			<div style={{textAlign: "center", padding: "20px"}}>
                <span style={{
					marginBottom: "10px",
					display: "block",
					fontWeight: "600",
					color: this.props.strokeColour
				}}>{this.props.title}</span>
				<svg width={this.props.size} height={this.props.size} className="donutchart">
					<circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={trackstyle}
							className="donutchart-track"/>
					<circle r={radius} cx={halfsize} cy={halfsize} transform={rotateval} style={indicatorstyle}
							className="donutchart-indicator"/>
					<text className="donutchart-text" x={halfsize} y={halfsize + 7}
						  style={{textAnchor: 'middle', color: this.props.strokeColour}}>
						<tspan className="donutchart-text-val">{this.props.value}</tspan>
						<tspan className="donutchart-text-percent">%</tspan>
					</text>
				</svg>
			</div>
		);
	}
}

DonutChart.defaultProps = {
	value: 0,
	title: 'Completed',
	size: 156,
	strokewidth: 26,
	strokeColour: '#009688'
};

HomePage.propTypes = {};

export default HomePage;