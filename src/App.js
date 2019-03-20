import React, { Component } from "react";
// import logo from './logo.svg';
import profilePic from "./images/profilePic.png";
import twitter from "./images/twitter.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import fatalencounters from "./images/fatalencounters.gif";
import savvysapian from "./images/savvysapian.gif";
import maddash from "./images/maddash.gif";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>JESICA ABABON</h1>
					<h2>Full Stack Web Developer</h2>
				</header>
					<article className="App-bio">
						<div>
							<img src={profilePic} className="profilePic" alt="myFace" />
							<div className="myBio">
							<h5>
								Hi! I’m Jes, a web developer that loves finding simple solutions
								to complicated problems.
								<br />
								<br />
								Experienced in HTML, CSS, JavaScript (Node.js, Express.js,
								React.js), API integrations, and postgreSQL.
							</h5>
							</div>
						</div>
					</article>
					<article className="App-apps">
						<div><img src={savvysapian} className="savvySapian" alt="savvysapian" /></div>

						<div><img src={fatalencounters} className="fatalEncounters" alt="fatalencounters" /></div>
						
						<div><img src={maddash} className="madDash" alt="madDash" /></div>
					
					</article>
					<div className="Contact-form">
						<h3>Want to contact me?</h3>
						<form>
							<label>
								<div className='infoInput'>
								<p>Name: </p>
								<input type="text" name="name"/>
								<p>Email: </p>
								<input type="text" name="email" />
								<p>Subject: </p>
								<input type="text" name="subject"/>
								</div>
								<div className='messageInput'>
								<p>Message: </p>
								<textarea name="message" />
								<p>
								<input type="submit" value="SUBMIT" className="formBtn" /></p>
								</div>
							</label>
						</form>
					</div>

				<footer className="App-footer">
					
						<img src={linkedin} className="socialBtns" alt="linkedIn" />
						<img src={twitter} className="socialBtns" alt="twitter" />
						<img src={github} className="socialBtns" alt="github" />
					
				</footer>
			</div>
		);
	}
}

export default App;
