import React from 'react';
import '../assets/css/Login.css';
function Login() {
    return (
        <>

            <section className="ftco-section" style={{ marginTop: '-60px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex">
                                <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                                    <div className="text w-100">
                                        <h2>Selamat datang di halaman login</h2>
                                        <p>Klik untuk halaman index</p>
                                        <a href="#" className="btn btn-white btn-outline-white">Sign Up</a>
                                    </div>
                                </div>
                                <div className="login-wrap p-4 p-lg-5">
                                    <div className="d-flex">
                                        <div className="w-100">
                                            <h3 className="mb-4">Log In</h3>
                                        </div>
                                    </div>
                                    <form action="#" className="signin-form">
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="name">Email</label>
                                            <input type="email" className="form-control" placeholder="Email" required />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="password">Password</label>
                                            <input type="password" className="form-control" placeholder="Password" required />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="form-control btn outline-danger px-3 text-light" style={{ backgroundColor: '#005a40' }}>Sign In</button>
                                        </div>
                                        <div className="form-group d-md-flex">
                                            <div className="w-50 text-left">
                                                <label className="checkbox-wrap checkbox-primary mb-0" style={{ color: '#005a40' }}>Remember Me
                                                    <input type="checkbox"  style={{ backgroundColor: 'green' }}/>
                                                    <span className="checkmark" style={{ color: 'green' }} />
                                                </label>
                                            </div>
                                            <div className="w-50 text-md-right">
                                                <a href="#">Forgot Password</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Login;