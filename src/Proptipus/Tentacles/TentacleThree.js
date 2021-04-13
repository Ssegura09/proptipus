import React from "react";
import tempImg from "../../images/SadFish.jpeg"

function TentacleThree({hatedFishGiOhCard}){

    return (
      <div className="tentacle-three">
      <span className="fish-name">
          {hatedFishGiOhCard.name}
        </span>

        <img alt="fish" className="fish-image" 
        src={hatedFishGiOhCard.image} 
        />

        <span className="fish-type">
          {hatedFishGiOhCard.type}
        </span>

        <span className="fish-description">
          {hatedFishGiOhCard.description}
        </span>

        <span className="fish-attack">
          {hatedFishGiOhCard.attack}
        </span>
      </div>
    );
}

export default TentacleThree;
