import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class NamePage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Greetings, traveler! What is your name?
          <br />
          <input
            type="text"
            value={this.props.data.name}
            onChange={event =>
              this.props.setStateFunction("name", event.target.value)
            }
          />
        </p>
        <button onClick={() => this.props.goFunction(StartPage)}>
          Continue...
        </button>
      </div>
    );
  }
}

class StartPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome, {this.props.data.name}! How would you like to get to your
          destination?
        </p>
        <button onClick={() => this.props.goFunction(TrainPage)}>Train</button>
        <button onClick={() => this.props.goFunction(ShipPage)}>Ship</button>
      </div>
    );
  }
}

class TrainPage extends Component {
  render() {
    return (
      <div className="page">
        <p>
          Welcome aboard the choo-choo train! Please make your way to your seat.
          What is the number?
        </p>
        <input
          type="text"
          value={this.props.data.seat}
          onChange={event =>
            this.props.setStateFunction("seat", event.target.value)
          }
        />
        <button onClick={() => this.props.goFunction(TrainSeatPage)}>
          Give Ticket...
        </button>
      </div>
    );
  }
}

class TrainSeatPage extends Component {
  constructor() {
    super();
    this.state = { sheepCounted: 0 };
  }

  countSheep() {
    if (this.state.sheepCounted >= 9) {
      this.props.goFunction(dreamPage);
    } else {
      this.setState(state => ({ sheepCounted: state.sheepCounted + 1 }));
    }
  }

  render() {
    return (
      <div className="page">
        <p>You are now sitting on the train...staring out the window...</p>
        <p>{this.state.sheepCounted}</p>
        <button onClick={() => this.countSheep()}>Count Sheep</button>
      </div>
    );
  }
}

//Weather api
class dreamPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // weather: this.getWeather(),
      weather: fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=san%20francisco&appid=417d2f8384501a69a2860d18e4c21822"
      )
        .then(resp => resp.json())
        .then(function(data) {
          console.log(data);
          console.log(data.main.temp);
          if (data.main.temp > 200) {
            console.log("supposed to be warm");
            // this.props.setStateFunction('weather', 'warm');
            return "warm";
          } else {
            // this.props.setStateFunction('weather', 'cold');
            return "cold";
          }
        })
        .catch(function(error) {
          console.log("Couldn't fetch api");
          console.log(this.state.weather);
        })
    };
  }

  getWeather() {
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=san%20francisco&appid=417d2f8384501a69a2860d18e4c21822";
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(function(data) {
        console.log(data);
        console.log(data.main.temp);
        if (data.main.temp > 200) {
          console.log("supposed to be warm");
          this.props.setStateFunction("weather", "warm");
          // return 'warm';
        } else {
          // this.props.setStateFunction('weather', 'cold');
          return "cold";
        }
      })
      .catch(function(error) {
        console.log("Couldn't fetch api");
        console.log(this.state.weather);
      });
  }

  render() {
    return (
      <p>
        You look around and realize your alone, and {this.props.data.weather}.
      </p>
    );
  }
}

class ShipPage extends Component {
  constructor() {
    super();
    this.state = { seatPicked: "Port" };
  }

  render() {
    return (
      <div className="page">
        <p>Welcome aboard matie, where would you like to sit?</p>
        {/* <select value={this.props.data.seat} onChange={this.props.setStateFunction(“seat”, event.target.value)}> */}
        {/* <select value={this.props.seatPicked} onChange={this.props.setState('seatPicked', this.seatPicked)}> */}
        <select
          onChange={event =>
            this.props.setStateFunction("seatPicked", event.target.value)
          }
        >
          <option value="Port">Seat 12</option>
          <option value="Bow">Seat 13</option>
          <option value="Stern">Seat 14</option>
        </select>
        <button
          onClick={() =>
            this.props.setStateFunction("seatPicked", this.state.seatPicked)
          }
        >
          Sit down
        </button>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageClass: NamePage
    };
  }

  goToPage(pageClass) {
    this.setState({
      pageClass: pageClass
    });
  }

  render() {
    var app = this;

    function setState(key, value) {
      let newState = {};
      newState[key] = value;
      app.setState(newState);
    }

    function goFunction(pageClass) {
      app.goToPage(pageClass);
    }

    return (
      <div className="App">
        <this.state.pageClass
          data={this.state}
          setStateFunction={setState}
          goFunction={goFunction}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
