import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Mentorhub is your go-to platform for connecting with expert mentors in various fields, designed to help you grow both personally and professionally. Whether you are seeking career advice, learning new skills, or looking for guidance on a specific project, our community of mentors is here to support your journey. Join us today and take the next step towards achieving your goals</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91 8618106176              Inija
                <li>+91 6360630012         prajwal M B 
                </li>

            </li>
            <li>mentorhub719@gmail.com
            </li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Trusted  and  Skillfull  Mentors @  your fingertips</p>
      </div>

    </div>
  )
}

export default Footer
