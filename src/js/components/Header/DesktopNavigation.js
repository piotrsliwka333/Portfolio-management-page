import React, {useState} from "react"
import {HashLink} from 'react-router-hash-link';

export const DesktopNavigation = () => {


	return (
		<header className="desktop-header">
			<a href='/' className='desktop-logo'>
				<i className="fas fa-head-side-virus"/>
			</a>
			<nav className='desktop-navigation'>
				<ul className="desktop-navigation__list">
					<li><a className="desktop-navigation__list-element">Home</a></li>
					<li><a className="desktop-navigation__list-element">About</a></li>
					<li><a className="desktop-navigation__list-element">Portfolio</a></li>
					<li><a className="desktop-navigation__list-element">Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}