import React, { Component } from "react";
import twitter from "./images/twitter.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";

class Footer extends Component {
	render() {
		return (
			<footer className="App-footer">
				<img src={linkedin} className="socialBtns" alt="linkedIn" />
				<img src={twitter} className="socialBtns" alt="twitter" />
				<img src={github} className="socialBtns" alt="github" />
			</footer>
		);
	}
}

export default Footer;
