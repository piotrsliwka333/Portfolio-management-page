import React from "react";
import {Link as LinkScroll} from "react-scroll";

export const AboutFirstSection = () => {


	return(
		<section className="about-first" id='about'>
			<div className="photo-container">
				<figure className="photo-container-box">
					<img  className="photo__hero" src='../../../images/photo_hero.png'/>
				</figure>
			</div>
			<div className="about-first__frame">
				<h2 className="about-first__frame-title">I want become a</h2>
				<br/>
				<span className="about-first__frame-highlight">Front-end Developer</span>
				<div href="#" className='about-first__frame-box'>
					<LinkScroll to='about-second' duration={1000}
					            className="about-first__frame-box-arrow">
						<i className="fas fa-arrow-right"/>
					</LinkScroll>
				</div>
			</div>


		</section>
	)
}