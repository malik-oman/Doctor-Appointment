import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
         <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* ...... left side.... */}

        <div>
             <img className='mb-5 w-40' src={assets.logo} alt="" />
             <p className='w-full md:w-2/3 text-gray-600 leading'>Prescripto is your trusted partner in simplifying healthcare. Book appointments with certified doctors, access prescriptions online, and manage your medical needs anytime, anywhere. We are committed to providing reliable, secure, and easy healthcare solutions for you and your family.</p>
        </div>

           {/* ...... center side.... */}

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
       

           {/* ...... right side.... */}

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+92-311-7343706</li>
            <li>malikxoman@gmail.com</li>
          </ul>
        </div>

         </div>
         <div>
          <hr />
          <p className='py-5 text-sm text-center'>Copyright 2025@ Prescripto - All Right Reserved. </p>
         </div>
    </div>
  )
}

export default Footer