import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather.js';
import Title from './components/Title.js';
import Form from './components/Form.js';
import Loader from './components/loader.js';

const API_KEY="c618103657993fa41e79c55e9ac19d25";


class App extends Component {

  state ={
    isFetching: false,
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather= async(e) =>{
    e.preventDefault();
    this.setState({isFetching: true})
    const city=e.target.elements.city.value
    const country=e.target.elements.country.value
    const api_call=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
    const data=await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: '',
        isFetching: false
      })
    }
    else {
        this.setState({
          error: "Please enter a city and country!",
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          isFetching: false
        })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                  <div className="col-xs-5 title-container">
                    <Title />
                  </div>
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>

                    <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
        {
				this.state.isFetching && <Loader />
			  }
      </div>
    );
  }
}

export default App;
