import React, { Component } from 'react'
import { Figure } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Home extends React.Component {

  render() {
    return (
      <div>
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false" data-interval="4000">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="./Asset/images/desk/desk.png" alt="First slide" widht="100px" height="700px" />
              <div className="carousel-caption d-none d-md-block" style={{textAlign:'left', color:'white', top: 30, left: 60}}>
               <div>
               <p className="fs-1">Formation Bien Assistée </p>
               </div>
               <div>
               <p className="fs-1">par des Formateurs Qualifiés</p>
               </div>
               <Link to="/formateur" className="btn btn-dark " role="button" > Consulter la liste de Formateurs </Link>
               </div>
              </div>
            <div className="carousel-item" >
              <img className="d-block w-100" src="./Asset/images/desk/desk2.png" alt="Second slide" widht="100px" height="700px" />
              <div className="carousel-caption d-none d-md-block" style={{textAlign:'center', color:'white', top: 255, left: -170}}>
                <p className="fs-1">Un Large choix de Modules</p>
                <Link to="/formations" className="btn btn-dark" role="button" >Consulter le Programme</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="./Asset/images/desk/desk3.png" alt="Third slide" widht="100px" height="700px" />
              <div className="carousel-caption d-none d-md-block" style={{textAlign:'left', color:'white', top: 358, left: 112}}>
              <p class="fs-1"> Certificat Homologué</p>
              <Link to="/inscription" className="btn btn-success btn-lg" role="button" > S'inscrire</Link>
              </div>
            </div>          
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>            
          </a>
        </div >
      <div className="main-wrapper ">

        <section className="section intro">
          <div className="container">
            <div className="row ">
              <div className="col-lg-8">
                <div className="section-title">
                  <span className="h3 text-color ">Nous sommes des personnes Expertes &amp; Créatives </span><br /><br />
                  <p className="fs-4">On vous garantie une formation éfficace et un certificat
                     Homologué dans plusieurs domaines technologiques et Soft
                    Skills qui vous facilitent par l'integration au marché d'emploi. </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="intro-item mb-5 mb-lg-0">
                  <i className="ti-desktop color-one" />
                  <h5 className="mt-4 mb-3 fw-bold">Design moderne &amp; réactif</h5>
                  <p>Grâce à une formation en Design vous deviendrez des excellents Disgners.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="intro-item mb-5 mb-lg-0">
                  <i className="ti-medall color-one" />
                  <h5 className="mt-4 mb-3 fw-bold">Certificat Homologué</h5>
                  <p>Qui vous permet d'intégrer la vie professionnelle dans la spécialité que vous avez choisi.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="intro-item">
                  <i className="ti-layers-alt color-one" />
                  <h5 className="mt-4 mb-3 fw-bold">Créez votre site Web de manière professionnelle</h5>
                  <p>Après une formation en Développement Web vous serez apte et capable de créer un site web professionnel .</p>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-block" >
            <Link to="/about" role="button" className="btn btn-primary" data-bs-toggle="button" >Voir Plus</Link>
            </div>
          </div>          
        </section>
        {/* Section Intro END */}
        {/*  Section Services Start */}
        <section className="section service border-top">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <div className="section-title">
                  <span className="h3 text-color">Nos Services</span>
                  <h2 className="mt-3 content-title ">Nous fournissons une large gamme de services créatifs </h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <i className="ti-desktop" />
                  <h5 className="mb-3 fw-bold">Development Web .</h5>
                  <p>Nous vous offrons la solution la plus complète et ergonomique du marché pour la création site web Tunisie.
                    Obtenez un site Web qui répond à vos besoins en termes de qualité/prix.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <i className="ti-layers" />
                  <h5 className="mb-3 fw-bold">CONCEPTION GRAPHIQUE.</h5>
                  <p>ICSTARTUP se mobilise pour être à votre écoute, comprendre vos besoins et vous proposer
                    des maquettes graphiques originales et conformes à vos attentes. </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5">
                  <i className="ti-bar-chart" />
                  <h5 className="mb-3 fw-bold">COMMUNITY MANAGEMENT.</h5>
                  <p>ICSTARTUP vous offre ses services et son expérience en community management pour la gestion de vos
                    communautés en ligne.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5 mb-lg-0">
                  <i className="ti-vector" />
                  <h5 className="mb-3 fw-bold">WEBMASTERING.</h5>
                  <p>ICSTARTUP met à votre disposition son expertise technique et éditoriale afin de dynamiser votre contenu.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5 mb-lg-0">
                  <i className="ti-android" />
                  <h5 className="mb-3 fw-bold">DEVELOPPEMENT DES APPLICATIONS MOBILES.</h5>
                  <p>ICSTARTUP propose à ses clients la création d’application mobile sur mesure.</p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="service-item mb-5 mb-lg-0">
                  <i className="ti-pencil-alt" />
                  <h5 className="mb-3 fw-bold">LOGICIELS SUR MESURE.</h5>
                  <p>ICSTARTUP vous accompagne dans votre vie professionnelle par mettre à votre disposition son savoir-faire dans le domaine de développement</p>
                </div>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-block" >
            <Link to="/formations" role="button" className="btn btn-primary" data-bs-toggle="button" >Voir Plus</Link>
            </div>
          </div>       
        </section>
        <br />
        <br />
        <br />
      </div> 
      </div >
    );
  }
}
export default Home