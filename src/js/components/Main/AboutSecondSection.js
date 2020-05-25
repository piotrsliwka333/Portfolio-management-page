import React from "react";
import {Link as LinkScroll} from "react-scroll"
import {AboutSecondSliderElement} from "./AboutSecondSliderElement";
import {AboutSecondSlider} from "./AboutSecondSlider";
import {AboutSecondAboutMe} from "./AboutSecondAboutMe";
import {AboutSecondCertificate} from "./AboutSecondCertificate";

export const AboutSecondSection = () => {

//I repeated 4 options at the end coz then we don't have to use js logic
	//coz at one time wi display 4 elements so we jus need to display it at the end
	//and then we can set infinite animation-iteration-count
	// (are site work faster so it is worth to do it)
	return (
		<section className="about-second" id='about-second'>
			<AboutSecondSlider/>
			<div className="container">
				<div className="row">
					<div className="col-11 col-md-8 col-xl-5 box">
						<AboutSecondAboutMe/>
						<AboutSecondCertificate/>
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
						<img src='../../../images/programer.png' alt='men who is programing' className='programing'/>
					</div>
				</div>
			</div>
			<p className='sum-up'>Quoting Linus Torvalds ,,Talk is cheap.Show me the code.''</p>
			<LinkScroll to='portfolio' smooth={true} duration={200} className='btn'>
				<div>
					<span>
						<i className="fas fa-arrow-right"/>
					</span>
				</div>
			</LinkScroll>
		</section>
	)
}