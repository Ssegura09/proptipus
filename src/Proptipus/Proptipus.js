import React from "react";
import "./Proptipus.css";
import ProptipusBackground from "../images/Proptipus.png";
import ProptipusLogo from "../images/ProptipusLogo.png";

// This is the state being imported in for cleanliness
import ProptipusState from "./ProptipusState"


import TentacleOne from "./Tentacles/TentacleOne";
import TentacleTwo from "./Tentacles/TentacleTwo";
import TentacleThree from "./Tentacles/TentacleThree";
import TentacleFour from "./Tentacles/TentacleFour";
import TentacleFive from "./Tentacles/TentacleFive";
import TentacleSix from "./Tentacles/TentacleSixth.js";
import TentacleSeven from "./Tentacles/TentacleSeven";
import TentacleEight from "./Tentacles/TentacleEight";
class Proptipus extends React.Component {
  state = ProptipusState

  addDat = () => {
    let newNum = this.state.magicNumber + 1
    this.setState({magicNumber: newNum})
  }

  subtractDat = () => {
    let newNum = this.state.magicNumber - 1
    this.setState({magicNumber: newNum})
  }

  render() {
    return (
      <div className="proptipus">
        <img className="logo" src={ProptipusLogo} alt="logo" />
        <img
          className="proptipus-image"
          src={ProptipusBackground}
          alt="background"
        />
        <TentacleOne punchline={this.state.punchline}/>
        <TentacleTwo favoriteFishGiOhCard={this.state.favoriteFishGiOhCard}/>
        <TentacleThree hatedFishGiOhCard={this.state.hatedFishGiOhCard}/>
        <TentacleFour friendsList={this.state.friendsList}/>
        <TentacleFive addDat={this.addDat} subtractDat={this.subtractDat}/>
        <TentacleSix magicNumber={this.state.magicNumber}/>
        <TentacleSeven/>
        <TentacleEight/>
      </div>
    );
  }
}

export default Proptipus;
