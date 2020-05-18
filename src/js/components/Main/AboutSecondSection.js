import React from "react";

export const AboutSecondSection = () => {

//I repeated 4 options at the end coz then we don't have to use js logic
	//coz at one time wi display 4 elements so we jus need to display it at the end
	//and then we can set infinite animation-iteration-count
	// (are site work faster so it is worth to do it)
	return (
		<section className="about-second">
			<div className='technology-slider'>
				<ul className="technology-slider__content">
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-sass"/>
						</a>
						<span>SASS</span>
					</li>
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-html5"/>
						</a>
						<span>HTML 5</span>
					</li>
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-css3-alt"/>
						</a>
						<span>CSS 3</span>
					</li>
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-react"/>
						</a>
						<span>React</span>
					</li>
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-js-square"/>
						</a>
						<span>JavaScrip ECMA6 +</span>
					</li>
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-github-square"/>
						</a>
						<span>Git Hub</span>
					</li>
					<li className="technology-slider__content-element"><span>WebStorm</span></li>
					<li className="technology-slider__content-element"><span>WebPack</span></li>
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-sass"/>
						</a>
						<span>SASS</span>
					</li>
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-html5"/>
						</a>
						<span>HTML 5</span>
					</li>
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-css3-alt"/>
						</a>
						<span>CSS 3</span>
					</li>
					<li className="technology-slider__content-element">
						<a>
							<i className="fab fa-react"/>
						</a>
						<span>React</span>
					</li>
				</ul>

				<p className="information">


				</p>
			</div>
		</section>
	)
}