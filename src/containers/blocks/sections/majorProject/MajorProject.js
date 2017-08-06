import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Grid, Image, Jumbotron, Label, Row} from "react-bootstrap";
import TextEntry from "../../../../components/textEntry/TextEntry";

export default class MajorProject extends Component {
    render() {
        let {proj} = this.props;

        return (
            <section>
                <span className="anchor" id={proj.key}/>
                <Jumbotron bsClass="jumbotron banner">
                    <hr/>
                    <Grid bsClass="container projects">
                        <Col xs={12} md={4}>
                            <div className="centered-box">
                                <Image responsive src={"/images/" + proj.image}/>
                                <br/>
                                <div style={{textAlign: "center"}}>{proj.languages.map(lang => <Col xs={6} md={4}>
                                    <Label bsStyle="primary">{lang}</Label></Col>)}</div>
                            </div>
                        </Col>
                        <Col xs={12} md={8}>
                            <span style={{
                                display: "block",
                                textAlign: "center",
                                fontSize: "20px",
                                margin: "0"
                            }}>Project - {proj.name}<br/><small
                                style={{fontSize: "0.9em", color: "#999"}}>{proj.date}</small></span>
                            <div className="centered-box">
                                <TextEntry title={<span>{proj.header}</span>}>
                                    <p style={{textAlign: "center", fontSize: "20px", margin: "20px"}}>
                                        {proj.description}
                                    </p>
                                    <p>
                                        {proj.github.map(git => <a style={{margin: "0 3px"}} href={git} target="_blank">
                                            <i className="fa fa-2x fa-github-square"/></a>)}
                                    </p>
                                    <p>
                                        {proj.docs.map(doc => <a style={{margin: "0 3px"}} href={doc} target="_blank">
                                            <i className="fa fa-2x fa-file"/></a>)}
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

MajorProject.propTypes = {
    proj: PropTypes.object
};