import React from 'react'
import '../../assets/css/styles.min.css'
import { NavLink } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'

const Login = () => {
    const fetchData = async (e) => {
        const response = await axiosInstance.post('/login', e)
        console.log(response)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        fetchData(formJson);
    }

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
                                            <form onSubmit={handleSubmit}>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
                                                </div>
                                                <div className="mb-4">
                                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mb-4">
                                                    <div className="form-check">
                                                        <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                                                        <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                                                            Remeber this Device
                                                        </label>
                                                    </div>
                                                    <NavLink className="text-primary fw-bold" to={'/reset-password'}>Forgot Password ?</NavLink>
                                                </div>
                                                <button type='submit' className="btn btn-primary w-100 py-8 fs-4 mb-4">Sign In</button>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <p className="fs-4 mb-0 fw-bold">New to SeoDash?</p>
                                                    <NavLink className="text-primary fw-bold ms-2" to={'/register'}>Create an account</NavLink>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default Login
