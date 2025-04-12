import React from 'react'
import axiosInstance from '../api/axiosInstance'

const Home = () => {
    React.useEffect(() => {
        const fetchDate = async () => {
            const response = await axiosInstance('/')
            console.log(response)
        }
        fetchDate()
    }, [])
    return (
        <>
            <section>
                HOME
            </section>
        </>
    )
}

export default Home
