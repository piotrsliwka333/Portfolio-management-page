import '../sass/main.scss'
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {LoadingScreen} from "./components/LoadingScreen/LoadingScreen";
import {MobileNavigation} from "./components/Header/MobileNavigation";
import {Navigation} from "./components/Header/Navigation";

const App = () => {
	return (
		<Navigation/>
	)
}


ReactDOM.render(
	<App/>,
	document.getElementById('app')
)
