import React, {Component} from 'react';
import {Media, PageHeader, Row} from "react-bootstrap";
import seyahlogo from '../../../../../public/images/seyahlogo.png';
import itinnov from '../../../../../public/images/itInnov.png';
import sotonuni from '../../../../../public/images/sotonuni.png';

export default class Work extends Component {
	render(){
		return (
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
									SEYAH Freelancing (May 2011 - Ongoing)
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
		)
	}
}