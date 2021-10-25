import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { Dropdown } from './Dropdown.js';
import { Button } from 'reactstrap'

export const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand text-primary" href="/">Course For Revise</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <div className="dropdown">
                                    <Button color="primary" href="#" id="navbarDropdown"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span>React</span>
                                        <span><i className="fa fa-chevron-down"></i></span>
                                    </Button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                <span>SubMenu 1</span>
                                                <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                                            </a>
                                            <ul className="dropdown-menu dropdown-submenu">
                                                <li><a className="dropdown-item" href="/">1 1</a></li>
                                                <li><a className="dropdown-item" href="/">1 2</a></li>
                                                <li><a className="dropdown-item" href="/">1 3</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="/">
                                                <span>SubMenu 2</span>
                                                <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
                                            </a>
                                            <ul className="dropdown-menu dropdown-submenu">
                                                <li><a className="dropdown-item" href="/">1 1</a></li>
                                                <li><a className="dropdown-item" href="/">1 2</a></li>
                                                <li><a className="dropdown-item" href="/">1 3</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item">
                                <div className="ml-5">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className ="btn btn-primary" type ="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                                </form>
                                </div>
                            </li>

                            <li className="nav-item">
                                <span><a href="/">Play Quizzes</a></span>
                                <span><a href="/">Admin</a></span>
                            </li>

                            <li className="nav-item">
                                <Dropdown />
                            </li>

                        </ul>
                        

                        
                    </div>



                </div>
            </nav>
        </div>
    )
}
