import React, { Component } from "react";
import profilePic from "./images/profilePic.png";

class Bio extends Component {
	render() {
		return (
			<div className="App-bio">
				<img src={profilePic} className="profilePic" alt="myFace" />
				<div className="myBio">
					Hi! I’m Jes, a full stack web developer that loves finding simple
					solutions to complicated problems.
					<br />
					My business operations experience has trained me in the arts of
					teamwork, perserverance and adaptability.
					<br />
					I am always searching for opportunities to grow my skills and make new
					connections. I am fascinated by the intersection of art, culture and
					technology.
					<br />
					When I'm not coding, I'm drawing, dining or walking my dog.
				</div>
				<div className="experience">
					HTML/CSS
					<br />
					CSS
					<br />
					JavaScript (Node.js, Express.js, React.js)
					<br />
					API integrations
					<br />
					postgreSQL
				</div>
			</div>
		);
	}
}

export default Bio;
