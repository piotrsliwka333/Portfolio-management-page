import React, {useState} from "react"
import {HashLink} from 'react-router-hash-link';

export const MobileNavigation = () => {
	const [menuOpen,setMenuOpen] = useState(false)

	const handleOpenMenu = () => {
		if(!menuOpen) {
			setMenuOpen(true)
		} else {
			setMenuOpen(false)
		}
	}


	const style = { //here we switch animation of smooth hide or smooth show
		animationName: menuOpen ? 'slideShow' : 'slideHide'
	}

	return (
		<header className="mobile-header">
			<a href='/' className='mobile-logo'>
				<i className="fas fa-head-side-virus"/>
			</a>
			<div onClick={handleOpenMenu} className={ menuOpen ? 'hamburger-container open' : 'hamburger-container'}>
				<div className="hamburger"/>
			</div>
			<nav style={style} className={'mobile-navigation'}>
				<ul className="mobile-navigation__list">
					<li><a onClick={handleOpenMenu} className="mobile-navigation__list-element">Home</a></li>
					<li><a onClick={handleOpenMenu} className="mobile-navigation__list-element">About</a></li>
					<li><a onClick={handleOpenMenu} className="mobile-navigation__list-element">Portfolio</a></li>
					<li><a onClick={handleOpenMenu} className="mobile-navigation__list-element">Contact</a></li>
				</ul>
			</nav>
		</header>
	)
}