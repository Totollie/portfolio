import React, {Component} from 'react';

import './Page.scss';
import NavigationBar from "../blocks/navigationbar/NavigationBar";

class Page extends Component {

	render() {
		return (
			<div className="page">
                <NavigationBar/>
				{this.props.children}
			</div>
		);
	}

}

export default Page;
