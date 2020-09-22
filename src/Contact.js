import React, { Component } from "react";
import axios from "axios";


const API_PATH = 'https://localhost:3080/api/contact/';

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
				<text>I am seeking opportunities to grow my skills.
					<br />
					<br />
					Feel free to contact me:
				</text>
				<form>
						<div className="infoInput">
							<label>
							Name: 
							<input
							type="text"
								name="name"
								value={this.state.name}
								onChange={e => this.setState({ name: e.target.value })}
							/>
							</label>
							<label>
							E-mail: 
							<input
							type="text"
								name="email"
								value={this.state.email}
								onChange={e => this.setState({ email: e.target.value })}
							/>
							</label>
						
						<div className="messageInput">
						<label>
							Subject: 
							<input
							type="text"
								name="subject"
								placeholder="visited jesababon.com"
								value={this.state.subject}
								onChange={e => this.setState({ subject: e.target.value })}
							/>
							</label>

							<label>
							<textarea
								name="message"
								placeholder="Type message here."
								value={this.state.message}
								onChange={e => this.setState({ message: e.target.value })}
							/>
							
							<br />
								<input
									type="submit"
									value="SUBMIT"
									className="formBtn"
									onClick={e => this.handleFormSubmit(e)}
								/>
							</label> 
						</div>
						</div>
					<div>
						{this.state.mailSent && <div>Thank you for contacting me.</div>}
					</div>
				</form>
			</div>
		);
	}
}

export default Contact;
