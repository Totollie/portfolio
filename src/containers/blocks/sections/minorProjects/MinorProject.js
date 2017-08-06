import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Image, Jumbotron, Label, Row, Well} from "react-bootstrap";
import TextEntry from "../../../../components/textEntry/TextEntry";

export default class MajorProject extends Component {
    render() {
        let {proj} = this.props;

        return (
            <Well>
                <div className="minor-project">
                                        <span style={{
                                            display: "block",
                                            textAlign: "center",
                                            fontSize: "16px",
                                            margin: "0"
                                        }}>Project - {proj.name}<br/><small
                                            style={{fontSize: "0.9em", color: "#999"}}>{proj.date}</small></span>
                    <span className="anchor" id={proj.key}/>
                    <Image responsive src={"/images/" + proj.image}/>
                    <div className="centered-box">
                        <TextEntry>
                            <p style={{textAlign: "center", margin: "20px"}}>
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
                </div>
            </Well>
        )
    }
}

MajorProject.propTypes = {
    proj: PropTypes.object
};