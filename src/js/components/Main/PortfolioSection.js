import React, {useState} from "react";


export const PortfolioSection = () => {
	const [covid,setCovid] = useState(false)

	const handleChangeHover = () => {
		setCovid(true)
	}
	const handleMouseLeave = () => {
		setCovid(false)
	}


	return (
		<section className='portfolio'>
			<h6 className='portfolio__title'>Portfolio</h6>
			<div className='container'>
				<div className='row'>
					<div onMouseEnter={handleChangeHover} onMouseLeave={handleMouseLeave} className='project-box col-10 col-md-10 col-xl-4'>
						<figure className='project-box__container'>
							<img src='../../../images/convid19.png' className="project-box__container__photo"/>
						</figure>
						{covid &&
						<>
							<div className='project-box__description'>
								<p className='project-box__description__title'>Technologies:</p>
								<p className='project-box__description__technologies'>SASS/REACT/ES6/REACT ROUTER/RWD/WEBPACK</p>
								<div>
									<a className='project-box__description__btn'>Live</a>
									<a href='https://github.com/piotrsliwka333/Project-COVID19' target='_blank' className='project-box__description__btn'>GitHub</a>
								</div>
							</div>
						</>
						}
					</div>
					<div className='project-box col-10 col-md-10 col-xl-4'>
						<figure className='project-box__container'>
							<img src='../../../images/BestShop.png' className="project-box__container__photo"/>
						</figure>
					</div>
					<div className='project-box col-10 col-md-10 col-xl-4'>
						<figure className='project-box__container'>
							<img src='../../../images/Lumber.png' className="project-box__container__photo"/>
						</figure>
					</div>
					<div className='project-box col-10 col-md-10 col-xl-4'>
						<figure className='project-box__container'>
							<img src='../../../images/Schedule%20your%20meal.png' className="project-box__container__photo"/>
						</figure>
					</div>
					<div className='project-box col-10 col-md-10 col-xl-4'>
						<figure className='project-box__container'>
							<img src='../../../images/Portfolio.png' className="project-box__container__photo"/>
						</figure>
					</div>
				</div>
			</div>


		</section>
	)
}