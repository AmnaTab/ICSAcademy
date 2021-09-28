import React, { Component } from 'react'
import { Link } from 'react-router-dom';



class Header extends React.Component {
	render() {
		return (
			<div>
				<header class="navigation ">
					<div class="header-top ">
						<div class="container">
							<div class="row justify-content-between align-items-center">
								<div class="col-lg-2 col-md-4">
									<div class="header-top-socials text-center text-lg-left text-md-left">
										<li className="list-inline-item"><a href="https://www.facebook.com/icstartup" target="_blank" style={{ color: "white" }}><i className="fab fa-facebook-f"></i></a></li>
										<li className="list-inline-item"><a href="https://twitter.com/icstartup" target="_blank" style={{ color: "white" }}><i className="fab fa-twitter"></i></a></li>
										<li className="list-inline-item"><a href="https://www.linkedin.com/company/icstartup/mycompany" target="_blank " style={{ color: "white" }}><i className="fab fa-linkedin-in"></i></a></li>
										<li className="list-inline-item"><a href="https://www.instagram.com/international_coach_start_up" target="_blank" style={{ color: "white" }}><i className="fab fa-instagram"></i></a></li>

									</div>
								</div>
								<div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
									<div className="header-top-info" style={{ color: "white" }}>
										<span> Tél: </span> <span> +216 78 452 418 </span>
										<a href="mailto:support@gmail.com" ><i className="fa fa-envelope mr-2"></i><span> hello@icstartup.academy</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="navbar">
						<div className="container">
						<Link to="/about"><img src="Asset/images/logo2.png" width="200px" height="80px" /></Link>
							         

							<div className="collapse navbar-collapse text-center" id="navbarsExample09">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item active"><Link to="/" className="nav-link"> ACCEUIL <span className="sr-only">(current)</span></Link></li>
									<li className="nav-item active"><Link to="/about" className="nav-link">A PROPOS </Link></li>

									<li className="nav-item dropdown">
										<a className="nav-link dropdown-toggle" href="" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											Nos Formations
										</a>
										<div className="dropdown-menu" aria-labelledby="navbarDropdown">
											<a className="dropdown-item" href="/formations">Développement</a>
											<a className="dropdown-item" href="/formations">Robotique</a>
											<a className="dropdown-item" href="/formations">Design</a>
											<a className="dropdown-item" href="/formations">SEO</a>
											<a className="dropdown-item" href="/formations">Marketing Digital</a>
											<a className="dropdown-item" href="/formations">Community Management</a>
											<a className="dropdown-item" href="/formations">Montage Video</a>
											<a className="dropdown-item" href="/formations">Marketing RH</a>
											<a className="dropdown-item" href="/formations">Gestion de projet</a>
											<a className="dropdown-item" href="/formations">Intelligence Artificielle</a>
											<a className="dropdown-item" href="/formations">Data Science</a>
											<a className="dropdown-item" href="/formations">Kids</a>
											<a className="dropdown-item" href="/formations">...</a>

											<div className="dropdown-divider" />
											<a className="dropdown-item" href="/formations">Voir Plus</a>
										</div>
									</li>


									<li class="nav-item"><Link to="/evenements" class="nav-link" >EVENEMENTS</Link></li>
									<li class="nav-item"><Link to="/formateur" class="nav-link" >FORMATEURS</Link></li>
									<li class="nav-item"><Link to="/inscription" class="nav-link" >INSCRIPTION</Link></li>
									<li class="nav-item"><Link to="/contact" class="nav-link" >CONTACT</Link></li>
									
								</ul>
								<div>
										<form class="form-inline">

										<input className="form-control mr-sm-2" type ="search" placeholder="Search" aria-label="Search" />
										<button className="btn btn-secondary my-2 my-sm-0" type ="submit">Search</button>
										</form>
									</div>

							</div>
						</div>
					</nav>
				</header>
			</div>
		);
	}
}


export default Header
