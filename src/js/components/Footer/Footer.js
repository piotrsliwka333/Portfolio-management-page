import React from "react";

export const Footer =() => {


	return (
		<footer className='contact' id='contact'>
			<h6 className='contact__title'>Contact</h6>
			<a className='contact__git-hub' href='https://github.com/piotrsliwka333'>
				<i className="fab fa-github"/>
			</a>
			<div className='container'>
				<div className='row'>
					<div className='col-10 col-md-5 col-xl-5 contact-box'>
						<p className='contact-box__info'>Email: <span className='contact-box__info__bold'>piotrsliwka333@gmail.com</span></p>
						<p className='contact-box__info'>Full Name: <span className={'contact-box__info__bold'}>Piotr Śliwka</span></p>
						<p className='contact-box__info' >Download <a className='contact-box__info__bold' href='../../../images/CV_Piotr_Śliwka%20(2).pdf' download>CV</a></p>
					</div>
					<div className='col-10 col-md-5 col-xl-5 contact-box'>
						<a className='contact-box__social' target='_blank' href='https://www.linkedin.com/in/piotr-%C5%9Bliwka/'>
							<i className="fab fa-linkedin"/>
						</a>
						<a className='contact-box__social' target='_blank' href='https://www.facebook.com/piotr.sliwka.1272/'>
							<i className="fab fa-facebook-square"/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}