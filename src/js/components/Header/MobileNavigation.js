import React, {useState} from "react"
import {HashLink} from 'react-router-hash-link';
import {Link as LinkScroll} from "react-scroll"
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
					<li><LinkScroll to='home' onClick={handleOpenMenu} className="mobile-navigation__list-element">Home</LinkScroll></li>
					<li><LinkScroll to='about' smooth={true} duration={300} onClick={handleOpenMenu} className="mobile-navigation__list-element">About</LinkScroll></li>
					<li><LinkScroll to='portfolio' smooth={true} duration={300} onClick={handleOpenMenu} className="mobile-navigation__list-element">Portfolio</LinkScroll></li>
					<li><LinkScroll to='contact' smooth={true} duration={300} onClick={handleOpenMenu} className="mobile-navigation__list-element">Contact</LinkScroll></li>
				</ul>
			</nav>
		</header>
	)
}