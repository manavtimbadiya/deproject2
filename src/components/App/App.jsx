import React from "react";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
// import Connecting from "../Connecting/Connecting";
// import Connected from "../Connected/Connected";

const App = () => {
	 {
		return (
		<div clasaName="app">
		 <BrowserRouter>
			{/* Nav Bar */}
			{<Nav />}
			 {/* Connecting Page */}
		
			 {/*Landing Page */}
			<Route path="/" exact component={Landing}/>
		 </BrowserRouter>
		</div>
		);
	}
}

export default App;