import React, {useState} from "react"
import {HashLink} from 'react-router-hash-link';
import {Link as LinkScroll} from "react-scroll"
import {BrowserRouter, HashRouter} from "react-router-dom";
import {DesktopNavigationElement} from "./DesktopNavigationElement";

export const DesktopNavigation = () => {


	return (
		<header className="desktop-header">
			<HashRouter>
			<a href='/' className='desktop-logo'>
				<i className="fas fa-head-side-virus"/>
			</a>
			<nav className='desktop-navigation'>
				<ul className="desktop-navigation__list">
					<DesktopNavigationElement name='Home' duration={300} direction='home'/>
					<DesktopNavigationElement name='About' duration={300} direction='about'/>
					<DesktopNavigationElement name='Portfolio' duration={300} direction='portfolio'/>
					<DesktopNavigationElement name='Contact' duration={300} direction='contact'/>
				</ul>
			</nav>
			</HashRouter>
		</header>
	)
}