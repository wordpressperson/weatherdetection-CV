import React, { Component } from 'react';

class Weather extends Component {


	render() {


		//<p style={{display: this.props.city ? "black" :"none"}}>Location: {this.props.city}, {this.props.country}</p>
		//{this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}

		return(
			<div>
				{this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
				{this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
				{this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
				{this.props.description && <p>Description: {this.props.description}</p>}
				{this.props.error && <p>{this.props.error}</p>}
			</div>
			)
	}
}

export default Weather;
