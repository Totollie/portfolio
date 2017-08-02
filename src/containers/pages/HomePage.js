import React, {Component} from 'react';
import me from 'images/me.png';
import {Col, Grid, Image, Jumbotron, PageHeader, Row, Table} from "react-bootstrap";
import TextEntry from "../../components/textEntry/TextEntry";
import {Doughnut} from "react-chartjs-2";

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const javascript = {
            labels: ['Javascript', ''],
            datasets: [{
                data: [280, 80],
                backgroundColor: ['#FF6384', '#FFF'],
                hoverBackgroundColor: ['#FF6384', '#FFF']
            }]
        };

        return (
            <div className="document">
                <Grid>
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
                            <DonutChart value={50} title="Gradle" strokeColour="green"/>
                        </Col>
                        <Col xs={6} md={4}>
                            <DonutChart value={65} title="Webpack" strokeColour="orange"/>
                        </Col>
                        <Col xs={6} md={4}>
                            <DonutChart value={95} title="Git Flow" strokeColour="black"/>
                        </Col>
                    </Row>
                    <PageHeader>Education</PageHeader>
                    <span>MEng Computer Science <small style={{color: "#828282", marginLeft: "10px"}}>(2014-2019) University of Southampton</small></span>
                    <Row>
                        <Col xs={6}>
                            <Table responsive striped>
                                <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Average (%)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Year 1</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>Year 2</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>Year 3</td>
                                    <td>Table cell</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs={6}>
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
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>Programming II</td>
                                    <td>Table cell</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <span>A-Level/GCSE <small style={{color: "#828282", marginLeft: "10px"}}>(207-2014) Westcliff High School for Boys</small></span>
                    <Row>
                        <Col xs={6}>
                            <Table responsive striped>
                                <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Average (%)</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Year 1</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>Year 2</td>
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>Year 3</td>
                                    <td>Table cell</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs={6}>
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
                                    <td>Table cell</td>
                                </tr>
                                <tr>
                                    <td>Programming II</td>
                                    <td>Table cell</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <PageHeader>Sample Projects</PageHeader>
                    <Row>
                        <Col xs={12}>
                            tttttttttttttttttt
                        </Col>
                    </Row>
                    <PageHeader id="test">Language Proficiencies</PageHeader>
                    <Row>
                        <Col xs={12}>
                            tttttttttttttttttt
                        </Col>
                    </Row>
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