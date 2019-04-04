import React, { Component } from "react";

// import logo from './logo.svg';
import Header from "./Header";
import Social from "./Social";
import MyApps from "./myApps";
import Bio from "./Bio";
// import Contact from "./Contact";
import "./App.css";
import "../node_modules/modern-normalize/modern-normalize.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Social />
				<Bio />
				<MyApps />
				{/* <Contact /> */}
			</div>
		);
	}
}

export default App;
