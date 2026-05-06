import React from 'react'

const About = () => {
    return (
        <div className='mx-auto max-w-2xl my-10 p-8 flex flex-col gap-4 text-lg'>
            <h1 className='text-3xl font-bold'>About Us</h1>
            <p>Welcome to our about page!</p>
            <p>We are a team of passionate developers dedicated to providing the best URL shortening service in the market. Our mission is to make it easy for users to shorten their long URLs and share them with others.</p>
            <h2 className='text-3xl font-bold'>Our Story</h2>
            <p>Our journey began when we realized the need for a simple and efficient URL shortener that respects user privacy. We wanted to create a platform that allows users to shorten their URLs without any tracking or data collection. With this vision in mind, we set out to develop our URL shortener.</p>
            <h2 className='text-3xl font-bold'>Our Values</h2>
            <p>At our core, we value simplicity, privacy, and user satisfaction. We believe that everyone should have access to a reliable URL shortening service that doesn't compromise their privacy. We are committed to providing a seamless experience for our users while ensuring that their data remains secure.</p>
            <h2 className='text-3xl font-bold'>Contact Us</h2>
            <p>If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us. We would love to hear from you!</p>
        </div>
    )
}

export default About
