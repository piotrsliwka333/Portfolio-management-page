import React from "react";

export const PortfolioProjectOverview = (props) => {
	const {technologies,linkLive,linkGithub,projectName} = props



	return (
		<div className='project-box__description'>
			<p className='project-box__description__title'>{projectName}</p>
			<p className='project-box__description__technologies'>{technologies}</p>
			<div>
				<a href={linkLive} target='_blank' className='project-box__description__btn'>Live</a>
				<a href={linkGithub} target='_blank' className='project-box__description__btn'>GitHub</a>
			</div>
		</div>
	)
}