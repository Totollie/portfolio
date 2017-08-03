import React, {Component} from 'react';

class DonutChart extends Component {

	render() {

		const halfSize = (this.props.size * 0.5);
		const radius = halfSize - (this.props.strokeWidth * 0.5);
		const circumference = 2 * Math.PI * radius;
		const strokeVal = ((this.props.value * circumference) / 100);
		const dashVal = (strokeVal + ' ' + circumference);

		const trackStyle = {strokeWidth: this.props.strokeWidth};
		const indicatorStyle = {
			strokeWidth: this.props.strokeWidth,
			strokeDasharray: dashVal,
			stroke: this.props.strokeColour
		};
		const rotateVal = 'rotate(-90 ' + halfSize + ',' + halfSize + ')';

		return (
			<div style={{textAlign: "center", padding: "20px"}}>
                <span style={{
					marginBottom: "10px",
					display: "block",
					fontWeight: "600",
					color: this.props.strokeColour
				}}>{this.props.title}</span>
				<svg width={this.props.size} height={this.props.size} className="donutchart">
					<circle r={radius} cx={halfSize} cy={halfSize} transform={rotateVal} style={trackStyle}
							className="donutchart-track"/>
					<circle r={radius} cx={halfSize} cy={halfSize} transform={rotateVal} style={indicatorStyle}
							className="donutchart-indicator"/>
					<text className="donutchart-text" x={halfSize} y={halfSize + 7}
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
	strokeWidth: 26,
	strokeColour: '#009688'
};

export default DonutChart;