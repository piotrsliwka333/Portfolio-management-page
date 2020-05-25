import React from "react";
import {Link as LinkScroll} from "react-scroll";

export const DesktopNavigationElement = (props) => {
	const{name,duration,direction} = props

	return (
		<li><LinkScroll className="desktop-navigation__list-element"
		                smooth={true} duration={duration} to={direction}>{name}</LinkScroll></li>
	)
}