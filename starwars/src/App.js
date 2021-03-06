import React, { Component } from "react";
import "./App.css";
import CharList from "./components/CharList.js";
import DataView from "./components/DataView.js";

document.getElementById("viewport");

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      selected: [{name: 'nobody'}]
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleClick = (name) => {
    this.setState(currentState => {
      return {
        selected: currentState.starwarsChars.filter(character => 
          character.name === name)}})}


  render() {
    return (
      <div className="App">
        <h1 className="Header">Reacttt Wars</h1>
        <div className="MainContent">
          <div className='listdiv'>
          <CharList
            swList={this.state.starwarsChars}
            onClick={this.handleClick}
          />
          </div>
          <div className='datadiv'>
          <DataView 
            selected={this.state.selected[0]}/>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
