import React, {Component} from 'react';
import {Grid} from "react-bootstrap";
import Splash from "../blocks/sections/splash/Splash";
import AboutSplash from "../blocks/sections/aboutSplash/AboutSplash";
import TechnicalSkills from "../blocks/sections/technicalSkills/TechnicalSkills";
import Languages from "../blocks/sections/languages/Languages";
import Work from "../blocks/sections/work/Work";
import ExtraCurricular from "../blocks/sections/extraCurricular/ExtraCurricular";
import Education from "../blocks/sections/education/Education";
import ProjectSplash from "../blocks/sections/projectSplash/ProjectSplash";
import majorProjects from "../../../public/majorprojects.json";
import MajorProject from "../blocks/sections/majorProject/MajorProject";
import MinorProjects from "../blocks/sections/minorProjects/MinorProjects";

class HomePage extends Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div className="document">
				<Grid bsClass="container home">
					<Splash/>
					<AboutSplash/>
					<TechnicalSkills/>
					<Languages/>
					<Work/>
					<ExtraCurricular/>
					<Education/>
					<ProjectSplash/>
                    {majorProjects.map(proj => <MajorProject proj={proj}/>)}
                    <MinorProjects/>
				</Grid>
			</div>
		);
	}

}

HomePage.propTypes = {};

export default HomePage;