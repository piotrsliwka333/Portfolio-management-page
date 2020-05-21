import React from "react";

export const Footer =() => {


	return (
		<footer className='contact' id='contact'>
			<h6 className='contact__title'>Contact</h6>
			<a className='contact__git-hub' href='#'>
				<i className="fab fa-github"/>
			</a>
			<div className='container'>
				<div className='row'>
					<div className='col-10 col-md-5 col-xl-5 contact-box'>
						<p className='contact-box__info'>Email: <span className='contact-box__info__bold'>piotrsliwka333@gmail.com</span></p>
						<p className='contact-box__info'>Full Name: <span className={'contact-box__info__bold'}>Piotr Śliwka</span></p>
						<p className='contact-box__info'>Download </p>
					</div>
					<div className='col-10 col-md-5 col-xl-5 contact-box'>
						<a className='contact-box__social' href='#'>
							<i className="fab fa-linkedin"/>
						</a>
						<a className='contact-box__social' href='#'>
							<i className="fab fa-facebook-square"/>
						</a>
						<a className='contact-box__social' href='#'>
							Pracuj.pl
						</a>
					</div>
				</div>
			</div>

		</footer>
	)
}