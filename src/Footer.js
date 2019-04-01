import React, { Component } from "react";
import twitter from "./images/twitter.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";

class Footer extends Component {
	render() {
		return (
			<footer className="App-footer">

				<a href={`https://www.linkedin.com/in/jesababon/`} target="_blank" rel="noopener noreferrer">
				<img src={linkedin} className="socialBtns" alt="linkedin" />
				</a>

				<a href={`https://twitter.com/jesfeelit`} target="_blank" rel="noopener noreferrer">
				<img src={twitter} className="socialBtns" alt="twitter" />
				</a>

				<a href={`https://github.com/jesababon`} target="_blank" rel="noopener noreferrer">
				<img src={github} className="socialBtns" alt="github" />
				</a>
			</footer>
		);
	}
}

export default Footer;
