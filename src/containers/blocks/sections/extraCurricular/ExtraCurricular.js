import React, {Component} from 'react';
import {Media, PageHeader, Row} from "react-bootstrap";
import ecss from '../../../../../public/images/ecss-logo.png';
import fot from '../../../../../public/images/fot.jpg';
import uf from '../../../../../public/images/uf.png';

export default class ExtraCurricular extends Component {
	render(){
		return (
			<section>
				<span className="anchor" id="extra-curricular"/>
				<PageHeader>Other Skills and Experiences</PageHeader>
				<Row>
					<Media>
						<Media.Left>
							<img width={64} src={fot} alt="Image"/>
						</Media.Left>
						<Media.Body>
							<Media.Heading>
								<span style={{display: "block"}}>Co-President - Fish on Toast</span>
								&nbsp;
								<small>
									(June 2017 - June 2018)
								</small>
							</Media.Heading>
							<span style={{fontWeight: "600", display: "block", marginBottom: "5px"}}>
										Providing the principle leadership and responsibility for the organisation and
                                        the Committee.
									</span>
							Gaining experience in developing relations for the benefit of the society, both
							externally and internally. This involves regular networking and attendance at public
							forums. It also involves a great deal of public speaking and long term organisation.
						</Media.Body>
					</Media>
				</Row>
				<Row>
					<Media>
						<Media.Left>
							<img width={64} src={ecss} alt="Image"/>
						</Media.Left>
						<Media.Body>
							<Media.Heading>
								<span style={{display: "block"}}>Vice-President - Electronics and Computer Science Society</span>
								&nbsp;
								<small>
									(June 2016 - June 2017)
								</small>
							</Media.Heading>
							<span style={{fontWeight: "600", display: "block", marginBottom: "5px"}}>
										Assisted the president in admin tasks and representing the society at faculty and Union Southampton society events.
									</span>
							Involved in the planning and organisation of one of the largest academic societies
							at the university. Took a leading role in the induction of over 300 new students
							during 2016, and organised the department student social over the holiday season,
							which had over 1000 attendees and ran smoothly.
						</Media.Body>
					</Media>
				</Row>
				<Row>
					<Media>
						<Media.Left>
							<img width={64} src={uf} alt="Image"/>
						</Media.Left>
						<Media.Body>
							<Media.Heading>
								<span style={{display: "block"}}>Secretary - Union Films</span>
								&nbsp;
								<small>
									(June 2016 - June 2017)
								</small>
							</Media.Heading>
							<span style={{fontWeight: "600", display: "block", marginBottom: "5px"}}>
										The key link between the committee and students through replying to queries and
                                        liasing between all our departments.
									</span>
							Responsible for organising committee meetings and taking minutes. I also organise
							society screenings, a weekly opportunity for other student groups to put on a film
							or show at the cinema.
						</Media.Body>
					</Media>
				</Row>
			</section>
		)
	}
}