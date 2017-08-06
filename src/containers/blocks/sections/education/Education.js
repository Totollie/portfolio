import React, {Component} from 'react';
import {Col, Grid, PageHeader, Row, Table} from "react-bootstrap";

export default class Education extends Component {
	render(){
		return (
			<section>
				<span className="anchor" id="education"/>
				<PageHeader>Education</PageHeader>
				<span style={{display: "block", marginBottom: "10px", fontWeight: "600"}}>
						MEng Computer Science <small style={{color: "#828282", marginLeft: "10px"}}>(2014-2019) University of Southampton</small>
					</span>
                <Grid bsClass="container projects">
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
								technologies to find solutions to problems. I have completed a year in industry
								mid-way through my degree.
							</p>
						</div>
					</Col>
				</Grid>
				<span style={{display: "block", marginBottom: "10px", fontWeight: "600"}}>
						A-Level/GCSE <small style={{color: "#828282", marginLeft: "10px"}}>(2007-2014) Westcliff High School for Boys</small>
					</span>
                <Grid bsClass="container projects">
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
						<p>Achieved 13 GCSEs graded A*-C, with A* in Maths, Computing, and Statistics.</p>
					</Col>
				</Grid>
			</section>
		)
	}
}