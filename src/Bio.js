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
					teamwork and adaptability.
					<br />
					I am always searching for opportunities to grow my skills and make new
					connections. I am fascinated by the intersection of culture and
					technology.
					<br />
					When I'm not coding, I'm drawing, dining or walking my dog.
				</div>
				<div className="experience">
						<table>
							<tr>
								<th>PROGRAMMING</th>
								<th>OTHER</th>
							</tr>
							<tr>
								<td>HTML5</td>
								<td>AGILE</td>
							</tr>
							<tr>
								<td>CSS3</td>
								<td>GIT Version Control</td>
							</tr>
							<tr>
								<td>
									JavaScript
									<pre>
										<ul>
											<li>Node.js</li>
											<li>Express.js</li>
											<li>React.js</li>
										</ul>
									</pre>
								</td>
								<td>Adobe Creative Suite</td>
							</tr>
							<tr>
								<td>API Integrations</td>
								<td>GITHUB</td>
							</tr>
							<tr>
								<td>postgreSQL</td>
								<td>Sketch App</td>
							</tr>
						</table>

				</div>
			</div>
		);
	}
}

export default Bio;
