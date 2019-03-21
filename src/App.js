import React, { Component } from "react";
// import logo from './logo.svg';
import Header from "./Header";
import MyApps from "./myApps";
import Bio from "./Bio";
import Contact from "./Contact";
import Footer from "./Footer";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Bio />
				<MyApps />
				<Contact />
				<Footer />
			</div>
		);
	}
}

export default App;
