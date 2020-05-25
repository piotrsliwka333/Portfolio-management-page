import React from "react";
import {AboutSecondSliderElement} from "./AboutSecondSliderElement";

export const AboutSecondSlider = () => {

	return(
		<>
			<article className='technology-slider'>
				<ul className="technology-slider__content">
					<AboutSecondSliderElement name='SASS' svgClass='fab fa-sass'/>
					<AboutSecondSliderElement name='HTML 5' svgClass='fab fa-html5'/>
					<AboutSecondSliderElement name='CSS 3' svgClass='fab fa-css3-alt'/>
					<AboutSecondSliderElement name='React' svgClass='fab fa-react'/>
					<AboutSecondSliderElement name='JavaScrip ECMA6 +' svgClass='fab fa-js-square'/>
					<AboutSecondSliderElement name='Git Hub' svgClass='fab fa-github-square'/>
					<li className="technology-slider__content-element"><span>WebStorm</span></li>
					<li className="technology-slider__content-element"><span>WebPack</span></li>
				</ul>
			</article>
			<p className='technology-slider-description'>Here you can check technologies which I use</p>
		</>
	)
}