import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Image, Jumbotron, Label, Row} from "react-bootstrap";
import TextEntry from "../../../../components/textEntry/TextEntry";

export default class MajorProject extends Component {
    render() {
        let {proj} = this.props;

        return (
            <section>
                <span className="anchor" id={"major-project-" + proj.key}/>
                <Jumbotron bsClass="jumbotron banner">
                    <hr/>
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="centered-box">
                                <Image responsive src={"/images/" + proj.image}/>
                                <Row>{proj.languages.map(lang => <Label bsStyle="primary">{lang}</Label>)}</Row>
                            </div>
                        </Col>
                        <Col xs={12} md={8}>
                            <span style={{
                                display: "block",
                                textAlign: "center",
                                fontSize: "20px",
                                margin: "0"
                            }}>Project - {proj.name}</span>
                            <div className="centered-box">
                                <TextEntry title={<span>{proj.header}&nbsp;
                                    <small>{proj.date}</small></span>}>
                                    <p style={{textAlign: "center", fontSize: "20px", margin: "20px"}}>
                                        {proj.description}
                                    </p>
                                    <p>
                                        <a href={proj.github} target="_blank"><i className="fa fa-3x fa-github-square"/></a>
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

MajorProject.propTypes = {
    proj: PropTypes.object
};