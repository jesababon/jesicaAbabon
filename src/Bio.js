import React, { Component } from "react";
import profilePic from "./images/profilePic.png";

class Bio extends Component {
	render() {
		return (
			<div className="App-bio">
				<img src={profilePic} className="profilePic" alt="myFace" />
				<div className="myBio">
					I’m a full stack web developer that loves finding simple
					solutions to complicated problems.
					<br />
					<br />
					My business operations experience has trained me in the arts of
					teamwork and adaptability.
					<br />
					<br />
					I am seeking opportunities to grow my skills and make new
					connections.
					<br />
					<br />
					When I'm not coding, I'm drawing, dining or walking my very good dog.
				</div>
				<div className="experience">
						<table>
							<tbody>
							<tr>
								<th>PROGRAMMING</th>
								<th>TOOLS</th>
							</tr>
							<tr>
								<td>HTML5</td>
								<td>GIT</td>
							</tr>
							<tr>
								<td>CSS3</td>
								<td>GITHUB</td>
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
								<td>Adobe Creative Suite
									<pre>
										<ul>
											<li>Illustrator</li>
											<li>Photoshop</li>
											<li>XD</li>
										</ul>
									</pre>
									</td>
							</tr>
							<tr>
								<td>API Integrations</td>
								<td>Jest Unit Testing</td>
							</tr>
							<tr>
								<td>postgreSQL</td>
								<td>Agile</td>
							</tr>
							<tr>
								<td>Visual Studio Code</td>
								<td>Sketch App</td>
							</tr>
							</tbody>
						</table>

				</div>
			</div>
		);
	}
}

export default Bio;
