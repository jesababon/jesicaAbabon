import React, { Component } from "react";

class Contact extends Component {
	render() {
		return (
			<div className="Contact-form">
				<h3>Looking for a new friend? Send me a message:</h3>
				<form>
					<label>
						<div className="infoInput">
							<p>Name: </p>
							<input type="text" name="name" />
							<p>Email: </p>
							<input type="text" name="email" />
							<p>Subject: </p>
							<input type="text" name="subject" />
						</div>
						<div className="messageInput">
							<p>Message: </p>
							<textarea name="message" />
							<p>
								<input type="submit" value="SUBMIT" className="formBtn" />
							</p>
						</div>
					</label>
				</form>
			</div>
		);
	}
}

export default Contact;
