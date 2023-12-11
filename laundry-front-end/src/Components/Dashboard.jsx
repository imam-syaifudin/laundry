import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Dashboard({ children }) {

    const { pathname } = useLocation();

    function getClassNavItem(path) {
        return pathname.includes(path) > 0 ? "nav-item active" : "nav-item";
    }

    // useEffect(() => {
    //     getClassNavItem(path)
    // },[path])

    return (
        <>

            {/* Page Wrapper */}
            <div id="wrapper">
                {/* Sidebar */}
                <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion text-uppercase" id="accordionSidebar">
                    {/* Sidebar - Brand */}
                    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">Laundry <sup></sup></div>
                    </Link>
                    {/* Divider */}
                    {/* Nav Item - Dashboard */}
                    <hr style={{ width: '90%', backgroundColor: 'white' }} className="mx-auto" />
                    <li className={getClassNavItem('/dashboard')} style={{ marginBottom: '-20px', marginTop: '-20px' }}>
                        <Link className="nav-link" to="/dashboard">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span className='mx-3'>Dashboard</span></Link>
                    </li>
                    <hr style={{ width: '90%', backgroundColor: 'white' }} className="mx-auto" />
                    <div className="sidebar-heading">
                        Page
                    </div>

                    {/* Nav Item - Tables */}
                    <li className={getClassNavItem('/pelanggan')}>
                        <Link className="nav-link" to='/pelanggan'>
                            <i className="fa-solid fa-user"></i>
                            <span className='mx-3'>Pelanggan</span></Link>
                    </li>
                    <li className={getClassNavItem('/paket')}>
                        <Link className="nav-link" to='/paket'>
                            <i className="fa-solid fa-box"></i>
                            <span className='mx-3'>Paket</span></Link>
                    </li>
                    <li className={getClassNavItem('/transaksi')}>
                        <Link className="nav-link" to="/transaksi">
                            <i className="fa-sharp fa-solid fa-credit-card"></i>
                            <span className='mx-3'>Transaksi</span></Link>
                    </li>
                    <li className={getClassNavItem('/detailtransaksi')}>
                        <Link className="nav-link" to="/detailtransaksi">
                        <i className="fa-solid fa-circle-info"></i>
                            <span className='mx-3'>Detail Transaksi</span></Link>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider d-none d-md-block" />
                    {/* Sidebar Toggler (Sidebar) */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" />
                    </div>
                </ul>
                {/* End of Sidebar */}
                {/* Content Wrapper */}
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            {/* Sidebar Toggle (Topbar) */}
                            <form className="form-inline">
                                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                    <i className="fa fa-bars" />
                                </button>
                            </form>
                            {/* Topbar Navbar */}
                            <ul className="navbar-nav ml-auto">
                                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                                <div className="topbar-divider d-none d-sm-block" />
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Muhammad Imam</span>
                                        <img className="img-profile rounded-circle" src="data:image/jpeg;base64,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" />
                                    </a>
                                    {/* Dropdown - User Information */}
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {/* End of Topbar */}
                        {/* Begin Page Content */}

                        <div className="container-fluid">
                            {children}
                        </div>


                        {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright © Udin Laundry 2023</span>
                            </div>
                        </div>
                    </footer>
                    {/* End of Footer */}
                </div>
                {/* End of Content Wrapper */}
            </div>


        </>
    );
}

export default Dashboard;