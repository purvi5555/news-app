import logo from '../components/logof.webp';
import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div>
            <div className='container'>
           {/* <h1 className='mt-2 fixed' style={{textAlign:'center',fontFamily:'serif'}}>KHABARI</h1>*/}
           <nav className="navbar fixed-top navbar-expand-lg mt-0 back pb-3">
           <img src={logo} className="mx-auto d-block w-20 " alt="..."/>
            </nav>
            </div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark back mt-7 mb-8">
                <div className="container-fluid">
                    <Link  className="navbar-brand nav-link" aria-current="page" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                        
                    </div>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
