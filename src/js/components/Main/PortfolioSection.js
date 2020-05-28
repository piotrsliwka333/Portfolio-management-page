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
														technologies={'SASS/REACT/ES6/REACT ROUTER/RWD/WEBPACK'}
														linkLive={'https://piotrsliwka333.github.io/Project-COVID19/#/'}
													  linkGithub={'https://github.com/piotrsliwka333/Project-COVID19'}
													  show={handleShowCovid}
													  hide={handleHideCovid}
													  picture={covid19Photo}
					/>
					<PortfolioProject project={bestShop}
					                  technologies={'SASS/REACT/RWD/GULP'}
					                  linkLive={'https://piotrsliwka333.github.io/03-CL-WorkShop-RWD/'}
					                  linkGithub={'https://github.com/piotrsliwka333/03-CL-WorkShop-RWD'}
					                  show={handleShowBestShop}
					                  hide={handleHideBestShop}
					                  picture={bestShopPhoto}
					/>
					<PortfolioProject project={lumber}
					                  technologies={'SASS/REACT/RWD/GULP'}
					                  linkLive={'https://piotrsliwka333.github.io/Homemade-Lumber-Project/#/'}
					                  linkGithub={'https://github.com/piotrsliwka333/Homemade-Lumber-Project'}
					                  show={handleShowLumber}
					                  hide={handleHideLumber}
					                  picture={lumberPhoto}
					/>
					<PortfolioProject project={meal}
					                  technologies={'SASS/REACT/RWD/GULP'}
					                  linkLive={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  linkGithub={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  show={handleShowMeal}
					                  hide={handleHideMeal}
					                  picture={mealPhoto}
					/>
					<PortfolioProject project={portfolio}
					                  technologies={'SASS/REACT/RWD/GULP'}
					                  linkLive={'https://piotrsliwka333.github.io/Portfolio-management-page/'}
					                  linkGithub={'https://github.com/piotrsliwka333/Portfolio-management-page'}
					                  show={handleShowPortfolio}
					                  hide={handleHidePortfolio}
					                  picture={portfolioPhoto}
					/>
				</div>
			</div>
		</section>
	)
}