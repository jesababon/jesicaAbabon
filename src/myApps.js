import React, { Component } from "react";
import fatalencounters from "./images/fatalencounters.gif";
import savvysapian from "./images/savvysapian.gif";
import maddash from "./images/maddash.gif";

class MyApps extends Component {
	render() {
		return (
            <div className="myApps">
            <div><img src={savvysapian} className="appImg" alt="savvysapian" /></div>

            <div><img src={fatalencounters} className="appImg" alt="fatalencounters" /></div>
            
            <div><img src={maddash} className="appImg" alt="madDash" /></div>
        
        </div>
		);
	}
}

export default MyApps;