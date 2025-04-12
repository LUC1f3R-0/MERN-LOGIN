import React from 'react'
import axiosInstance from '../api/axiosInstance'

const Home = () => {
    React.useEffect(() => {
        const fetchDate = async () => {
            const { data } = await axiosInstance('/')
            console.log(data)
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
