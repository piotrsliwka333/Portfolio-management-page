import React, { useState } from "react";
import { PortfolioProject } from "./PortfolioProject";
import bestShopPhoto from '../../../images/BestShop.png';
import lumberPhoto from '../../../images/Lumber.png';
import mealPhoto from '../../../images/Schedule your meal.png'
import portfolioPhoto from '../../../images/portfolio-site.png'
import goTechPhoto from '../../../images/goTech.png'

export const PortfolioSection = () => {
  const [goTech, setGoTech] = useState(false)
  const [lumber, setLumber] = useState(false)
  const [bestShop, setBestShop] = useState(false)
  const [meal, setMeal] = useState(false)
  const [portfolio, setPortfolio] = useState(false)


  const handleSetGoTech = () => {
    setGoTech(true)
  }
  const handleHideGoTech = () => {
    setGoTech(false)
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
          <PortfolioProject project={goTech}
                            technologies={'JavaScript(ES6)/Sass/RWD'}
                            linkLive={'https://piotrsliwka333.github.io/goTech/'}
                            linkGithub={'https://github.com/piotrsliwka333/goTech'}
                            show={handleSetGoTech}
                            hide={handleHideGoTech}
                            picture={goTechPhoto}
                            projectName={'Go Tech'}
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
                            linkLive={'https://homemade-lumber.web.app/#/'}
                            linkGithub={'https://github.com/piotrsliwka333/Homemade-Lumber-Project'}
                            show={handleShowLumber}
                            hide={handleHideLumber}
                            picture={lumberPhoto}
                            projectName={'Homemade Lumber'}
          />
          <PortfolioProject project={meal}
                            technologies={'JavaScript(ES6)/Sass/React /RWD/WebPack/React Router/FireBase/BootStrap'}
                            linkLive={'https://schedule-your-meal.web.app/'}
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