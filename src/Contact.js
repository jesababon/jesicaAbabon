import React, { Component } from "react";
import axios from "axios";


const API_PATH = 'http://localhost:3080/api/contact/';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			email: "",
			subject: "",
			message: "",
			mailSent: false,
			error: null
		};
	}

	handleFormSubmit(event) {
		event.preventDefault();
		console.log(this.state);
		axios({
			method: "post",
			url: `${API_PATH}`,
			headers: { "content-type": "application/json" },
			data: this.state
		}).then(result => {
				this.setState({
					mailSent: result.data.sent
				});
			}).catch(error => this.setState({ error: error.message }));
	}

	render() {
		return (
			<div className="Contact-form">
				<h3>Looking for a new friend? Send me a message:</h3>
				<form>
					<label>
						<div className="infoInput">
							<p>Name: </p>
							<input
								type="text"
								name="name"
								value={this.state.name}
								onChange={e => this.setState({ name: e.target.value })}
							/>
							<p>Email: </p>
							<input
								type="text"
								name="email"
								value={this.state.email}
								onChange={e => this.setState({ email: e.target.value })}
							/>
							<p>Subject: </p>
							<input
								type="text"
								name="subject"
								value={this.state.subject}
								onChange={e => this.setState({ subject: e.target.value })}
							/>
						</div>
						<div className="messageInput">
							<p>Message: </p>
							<textarea
								name="message"
								value={this.state.message}
								onChange={e => this.setState({ message: e.target.value })}
							/>
							<p>
								<input
									type="submit"
									value="SUBMIT"
									className="formBtn"
									onClick={e => this.handleFormSubmit(e)}
								/>
							</p>
						</div>
					</label>
					<div>
						{this.state.mailSent && <div>Thank you for contacting me.</div>}
					</div>
				</form>
			</div>
		);
	}
}

export default Contact;
