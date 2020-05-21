import React, {useState} from "react";
import {PortfolioProject} from "./PortfolioProject";


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
		<section className='portfolio'>
			<h6 className='portfolio__title'>Portfolio</h6>
			<div className='container'>
				<div className='row'>
					<PortfolioProject project={covid}
														technologies={'SASS/REACT/ES6/REACT ROUTER/RWD/WEBPACK'}
														linkLive={'https://github.com/piotrsliwka333/Project-COVID19'}
													  linkGithub={'https://github.com/piotrsliwka333/Project-COVID19'}
													  show={handleShowCovid}
													  hide={handleHideCovid}
													  picture={'convid19.png'}
					/>
					<PortfolioProject project={bestShop}
					                  technologies={'SASS/REACT/RWD/GULP'}
					                  linkLive={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  linkGithub={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  show={handleShowBestShop}
					                  hide={handleHideBestShop}
					                  picture={'BestShop.png'}
					/>
					<PortfolioProject project={lumber}
					                  technologies={'SASS/REACT/RWD/GULP'}
					                  linkLive={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  linkGithub={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  show={handleShowLumber}
					                  hide={handleHideLumber}
					                  picture={'Lumber.png'}
					/>
					<PortfolioProject project={meal}
					                  technologies={'SASS/REACT/RWD/GULP'}
					                  linkLive={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  linkGithub={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  show={handleShowMeal}
					                  hide={handleHideMeal}
					                  picture={'Schedule%20your%20meal.png'}
					/>
					<PortfolioProject project={portfolio}
					                  technologies={'SASS/REACT/RWD/GULP'}
					                  linkLive={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  linkGithub={'https://github.com/piotrsliwka333/Project-COVID19'}
					                  show={handleShowPortfolio}
					                  hide={handleHidePortfolio}
					                  picture={'Portfolio.png'}
					/>
				</div>
			</div>
		</section>
	)
}