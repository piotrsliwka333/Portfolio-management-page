import React from "react";
import {PortfolioProjectOverview} from "./PortfolioProjectOverview";


export const PortfolioProject = (props) => {
	const {picture,show,hide,technologies,linkLive,linkGithub,project,projectName} = props


	return (
		<div onMouseEnter={show} onMouseLeave={hide} className='project-box col-10 col-md-10 col-xl-3'>
			<figure className='project-box__container'>
				<img src={picture} className="project-box__container__photo"/>
			</figure>
			{project && <PortfolioProjectOverview projectName={projectName}
				linkLive={linkLive} linkGithub={linkGithub} technologies={technologies}/>}
		</div>
	)
}