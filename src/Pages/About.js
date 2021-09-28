import React, { Component } from "react";
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {

        return (
            <div>
                <div className="main-wrapper ">
                    <section className="page-title bg-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block text-center">
                                        <span className="text-white">A PROPOS</span>
                                        <h1 className="text-capitalize mb-4 text-lg">International Coach Start Up</h1>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><Link to="/" className="text-white">ACCEUIL</Link></li>
                                            <li className="list-inline-item"><span className="text-white">/</span></li>
                                            <li className="list-inline-item"><Link to="/about" className="text-white-50">A PROPOS</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section About Start */}
                    <section className="section about-2 position-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="about-item pr-3 mb-5 mb-lg-0">
                                        <span className="h2 text-color">Ce que nous sommes</span>
                                        <h4 className="mt-3 mb-4 position-relative ">Nous sommes une équipe dynamique de personnes créatives</h4>
                                        <p className="mb-5">ICStartup Academy est une école de formation professionnelle qui propose des formations en Marketing Digital, Arts graphiques 2D et 3D, Développement Web et Mobile, Audiovisuel, Montage Vidéo, et plusieurs autres domaines d’actualité.</p>
                                        <p> Nous formons la prochaine génération tech aux technologies les plus récentes et aux métiers du futur pour les préparer au monde professionnel et renforcer leur employabilité.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="about-item-img">
                                        <img src="Asset/images/imgdigiforma.png" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Section About End */}
                    <section className="about-info section pt-0">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-info-item mb-4 mb-lg-0">
                                        <h3 className="mb-3"><span className="text-color mr-2 text-md ">01.</span>Être ambitieux</h3>
                                        <p>Nous voyons grand et nous transmettons cette manière de penser à nos étudiants.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-info-item mb-4 mb-lg-0">
                                        <h3 className="mb-3"><span className="text-color mr-2 text-md">02.</span>Avoir un réel impact</h3>
                                        <p>Nous cherchons à avoir un réel impact sur le futur en formant les talents de demain .</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="about-info-item mb-4 mb-lg-0">
                                        <h3 className="mb-3"><span className="text-color mr-2 text-md">03.</span>Avoir une mentalité de croissance</h3>
                                        <p>Nous encourageons l’apprentissage continu, nous évoluons et nous prenons part au monde du futur.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* section Counter Start */}
                    <section className="section counter bg-counter">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="counter-item text-center mb-5 mb-lg-0">
                                        <i className="ti-check color-one text-md" />
                                        <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">1250</span> +</h3>
                                        <p className="text-white-50">Etudiant Inscrits</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="counter-item text-center mb-5 mb-lg-0">
                                        <i className="ti-check color-one text-md" />
                                        <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">890 </span>+ </h3>
                                        <p className="text-white-50">Cours Téléchargés</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="counter-item text-center mb-5 mb-lg-0">
                                        <i className="ti-check color-one text-md" />
                                        <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">512</span> +</h3>
                                        <p className="text-white-50">Etudiants Certifiés</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="counter-item text-center">
                                        <i className="ti-check color-one text-md" />
                                        <h3 className="mt-2 mb-0 text-white"><span className="counter-stat font-weight-bold">170</span> +</h3>
                                        <p className="text-white-50">Formateurs </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* section Counter End  */}
                    {/*  Section Services Start */}
                    <section className="section about-2 position-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="about-item pr-3 mb-5 mb-lg-0">
                                        <span className="h2 text-color">Notre équipe</span>
                                        <h2 className="mt-3 content-title">Rencontrer Nos Formateurs Experts...</h2>
                                    </div>
                                </div>                                                     
                            </div>
                            
                            <div className="row justify-content-center">
                               
                                
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="team-item-wrap mb-5 ">
                                        <div className="team-item position-relative">
                                            <img src="Asset/images/equipe/aymen_haboubi.png" alt className="img-fluid w-100" />
                                           
                                        </div>
                                        <div className="team-item-content">
                                            <h4 className="mt-3 mb-0 text-capitalize">AYMEN HABOUBI</h4>
                                            <p>Python &amp; Robotique</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="team-item-wrap mb-5 mb-lg-0">
                                        <div className="team-item position-relative">
                                            <img src="Asset/images/equipe/jabri_imen.png" alt className="img-fluid w-100" />
                                            
                                        </div>
                                        <div className="team-item-content">
                                            <h4 className="mt-3 mb-0 text-capitalize">IMEN JABRI</h4>
                                            <p>Robotique Kids &amp; Gestion de ressources humaines </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="team-item-wrap mb-5 mb-lg-0">
                                        <div className="team-item position-relative">
                                            <img src="Asset/images/equipe/walid_kallel.png" alt className="img-fluid w-100" />
                                          
                                        </div>
                                        <div className="team-item-content">
                                            <h4 className="mt-3 mb-0 text-capitalize">WALID KALLEL</h4>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="team-item-wrap mb-5 mb-lg-0 ">
                                        <div className="team-item position-relative">
                                            <img src="Asset/images/equipe/GUERFAL.png " alt className="img-fluid w-100" />
                                           
                                        </div>
                                        <div className="team-item-content">
                                            <h4 className="mt-3 mb-0 text-capitalize">GUERFAL</h4>
                                            <p>Soft Skills</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="" >
                                    <Link to="/formateur" role="button" className="btn btn-primary btn-lg btn-block" data-bs-toggle="button"  >Consulter la liste de Formateurs</Link>
                                </div>
                        </div>
                    </section>  
                    <div className="dropdown-divider"/>
                        {/* section form End  */}
                    <section className="section about-2 position-relative">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="about-item pr-3 mb-5 mb-lg-0">
                                        <span className="h2 text-color">Formation &amp; programme</span>
                                        <h4 className="mt-3 mb-4 position-relative ">Programme varié composé de plusieurs thèmes de formation</h4>
                                        <p className="mb-5">ICStartup Academy vous garantie une formations divérsifiée souhaitées tout en suivant un planing défini.
                                        <br/>
                                         Avec une possibilité de choisir plus qu'une formation et bénéficier d'une réduction!.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="about-item-img">
                                        <img src="Asset/images/imgdigiforma.png" alt className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                           
                       
                                      
                </div>           
            </div>                        
        );
    }
}
export default About

