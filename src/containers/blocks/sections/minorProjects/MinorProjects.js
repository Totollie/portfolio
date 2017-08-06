import React, {Component} from 'react';
import {Col, Grid, PageHeader, Row} from "react-bootstrap";
import minorProjects from "../../../../../public/minorprojects.json";
import MinorProject from "./MinorProject";

export default class MinorProjects extends Component {
    render() {
        return (
            <section>
                <span className="anchor" id="minor-projects"/>
                <PageHeader>Projects</PageHeader>
                <Grid bsClass="container projects">
                {minorProjects.map(minorProject => <Col xs={12} md={6}><MinorProject proj={minorProject}/></Col>)}
                </Grid>
            </section>
        )
    }
}