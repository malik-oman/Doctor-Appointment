import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>



      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Prescripto is your trusted healthcare partner, designed to simplify the way you book doctor appointments online. From general physicians to top specialists, we connect you with qualified doctors who are available at your convenience. With secure booking, instant confirmations, and easy rescheduling options, Prescripto ensures that you receive the right care at the right time without any hassle..</p>
          <p>Our platform helps you find doctors by specialty, location, and availability. With just a few clicks, you can schedule consultations and manage your health with ease.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We are committed to improving patient care by bridging the gap between doctors and patients. Fast, reliable, and user-friendly — that’s Prescripto for you.</p>
        </div>
      </div>

        <div className='text-xl my-4'>
          <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
        </div>
        <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Efficiency:</b>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>

          <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Convenience:</b>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>

          <div className='border px-10  md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
            <b>Personalization:</b>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>

        </div>
    </div>
  )
}

export default About