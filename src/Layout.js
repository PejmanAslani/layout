import React from 'react'
import App from './App'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const Layout = () => {
    return (
        <>
            <div className='main-container d-flex'>
                <div className='sidebar' id="side-nav">
                    <div className='header-box px-2 pt-3 pb-4 d-flex justify-content-between'>
                        <h1 className='fs-4'><span className='bg-white text-dark rounded shadow px-2 m-2'>CL</span><span
                            className='text-white'>Pejmans Layout</span></h1>
                        <button className='btn d-mb-none btn-close  d-block px-0 py-0 text-white'>ICON1</button>
                    </div>
                    <ul className='list-unstyled px-2'>
                        <li><a href='#' className='text-decoration-none px-3 py-2 d-block'>Dashboard</a></li>
                        <li><a href='#' className='text-decoration-none px-3 py-2 d-block'>Projects</a></li>
                        <li>
                            <a href='#'
                               className='text-decoration-none px-3 py-2 d-block d-flex justify-content-between'>
                                <span>Messages</span>
                                <span className='bg-dark rounded-pill text-white py-0 px-2 d-block'>02</span>
                            </a></li>
                        <li><a href='#' className='text-decoration-none px-3 py-2 d-block'>Services</a></li>
                        <li><a href='#' className='text-decoration-none px-3 py-2 d-block'>Customers</a></li>
                    </ul>
                    <hr className='h-color mx-3'/>

                    <ul className="list-unstyled px-2">
                        <li><a href='#' className='text-decoration-none px-3 py-2 d-block'>Settings</a></li>
                        <li><a href='#' className='text-decoration-none px-3 py-2 d-block'>Settings</a></li>
                    </ul>
                </div>
                <div className='content'>
                    <nav className="navbar navbar-expand-md navbar-light bg-light">
                        <div className='container-fluid'>

                            <div className='d-flex justify-content-between d-md-none d-block '>
                                <button className='btn px-1 py-0 open-btn me-2'
                                >ICON3
                                </button>
                                <a className="navbar-brand fs-4" href="#"><span
                                    className="bg-dark rounded px-2 py-0 text-white">Cl</span> Kaj Call center</a>
                            </div>


                            <button className="navbar-toggler p-0 border-0" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                  ICON
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="dashboard-content px-3 pt-4">
                        <App/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout