import React, { Component } from 'react';

class Form extends Component {
	render() {
		return(
			<div>
			<form onSubmit={this.props.getWeather}>
				<input type="text" name="city" placeholder="enter a city" />
				<input type="text" name="country" placeholder="enter a country" />
				<input type="submit" value="Get Weather" />
			</form>
			</div>
			)
	}
}

export default Form;
