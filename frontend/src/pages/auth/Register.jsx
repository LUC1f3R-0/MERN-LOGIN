import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js';

const Register = () => {
    const navigate = useNavigate()
    const [password, setPassword] = React.useState('')
    const [all, setAll] = React.useState('')
    const [email, setEmail] = React.useState('')

    const fetchData = async (e) => {
        setAll(''); setPassword(''); setEmail('');
        const { data } = await axiosInstance.post('/register', e)
        const { error, message, success } = data
        if (error === 'all') { setAll(message) }
        if (error === 'password') { setPassword(message) }
        if (error === 'email') { setEmail(message) }
        if (success) {
            Swal.fire({
                title: "Registration Success",
                text: "Login now",
                icon: "success"
            }).then(
                setTimeout(() => { navigate('/login') }, 2000)
            )
        }
    }

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        fetchData(formJson)
    }
    return (
        <>
            <section>
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                    <div className="flex items-center justify-center w-full">
                        <div className="w-full max-w-md">
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <NavLink href="./index.html" className="block text-center mb-4">
                                        <img src="../assets/images/logos/logo-light.svg" alt="Logo" className="mx-auto w-32" />
                                    </NavLink>
                                    <p className="text-center text-gray-600 mb-6">Your Social Campaigns</p>
                                    <p className="text-center text-gray-600 mb-6">{all}</p>
                                    <form onSubmit={handleRegister}>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputtext1" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                            <input type="text" id="exampleInputtext1" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="exampleInputEmail1" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>{email}
                                            <input type="email" id="exampleInputEmail1" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700 mb-1">Password</label> <label>{password}</label>
                                            <input type="password" id="exampleInputPassword1" name="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                        </div>
                                        <button type="submit" className="w-full py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 mb-4">Sign Up</button>
                                        <div className="flex items-center justify-center">
                                            <p className="text-sm font-medium text-gray-700">Already have an Account?</p>
                                            <NavLink to="/login" className="text-blue-600 font-bold ml-2 hover:underline">Sign In</NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Register
