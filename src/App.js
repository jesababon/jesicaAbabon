import React, { Component } from "react";
// import logo from './logo.svg';
import profilePic from "./images/profilePic.png";
import twitter from "./images/twitter.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Jesica Ababon</h1>
					<h2>Full Stack Web Developer</h2>
				</header>
				<article className="App-bio">
					<div>
						<img src={profilePic} className="profilePic" alt="myFace" />
						<h5>
							Hi! I’m Jes, web developer that loves finding simple solutions to
							complicated problems.
						</h5>
						<h6>
							Experienced in HTML, CSS, Javascript (Node.js, Express.js,
							React.js), API integrations, and postgreSQL.
						</h6>
					</div>
				</article>
				<article className="App-apps">Some of My Apps</article>
				<div className="Contact-form">
					<form>
						<label>
								Name:
								<input type="text" name="name"/>
								Email:
								<input type="text" name="email"/>              
              	Subject:
								<input type="text" name="subject"/>
							  Message:
								<textarea name="message"/>

						<input type="submit" value="SUBMIT" className='formBtn'/
            >
            </label>
            

					</form>
				</div>
				<footer className="App-footer">
					<ul>
						<img src={linkedin} className="socialBtns" alt="linkedIn" />
						<img src={twitter} className="socialBtns" alt="twitter" />
						<img src={github} className="socialBtns" alt="github" />
					</ul>
				</footer>
			</div>
		);
	}
}

export default App;
