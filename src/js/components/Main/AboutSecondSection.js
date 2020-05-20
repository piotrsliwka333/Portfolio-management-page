import React from "react";
import {Link as LinkScroll} from "react-scroll"

export const AboutSecondSection = () => {

//I repeated 4 options at the end coz then we don't have to use js logic
	//coz at one time wi display 4 elements so we jus need to display it at the end
	//and then we can set infinite animation-iteration-count
	// (are site work faster so it is worth to do it)
	return (
		<section className="about-second" id='about-second'>
			<article className='technology-slider'>
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
				</ul>
			</article>
			<p className='technology-slider-description'>Here you can check technologies which I use</p>
			<div className="container">
				<div className="row">
					<div className="col-11 col-md-8 col-xl-5 box">
						<h3 className='about-me-title'>
								Hi, I am Peter I've just finished
								My bootcamp course in Coders Lab
								and I am looking for a job as a
								<br/><span> junior Front-end Developer</span>
						</h3>
						<div className="certificate-container">
							<figure className='certificate-box'>
								<img className='certificate' src='../../../images/Certificate.png'/>
							</figure>
						</div>
					</div>
					<div className="col-11 col-md-8 col-xl-5">
						<div className='my-hobbies'>
							<h4 className='my-hobbies__title'>My Hobbies</h4>
							<div className='my-hobbies-icons'>
								<a className='my-hobbies-icon'>
									<i className="fab fa-bitcoin"/>
								</a>
								<a className='my-hobbies-icon'>
									<i className="fas fa-laptop"/>
								</a>
								<a className='my-hobbies-icon'>
									<i className="fas fa-mountain"/>
								</a>
								<a className='my-hobbies-icon'>
									<i className="fas fa-biking"/>
								</a>
								<a className='my-hobbies-icon'>
									<i className="fas fa-hiking"/>
								</a>
								<a className='my-hobbies-icon'>
									<i className="fas fa-running"/>
								</a>
							</div>
						</div>
						<img src='../../../images/programing.jpg' className='programing'/>
					</div>
				</div>
			</div>
			<p className='sum-up'>Quoting Linus Torvalds ,,Talk is cheap.Show me the code.''</p>
			<LinkScroll to='#' className='btn'>
				<div>
					<span>
						<i className="fas fa-arrow-right"/>
					</span>
				</div>
			</LinkScroll>
		</section>
	)
}