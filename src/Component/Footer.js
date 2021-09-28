import React, { Component } from 'react'
import{Link} from 'react-router-dom';

class Footer extends React.Component {
	render() {
		return (
			<div>
				<footer className="footer section" id="ft">
					<div className="container">
						<div className="row">

						<div class="col-lg-3 col-md-6 col-sm-6">
								<div className="footer-column" style={{marginTop:100, marginLeft:10}}>
									<img src="./Asset/images/logo2.png" alt="logo" width= "200px" height= "80px" />						
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6">
								<div className='widget' >
								 <h4 class="text-capitalize mb-4" style={{color:"white"}}>Company</h4>
								 <p>International Coach Start Up</p>
								 <p>Immeuble Ben Ismail Rue 18 Janvier 9000 Béja.</p>
								 <div>
								 <i className ="fa fa-phone" aria-hidden="true"> +216 78 452 418 </i></div>
								 <div><p className ="fa fa-mobile"> +216 52 303 273 </p></div>
									<div><p className ="fa fa-envelope"> hello@icstartup.academy</p></div>
									<div><i className ="fa fa-globe"> www.icstartup.net</i></div>
								</div>
							</div>
						
							

							<div className="col-lg-2 col-md-6 col-sm-6">
								<div className="widget">
								<h4 class="text-capitalize mb-4" style={{color:"white"}}>Quick Links</h4>
								
									 <ul class="list-unstyled footer-menu lh-35">
									
										<li><Link to ="/" style={{color:"white", textDecoration:"none"}}>Acceuil</Link></li>				
										<li><Link to ="/formations" style={{color:"white", textDecoration:"none"}}>Programme</Link></li>
										<li><Link to ="/evenements" style={{color:"white", textDecoration:"none"}}>Evenements</Link></li>
										<li><Link to ="/formateur" style={{color:"white", textDecoration:"none"}}>Formateurs</Link></li>
										<li><Link to ="/inscription" style={{color:"white", textDecoration:"none"}}>Inscription</Link></li>
										<li><Link to ="/contact" style={{color:"white", textDecoration:"none"}}>Contact</Link></li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3 ml-auto col-sm-6">
								<div className="widget">									
								<h4 class="text-capitalize mb-4" style={{color:"white"}}>Programme</h4>	

								<ul class="list-unstyled footer-menu lh-35">
									
										<li><Link to ="/" style={{color:"white", textDecoration:"none"}}>Développement</Link></li>				
										<li><Link to ="/" style={{color:"white", textDecoration:"none"}}>Design</Link></li>
										<li><Link to ="/" style={{color:"white", textDecoration:"none"}}>Montage Vidéo</Link></li>
										<li><Link to ="/" style={{color:"white", textDecoration:"none"}}>Marketing Digital</Link></li>
										<li><Link to ="/" style={{color:"white", textDecoration:"none"}}>Community management</Link></li>
										<li><Link to ="/" style={{color:"white", textDecoration:"none"}}>Plus de formation</Link></li>
									</ul>																								
								</div>
							</div>
						</div>

						
					</div>
					<div className="footer-btm pt-4" style={{backgroundColor:"#021d3a"}}>
							<div className="row">
								<div className="col-lg-6"  style={{textAlign:"center"}}>
									<div className="copyright">
										&copy; Copyright Reserved to ICS.Academy by <a href="https://icstartup.digital" target="_blank">ICStartup</a>
									</div>
								</div>
								<div className="col-lg-6" style={{textAlign:"center"}}>
									<ul className="list-inline footer-socials">
										<li className="list-inline-item"><a href="https://www.facebook.com/icstartup" target="_blank" style={{color:"white"}}><i className="fab fa-facebook-f"></i></a></li>
										<li className="list-inline-item"><a href="https://twitter.com/icstartup" target="_blank" style={{color:"white"}}><i className="fab fa-twitter"></i></a></li>
										<li className="list-inline-item"><a href="https://www.linkedin.com/company/icstartup/mycompany" target="_blank " style={{color:"white"}}><i className="fab fa-linkedin-in"></i></a></li>
										<li className="list-inline-item"><a href="https://www.instagram.com/international_coach_start_up" target="_blank" style={{color:"white"}}><i className="fab fa-instagram"></i></a></li>

									</ul>
								</div>
							</div>
						</div>
				</footer>
			</div>
		);
	}
}


export default Footer
