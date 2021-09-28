import React, { Component} from "react";
import { Link } from 'react-router-dom';

class Evenements extends React.Component{
    render(){
        return( 
           
            <div>
                 <div className="main-wrapper ">
                    <section className="page-title bg-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="block text-center">
                                        <span className="text-white">EVENEMENTS</span>
                                        <h1 className="text-capitalize mb-4 text-lg">International Coach Start Up</h1>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><Link to="/" className="text-white">ACCEUIL</Link></li>
                                            <li className="list-inline-item"><span className="text-white">/</span></li>
                                            <li className="list-inline-item"><Link to="/evenements" className="text-white-50">EVENEMENTS
</Link></li>
                                        </ul>
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
export default Evenements