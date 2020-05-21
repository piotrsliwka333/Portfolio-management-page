import React, {useState} from "react"
import {HashLink} from 'react-router-hash-link';
import {Link as LinkScroll} from "react-scroll"
import {BrowserRouter} from "react-router-dom";

export const DesktopNavigation = () => {


	return (
		<header className="desktop-header">
			<BrowserRouter>
			<a href='/' className='desktop-logo'>
				<i className="fas fa-head-side-virus"/>
			</a>
			<nav className='desktop-navigation'>
				<ul className="desktop-navigation__list">
					<li><LinkScroll className="desktop-navigation__list-element"
					                 smooth={true} duration={500} to='home'>Home</LinkScroll></li>
					<li><LinkScroll className="desktop-navigation__list-element"
					                smooth={true} duration={1000} to='about'>About</LinkScroll></li>
					<li><LinkScroll className="desktop-navigation__list-element"
					                duration={1500} smooth={true} to='portfolio'>Portfolio</LinkScroll></li>
					<li><LinkScroll className="desktop-navigation__list-element"
					                duration={2000} smooth={true} to='contact'>Contact</LinkScroll></li>
				</ul>
			</nav>
			</BrowserRouter>
		</header>
	)
}