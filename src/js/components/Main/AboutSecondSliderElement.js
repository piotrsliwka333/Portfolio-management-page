import React from "react";

export const AboutSecondSliderElement = (props) => {
	const {name,svgClass} = props

	return(
		<li className="technology-slider__content-element">
			<a>
				<i className={svgClass}/>
			</a>
			<span>{name}</span>
		</li>
	)

}