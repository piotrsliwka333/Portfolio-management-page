import React, {useState} from "react"
import {HashLink} from 'react-router-hash-link';
import {Link as LinkScroll} from "react-scroll"
import {MobileNavigationElement} from "./MobileNavigationElement";
import {HashRouter, Link} from "react-router-dom";
export const MobileNavigation = () => {
	const [menuOpen,setMenuOpen] = useState(false)
	const [animationBegin,setAnimationBegin] = useState(false)

	const handleOpenMenu = () => {
		setAnimationBegin(true)
		if(!menuOpen) {
			setMenuOpen(true)
		} else {
			setMenuOpen(false)
		}
	}


	const style = { //here we switch animation of smooth hide or smooth show
		animationName: animationBegin ?  menuOpen ? 'slideShow' : 'slideHide' : ''
	}

	return (
		<header className="mobile-header">
				<a href={'/'} className='mobile-logo'>
					<i className="fas fa-head-side-virus"/>
				</a>
				<div onClick={handleOpenMenu} className={ menuOpen ? 'hamburger-container open' : 'hamburger-container'}>
					<div className="hamburger"/>
				</div>
				<nav style={style} className={'mobile-navigation'}>
					<ul className="mobile-navigation__list">
						<MobileNavigationElement name='Home' duration={300} openMenu={handleOpenMenu} direction='home'/>
						<MobileNavigationElement name='About' duration={300} openMenu={handleOpenMenu} direction='about'/>
						<MobileNavigationElement name='Portfolio' duration={300} openMenu={handleOpenMenu} direction='portfolio'/>
						<MobileNavigationElement name='Contact' duration={300} openMenu={handleOpenMenu} direction='contact'/>
					</ul>
				</nav>
		</header>
	)
}