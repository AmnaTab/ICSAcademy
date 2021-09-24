import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Header extends React.Component {
	render() {
		return (
			<div>
				<header class="navigation">
					<div class="header-top ">
						<div class="container">
							<div class="row justify-content-between align-items-center">
								<div class="col-lg-2 col-md-4">
									<div class="header-top-socials text-center text-lg-left text-md-left">
									<li className="list-inline-item"><a href="https://www.facebook.com/icstartup" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
										<li className="list-inline-item"><a href="https://twitter.com/icstartup" target="_blank"><i className="fab fa-twitter"></i></a></li>
										<li className="list-inline-item"><a href="https://www.linkedin.com/company/icstartup/mycompany" target="_blank "><i className="fab fa-linkedin-in"></i></a></li>
										<li className="list-inline-item"><a href="https://www.instagram.com/international_coach_start_up" target="_blank"><i className="fab fa-instagram"></i></a></li>
										
									</div>
								</div>
								<div class="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
									<div class="header-top-info">
										<span> Tél: </span> <span> +216 78 452 418 </span>
										<a href="mailto:support@gmail.com" ><i class="fa fa-envelope mr-2"></i><span> hello@icstartup.academy</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<nav class="navbar navbar-expand-lg  py-4" id="navbar">
						<div class="container">
							<img src="Asset/images/logo.jpg" />
							<Link to="/" class="navbar-brand">ICS.<span>Academy</span>
							</Link>



							<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
								<span class="fa fa-bars"></span>
							</button>

							<div class="collapse navbar-collapse text-center" id="navbarsExample09">
								<ul class="navbar-nav ml-auto">
									<li class="nav-item active"><Link to="/" class="nav-link"> ACCEUIL <span class="sr-only">(current)</span></Link></li>
									<li class="nav-item active"><Link to = "/about" class="nav-link">A PROPOS </Link></li>
									<li class="nav-item"><Link to = "/formations" class="nav-link" >NOS FORMATIONS</Link></li>
									<li class="nav-item"><Link to = "/evenement" class="nav-link" >EVENEMENTS</Link></li>
									<li class="nav-item"><Link to = "/inscription" class="nav-link" >INSCRIPTION</Link></li>
									<li class="nav-item"><Link to = "/formateur" class="nav-link" >FORMATEURS</Link></li>
									<li class="nav-item"><Link to ="/contact" class="nav-link" >CONTACT</Link></li>
								</ul>
							</div>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}


export default Header 
