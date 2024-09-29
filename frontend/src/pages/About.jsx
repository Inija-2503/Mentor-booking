import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>Welcome to MentorHub, your trusted platform for connecting with expert mentors in various fields. At MentorHub, we understand the importance of personalized guidance and the impact it can have on your professional and personal growth. That’s why we have created a space where individuals can easily find and schedule appointments with mentors who are eager to share their knowledge and expertise.</p>
        <p>MentorHub is committed to empowering learners and professionals by offering seamless access to mentorship. Whether you are looking to advance your career, learn new skills, or seek advice from experienced professionals, MentorHub is here to support your journey with top-notch mentors and an intuitive platform. Start your mentoring journey today with MentorHub.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>At MentorHub, our vision is to create a world where knowledge and guidance are accessible to everyone, regardless of location or background. We aim to bridge the gap between aspiring learners and experienced mentors by providing a platform that fosters meaningful connections and empowers individuals to achieve their fullest potential</p>
          <p> Through continuous innovation, we envision MentorHub as a global community where mentorship is not just a service, but a transformative experience that drives personal and professional growth.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Seamless mentor appointment scheduling that adapts to your busy life.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access a diverse network of experienced mentors at your fingertips.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Get customized mentor recommendations to match your career or personal growth goals.</p>
        </div>
      </div>

    </div>
  )
}

export default About