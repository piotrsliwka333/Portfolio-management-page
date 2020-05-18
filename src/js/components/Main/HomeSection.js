import React from "react";


export const HomeSection = () => {


	return (
		<section className="home" id="home">
			<div className="stars"/>
			<div className="stars2"/>
			<div className="home-text-container">
				<h1 className="home-title">Hi, My name is <span className="contrast">Piotr Śliwka</span></h1>
				<div className='home-box'>
					<p className="home-text">and...</p>
					<a href="#about" className="home-arrow">
						<i className="fas fa-arrow-right"/>
					</a>
				</div>
			</div>
		</section>
	)
}