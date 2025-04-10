import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/css/styles.min.css'

const ForgotPassword = () => {
    return (
        <>
            <section>
                <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
                    data-sidebar-position="fixed" data-header-position="fixed">
                    <div
                        className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-content-center w-100">
                            <div className="row justify-content-center w-100">
                                <div className="col-md-8 col-lg-6 col-xxl-3">
                                    <div className="card mb-0">
                                        <div className="card-body">
                                            <NavLink href="./index.html" className="text-nowrap logo-img text-center d-block py-3 w-100">
                                                <img src="../assets/images/logos/logo-light.svg" alt="" />
                                            </NavLink>
                                            <p className="text-center">Your Social Campaigns</p>
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>

                                                <button className="btn btn-primary w-100 py-8 fs-4 mb-4">Sign In</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section>
        </>
    )
}

export default ForgotPassword
