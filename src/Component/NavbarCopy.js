import React from 'react'

export const NavbarCopy = () => {
    return (
        <div>
            <nav className="position-fixed z bg-white border-bottom border-secondary">
                <div className="container py-3">
                    <div className="row">
                        <h2 className="col-md-3  mb-0 text-primary">
                            <a href="#">Learn By Web</a>
                        </h2>
                        
                        <div className="col-md-5 d-flex align-items-start">
                            <div className="explore position-relative">
                            <button className="btn btn-primary d-flex rounded-bottom" type="button">
                                <span>Explore</span>
                                <span className="fa fa-chevron-down ml-2 mt-1"></span>
                            </button>
                            <ul className="className-dropdown position-absolute list-unstyled">
                                <h5>classNamees</h5>
                                <li className="d-flex justify-content-between">
                                    <span>className 6</span>
                                    <span className="fa fa-angle-down"></span>
                                    <ul className="sublist bg-white ">
                                        <h5>Subjects</h5>
                                        <li>
                                            <a href="#">Maths</a>
                                        </li>
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">Scinece</a></li>
                                        <li><a href="#">Grammer</a></li>
                                    </ul>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>className 7</span>
                                    <span className="fa fa-angle-down"></span>
                                    <ul className="sublist bg-white ">
                                        <h5>Subjects</h5>
                                        <li><a href="#">Maths</a></li>
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">Scinece</a></li>
                                        <li><a href="#">Grammer</a></li>
                                    </ul>
                                </li>
                                {/*<!-- added className eight math course with function by Arjun shrestha-->*/}
                                <li className="d-flex justify-content-between">
                                    <span>className 8</span>
                                    <span className="fa fa-angle-down"></span>
                                    <ul className="sublist bg-white ">
                                        <h5>Subjects</h5>
                                        <li>
                                            <a href="#">Maths</a>
                                        </li>
                                        <li>English</li>
                                        <li>
                                            <a href="#">Physics</a>
                                        </li>
                                        <li>Grammer</li>
                                    </ul>
                                </li>
                                <li className="d-flex justify-content-between">
                                    <span>className 9</span>
                                    <span className="fa fa-angle-down"></span>
                                    <ul className="sublist bg-white">
                                        <h5>Subjects</h5>
                                        <li><a href="#">Maths</a></li>
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">Scinece</a></li>
                                        <li><a href="#">Grammer</a></li>
                                    </ul>
                                </li>
                            </ul>
                            </div>

                            {/*<!--This sectio is not under work for some time-->*/}
                            <div className="ml-2 input-group">
                                
                                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                                <button className="btn btn-primary" type="button">
                                    <span className="fa fa-search"></span>
                                </button>
                                
                            </div>
                        </div>
                        {/*<!-- script to check wheteher there is login already -->*/}
                    {/*
                        <script>
                            askLogin = () => {
                                alert('Please Login');
                            }
                        </script>
                    */}
                        {/*<!-- script to check wheteher there is login already end -->*/}

                        <div className="col-md-4 d-flex justify-content-end align-items-start">
                            <span className="ml-4 mt-2"><a href="" onclick="/*askLogin()*/">Play Quizes</a></span>
                            <span className="ml-4 mt-2"><a href="php-admin-panel-template-master/index.php" target="_SELF">Admin</a></span>
                        </div>
                </div>
                </div>
            </nav>
        </div>
    )
}
