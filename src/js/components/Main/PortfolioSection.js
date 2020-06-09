import React, {useState} from "react";
import {PortfolioProject} from "./PortfolioProject";
import covid19Photo from '../../../images/convid19.png';
import bestShopPhoto from '../../../images/BestShop.png';
import lumberPhoto from '../../../images/Lumber.png';
import mealPhoto from '../../../images/Schedule your meal.png'
import portfolioPhoto from '../../../images/peter.png'

export const PortfolioSection = () => {
	const [covid,setCovid] = useState(false)
	const [lumber,setLumber] = useState(false)
	const [bestShop,setBestShop] = useState(false)
	const [meal,setMeal] = useState(false)
	const [portfolio,setPortfolio] = useState(false)


	const handleShowCovid = () => {
		setCovid(true)
	}
	const handleHideCovid = () => {
		setCovid(false)
	}
	const handleShowBestShop = () => {
		setBestShop(true)
	}
	const handleHideBestShop = () => {
		setBestShop(false)
	}
	const handleShowLumber = () => {
		setLumber(true)
	}
	const handleHideLumber = () => {
		setLumber(false)
	}
	const handleShowMeal = () => {
		setMeal(true)
	}
	const handleHideMeal = () => {
		setMeal(false)
	}
	const handleShowPortfolio = () => {
		setPortfolio(true)
	}
	const handleHidePortfolio = () => {
		setPortfolio(false)
	}


	return (
		<section className='portfolio' id='portfolio'>
			<h6 className='portfolio__title'>Portfolio</h6>
			<div className='container'>
				<div className='row'>
					<PortfolioProject project={covid}
														technologies={'JavaScript(ES6)/Sass/React/ ReactRouter/RWD/WebPack /RestAPI/JSONSever'}
														linkLive={'https://piotrsliwka333.github.io/Project-COVID19/#/'}
													  linkGithub={'https://github.com/piotrsliwka333/Project-COVID19'}
													  show={handleShowCovid}
													  hide={handleHideCovid}
													  picture={covid19Photo}
													  projectName={'Covid19 guide'}
					/>
					<PortfolioProject project={bestShop}
					                  technologies={'/SASS/JS/RWD/GULP/'}
					                  linkLive={'https://piotrsliwka333.github.io/03-CL-WorkShop-RWD/'}
					                  linkGithub={'https://github.com/piotrsliwka333/03-CL-WorkShop-RWD'}
					                  show={handleShowBestShop}
					                  hide={handleHideBestShop}
					                  picture={bestShopPhoto}
					                  projectName={'BestShop'}
					/>
					<PortfolioProject project={lumber}
					                  technologies={'JavaScript(ES6)/Sass/React /RWD/WebPack/FireBase'}
					                  linkLive={'https://piotrsliwka333.github.io/Homemade-Lumber-Project/#/'}
					                  linkGithub={'https://github.com/piotrsliwka333/Homemade-Lumber-Project'}
					                  show={handleShowLumber}
					                  hide={handleHideLumber}
					                  picture={lumberPhoto}
					                  projectName={'Homemade Lumber'}
					/>
					<PortfolioProject project={meal}
					                  technologies={'JavaScript(ES6)/Sass/React /RWD/WebPack/React Router/FireBase/BootStrap'}
					                  linkLive={'https://piotrsliwka333.github.io/schedule-your-meal/'}
					                  linkGithub={'https://github.com/piotrsliwka333/schedule-your-meal'}
					                  show={handleShowMeal}
					                  hide={handleHideMeal}
					                  picture={mealPhoto}
					                  projectName={'Schedule Your Meal'}
					/>
					<PortfolioProject project={portfolio}
					                  technologies={'Sass/React/RWD/JavaScript(ES6) /WebPack/React Router'}
					                  linkLive={'https://piotrsliwka333.github.io/Portfolio-management-page/'}
					                  linkGithub={'https://github.com/piotrsliwka333/Portfolio-management-page'}
					                  show={handleShowPortfolio}
					                  hide={handleHidePortfolio}
					                  picture={portfolioPhoto}
					                  projectName={'Portfolio site'}
					/>
				</div>
			</div>
		</section>
	)
}