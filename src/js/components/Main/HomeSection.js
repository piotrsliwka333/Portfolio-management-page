import React from "react";
import {Link as LinkScroll} from "react-scroll"

export const HomeSection = () => {


	return (
		<section className="home" id="home">
			<div className="stars"/>
			<div className="stars2"/>
			<div className="home-text-container">
				<h1 className="home-title">Hi, My name is <span className="contrast">Piotr Śliwka</span></h1>
				<LinkScroll to='portfolio' className='home-box'>
					<p className="home-text">and...</p>
					<div className='home-arrow'>
						<span>
							<i className="fas fa-arrow-right"/>
						</span>
					</div>
				</LinkScroll>
			</div>
		</section>
	)
}