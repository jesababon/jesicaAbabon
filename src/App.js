import React, { Component } from "react";

// import logo from './logo.svg';
import Header from "./Header";
import MyApps from "./myApps";
import Bio from "./Bio";
import Footer from "./Footer";
// import Contact from "./Contact";
import "./App.css";
import "../node_modules/modern-normalize/modern-normalize.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Bio />
				<MyApps />
				<Footer />
				{/* <Contact /> */}
			</div>
		);
	}
}

export default App;
