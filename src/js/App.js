import '../sass/main.scss'
import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {LoadingScreen} from "./components/LoadingScreen/LoadingScreen";
import {MobileNavigation} from "./components/Header/MobileNavigation";
import {Navigation} from "./components/Header/Navigation";
import {HomeSection} from "./components/Main/HomeSection";
import {Main} from "./components/Main/Main";



const App = () => {
	const [dataLoading,setDataLoading] = useState(true)

	useEffect(() => {
		const timeOut = setTimeout(()=> {
			setDataLoading(false)
		},3000)
	},[])

	return (
		<>
			{dataLoading ? <LoadingScreen/> : (
				<>
					<Navigation/>
					<Main/>
				</>
			)}
		</>
	)
}


ReactDOM.render(
	<App/>,
	document.getElementById('app')
)
