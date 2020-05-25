import React from "react";
import {Link as LinkScroll} from "react-scroll";
import hero from '../../../images/me.png'

export const AboutFirstSection = () => {

	return (
		<section className="about-first" id='about'>
			<div className="photo-container">
				<figure className="photo-container-box">
					<img className="photo__hero" alt='smiling young boy' src={hero}/>
				</figure>
			</div>
			<div className="about-first__frame">
				<h2 className="about-first__frame-title">I want become a</h2>
				<br/>
				<span className="about-first__frame-highlight">Front-end Developer</span>
				<LinkScroll to='about-second' className='about-first__frame-box'>
					<div className="about-first__frame-box-arrow">
						<span>
							<i className="fas fa-arrow-right"/>
						</span>
					</div>
				</LinkScroll>
			</div>


		</section>
	)
}