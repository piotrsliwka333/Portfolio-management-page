import React from "react";
import certificate from '../../../images/Certificate.png';

export const AboutSecondCertificate = () => {

	return (
		<div className="certificate-container">
			<figure className='certificate-box'>
				<img className='certificate' src={certificate}/>
			</figure>
		</div>
	)
}