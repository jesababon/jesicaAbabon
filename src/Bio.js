import React, { Component } from "react";
import profilePic from "./images/profilePic.png";

class Bio extends Component {
	render() {
		return (
            <div className="App-bio">
            <div>
                <img src={profilePic} className="profilePic" alt="myFace" />
                <div className="myBio">
                
                    Hi! I’m Jes, a web developer that loves finding simple solutions
                    to complicated problems.
                    <br />
                    <br />
                    Experienced in HTML, CSS, JavaScript (Node.js, Express.js,
                    React.js), API integrations, and postgreSQL.
                
                </div>
            </div>
        </div>
		);
	}
}

export default Bio;