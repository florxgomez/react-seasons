import React from "react";
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        textDisplay: "Let's hit the beach!",
        iconName : 'sun'
    },
    winter: {
        textDisplay: "Burr it's cold!",
        iconName : 'snowflake'
    },
    spring: {
        textDisplay: 'Look a those lovely flowers',
        iconName: 'certificate'

    },
    autumn: {
        textDisplay: 'Leaves everywhere',
        iconName: 'leaf'
    }
};

const getSeason = (lat, month) => {
  if (month > 1 && month < 5) {
    return lat < 0 ? "autumn" : "spring";
  } else if (month > 4 && month < 8) {
    return lat < 0 ? "winter" : "summer";
  } else if (month > 7 && month < 11){
      return lat < 0 ? 'spring' : 'autumn'
  } else if((month >= 0 && month < 2) || month === 11){
      return lat < 0 ? 'summer' : 'winter'
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {textDisplay, iconName } = seasonConfig[season];
  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon huge icon-left`} />
      <h1>{textDisplay}</h1>
      <i className={`${iconName} icon huge icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
