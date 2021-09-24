import React, { Component } from 'react'
import{Link} from 'react-router-dom';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<footer className="footer section" id="ft">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 col-sm-6">

								<div className='widget' >
								  <div> 
									  <img src = "./Asset/images/logo.jpg" />
								  </div>

								  <p>immeuble ben ismail Rue 18 janvier 9000 Béja.</p>
								  <div>
									<i className ="fa fa-phone"> +216 78 452 418 </i></div>

									<div><i className ="fa fa-phone"> +216 52 303 273 </i></div>

									<div><i className ="fa fa-envelope"> hello@icstartup.academy</i></div>
									<div><i className ="fa fa-globe"> www.icstartup.net</i></div>

								</div>
							</div>
						
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div className="footer-column">
						
								</div>
							</div>

							<div className="col-lg-2 col-md-6 col-sm-6">
								<div className="widget">
								<h2 className="widget-title"><span>Liens</span></h2>
								<div className = "menu-footer-container"> </div>
									{/* <ul class="list-unstyled footer-menu lh-35"> */}
									<ul id = "menu-footer" className = "menu">
										<li><Link to ="/">Acceuil</Link></li>
										<li><Link to ="/about">A propos</Link></li>
										<li><Link to ="/formations">Nos Formations</Link></li>
										<li><Link to ="/evenements">Evenements</Link></li>
										<li><Link to ="/formateur">Formateurs</Link></li>
										<li><Link to ="/inscription">inscription</Link></li>
										<li><Link to ="/contact">Contact</Link></li>
									</ul>
								</div>
							</div>

							<div class="col-lg-3 ml-auto col-sm-6">
								<div className="widget">
									
								<h2 className="widget-title"><span>Programme</span></h2>
								
									
									
								</div>
							</div>
						</div>

						<div className="footer-btm pt-4">
							<div className="row">
								<div className="col-lg-6">
									<div className="copyright">
										&copy; Copyright Reserved to ICS.Academy by <a href="https://icstartup.digital" target="_blank">ICStartup</a>
									</div>
								</div>
								<div className="col-lg-6 text-left text-lg-right">
									<ul className="list-inline footer-socials">
										<li className="list-inline-item"><a href="https://www.facebook.com/icstartup" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li className="list-inline-item"><a href="https://twitter.com/icstartup" target="_blank"><i className="fab fa-twitter"></i></a></li>
										<li className="list-inline-item"><a href="https://www.linkedin.com/company/icstartup/mycompany" target="_blank "><i className="fab fa-linkedin-in"></i></a></li>
										<li className="list-inline-item"><a href="https://www.instagram.com/international_coach_start_up" target="_blank"><i className="fab fa-instagram"></i></a></li>

									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}


export default Footer
