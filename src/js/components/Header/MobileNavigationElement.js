import React from "react";
import {Link as LinkScroll} from "react-scroll";

export const MobileNavigationElement = (props) => {
	const {openMenu,name,duration,direction} = props

	const checkFn = () => {
		if(typeof openMenu === 'function') {
			openMenu();
		}
	}

	return (
		<li><LinkScroll to={direction} smooth={true} duration={duration}
		                onClick={checkFn} className="mobile-navigation__list-element">{name}</LinkScroll></li>

	)
}