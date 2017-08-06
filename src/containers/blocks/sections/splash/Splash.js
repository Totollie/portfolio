import React, {Component} from 'react';
import {Col, Grid, Image, Jumbotron, Row} from "react-bootstrap";
import TextEntry from "../../../../components/textEntry/TextEntry";
import me from '../../../../../public/images/me.png';

export default class Splash extends Component {
    render() {
        return (
            <section style={{minHeight: "100vh", display: "flex", justifyContent: "center"}}>
                <span className="anchor exact" id="home"/>
                <Jumbotron bsClass="jumbotron banner">
                    <hr/>
                    <Grid bsClass="container projects">
                        <Col xs={12} md={4}>
                            <div className="centered-box">
                                <Image src={me} circle responsive/>
                            </div>
                        </Col>
                        <Col xs={12} md={8}>
                            <div className="centered-box">
                                <TextEntry title={"Oliver Hayes"}>
                                    <p className="orange"
                                       style={{textAlign: "center", fontSize: "2rem", margin: "20px"}}>
                                        Full stack Developer
                                        <br/><a style={{display: "block", fontSize: "2rem", margin: "10px"}}
                                                href="#about">Go >></a>
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