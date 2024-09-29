import about from './about.jpg'
import appointment from './appointment.webp'
import arrow_icon from './arrow_icon.svg'
import Business from './Bussiness.png'
import chats_icon from './chats_icon.svg'
import contact_us from './contact_us.webp'
import cross_icon from './cross_icon.png'
import dropdown_icon from './dropdown_icon.svg'
import group_profiles from './group_profiles.png'
import header_img from './header_img.jpg'
import Health_and_Fitness from './Health and Fitness.png'
import info_icon from './info_icon.svg'
import Junior_img from './Junior_img.png'
import Mentor1 from './Mentor1.jpg'
import Mentor2 from './Mentor2.jpeg'
import Mentor3 from './Mentor3.jpeg'
import Mentor4 from './Mentor4.jpeg'
import Mentor5 from './Mentor5.jpeg'
import Mentor6 from './Mentor6.jpeg'
import menu_icon from './menu_icon.svg'
import profile_pic from './profile_pic.png'
import razorpay_logo from './razorpay_logo.png'
import Spirtuality from './Spirtuality.webp'
import stripe_logo from './stripe_logo.png'
import Technology from './Technology.png'
import upload_area from './upload_area.png'
import upload_icon from './upload_icon.png'
import verified_icon from './verified_icon.svg'
import Logo from './Logo.jpg'

export const assets = {
    appointment,
    header_img,
    group_profiles,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_us,
    about,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_area,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    Logo
}

export const specialityData = [
    {
        speciality: 'Bussiness',
        image: Business
    },
    {
        speciality: 'Junior',
        image: Junior_img
    },
    {
        speciality: 'Health and Fitness',
        image: Health_and_Fitness
    },
    {
        speciality: 'Spirtuality',
        image: Spirtuality
    },
    {
        speciality: 'Technology',
        image: Technology
    },
]

export const mentors = [
    { 
       _id:'Mentor1',
      image: Mentor4,
      name: 'Veronicahhy',
      designation: 'Software Engineer',
      location: 'Hyderabad',
      experience: 6,
      company: 'google',
      description:
        "Hello there! I'm a software engineer who specializes in data structures and algorithms. I have worked for the past 4 years at Google, and have taken 70+ interviews at Google and more than 100 interviews in various product-based companies.\n\n\n\nI'm excited to offer you mentorship based on my knowledge and experience. If you want to grow your skillsets in data structures and algorithms, let's chat! Additionally, I can help you with your resume, interview preparation, and career planning.\n\nFeel free to let me know exactly how I can help you. I look forward to hearing from you! If you still have doubt, email me at Veronica2126@gmail.com",
      socialLinks: [
        'https://www.linkedin.com',
        'https://twitter.com',
        'https://www.instagram.com',
      ],
      speciality: 'Technology',
      attributes: ['2 Sessions Per Week', 'Task Assignment & Resources'],
      skills: ['Spark', 'Big Data', 'Data Warehousing', 'Python', 'SQL'],
      for: ['Fresher', 'Working Professional'],
      targetAudience: [
        'Fullstack Developer',
        'Backend Developer',
        'Frontend Developer',
      ],
    },
    { 
      _id:'Mentor2',
      image: Mentor5,
      name: 'Priya',
      designation: 'Software Engineer',
      location: 'Hyderabad',
      company: 'amazon',
      experience: 6,
      description:
        "Hello there! I'm a software engineer who specializes in data structures and algorithms. I have worked for the past 4 years at Google, and have taken 70+ interviews at Google and more than 100 interviews in various product-based companies.\n\n\n\nI'm excited to offer you mentorship based on my knowledge and experience. If you want to grow your skillsets in data structures and algorithms, let's chat! Additionally, I can help you with your resume, interview preparation, and career planning.\n\nFeel free to let me know exactly how I can help you. I look forward to hearing from you! If you still have doubt, email me at Veronica2126@gmail.com",
      socialLinks: [
        'https://www.linkedin.com',
        'https://twitter.com',
        'https://www.instagram.com',
      ],
      speciality: 'Spirtuality',
      attributes: ['2 Sessions Per Week', 'Task Assignment & Resources'],
      skills: ['Spark', 'Big Data', 'Data Warehousing', 'Python', 'SQL'],
      for: ['Fresher', 'Working Professional'],
      targetAudience: [
        'Fullstack Developer',
        'Backend Developer',
        'Frontend Developer',
      ],
    },
    {
      _id:'Mentor3',
      image: Mentor6,
      name: 'Sanjana',
      designation: 'Software Engineer',
      location: 'Hyderabad',
      experience: 6,
      company: 'microsoft',
      description:
        "Hello there! I'm a software engineer who specializes in data structures and algorithms. I have worked for the past 4 years at Google, and have taken 70+ interviews at Google and more than 100 interviews in various product-based companies.\n\n\n\nI'm excited to offer you mentorship based on my knowledge and experience. If you want to grow your skillsets in data structures and algorithms, let's chat! Additionally, I can help you with your resume, interview preparation, and career planning.\n\nFeel free to let me know exactly how I can help you. I look forward to hearing from you! If you still have doubt, email me at Veronica2126@gmail.com",
      socialLinks: [
        'https://www.linkedin.com',
        'https://twitter.com',
        'https://www.instagram.com',
      ],
      speciality: 'Junior',
      attributes: ['2 Sessions Per Week', 'Task Assignment & Resources'],
      skills: ['Spark', 'Big Data', 'Data Warehousing', 'Python', 'SQL'],
      for: ['Fresher', 'Working Professional'],
      targetAudience: [
        'Fullstack Developer',
        'Backend Developer',
        'Frontend Developer',
      ],
    },
    {
      _id:'Mentor4',
      image: Mentor1,
      name: 'Josh',
      designation: 'Software Engineer',
      location: 'Hyderabad',
      company: 'TCS',
      experience: 6,
      description:
        "Hello there! I'm a software engineer who specializes in data structures and algorithms. I have worked for the past 4 years at Google, and have taken 70+ interviews at Google and more than 100 interviews in various product-based companies.\n\n\n\nI'm excited to offer you mentorship based on my knowledge and experience. If you want to grow your skillsets in data structures and algorithms, let's chat! Additionally, I can help you with your resume, interview preparation, and career planning.\n\nFeel free to let me know exactly how I can help you. I look forward to hearing from you! If you still have doubt, email me at Veronica2126@gmail.com",
      socialLinks: [
        'https://www.linkedin.com',
        'https://twitter.com',
        'https://www.instagram.com',
      ],
      speciality: 'Health and Fitness',
      attributes: ['2 Sessions Per Week', 'Task Assignment & Resources'],
      skills: ['Spark', 'Big Data', 'Data Warehousing', 'Python', 'SQL'],
      for: ['Fresher', 'Working Professional'],
      targetAudience: [
        'Fullstack Developer',
        'Backend Developer',
        'Frontend Developer',
      ],
    },
    {  
        _id:'Mentor5',
        image: Mentor2,
        name: 'Rahul',
        designation: 'Software Engineer',
        location: 'Hyderabad',
        company: 'TCS',
        experience: 6,
        description:
          "Hello there! I'm a software engineer who specializes in data structures and algorithms. I have worked for the past 4 years at Google, and have taken 70+ interviews at Google and more than 100 interviews in various product-based companies.\n\n\n\nI'm excited to offer you mentorship based on my knowledge and experience. If you want to grow your skillsets in data structures and algorithms, let's chat! Additionally, I can help you with your resume, interview preparation, and career planning.\n\nFeel free to let me know exactly how I can help you. I look forward to hearing from you! If you still have doubt, email me at Veronica2126@gmail.com",
        socialLinks: [
          'https://www.linkedin.com',
          'https://twitter.com',
          'https://www.instagram.com',
        ],
        speciality: 'Spirtuality',
        attributes: ['2 Sessions Per Week', 'Task Assignment & Resources'],
        skills: ['Spark', 'Big Data', 'Data Warehousing', 'Python', 'SQL'],
        for: ['Fresher', 'Working Professional'],
        targetAudience: [
          'Fullstack Developer',
          'Backend Developer',
          'Frontend Developer',
        ],
    },
    
    {   _id:'Mentor6',
        image: Mentor5,
        name: 'Anisha',
        designation: 'Software Engineer',
        location: 'Hyderabad',
        company: 'TCS',
        experience: 6,
        description:
          "Hello there! I'm a software engineer who specializes in data structures and algorithms. I have worked for the past 4 years at Google, and have taken 70+ interviews at Google and more than 100 interviews in various product-based companies.\n\n\n\nI'm excited to offer you mentorship based on my knowledge and experience. If you want to grow your skillsets in data structures and algorithms, let's chat! Additionally, I can help you with your resume, interview preparation, and career planning.\n\nFeel free to let me know exactly how I can help you. I look forward to hearing from you! If you still have doubt, email me at Veronica2126@gmail.com",
        socialLinks: [
          'https://www.linkedin.com',
          'https://twitter.com',
          'https://www.instagram.com',
        ],
        speciality: 'Bussiness',
        attributes: ['2 Sessions Per Week', 'Task Assignment & Resources'],
        skills: ['Spark', 'Big Data', 'Data Warehousing', 'Python', 'SQL'],
        for: ['Fresher', 'Working Professional'],
        targetAudience: [
          'Fullstack Developer',
          'Backend Developer',
          'Frontend Developer',
        ],
    },
    {   
        _id:'Mentor7',
        image: Mentor3,
        name: 'Rohan',
        designation: 'Software Engineer',
        location: 'Hyderabad',
        company: 'TCS',
        experience: 6,
        description:
          "Hello there! I'm a software engineer who specializes in data structures and algorithms. I have worked for the past 4 years at Google, and have taken 70+ interviews at Google and more than 100 interviews in various product-based companies.\n\n\n\nI'm excited to offer you mentorship based on my knowledge and experience. If you want to grow your skillsets in data structures and algorithms, let's chat! Additionally, I can help you with your resume, interview preparation, and career planning.\n\nFeel free to let me know exactly how I can help you. I look forward to hearing from you! If you still have doubt, email me at Veronica2126@gmail.com",
        socialLinks: [
          'https://www.linkedin.com',
          'https://twitter.com',
          'https://www.instagram.com',
        ],
        speciality: 'Bussiness',
        attributes: ['2 Sessions Per Week', 'Task Assignment & Resources'],
        skills: ['Spark', 'Big Data', 'Data Warehousing', 'Python', 'SQL'],
        for: ['Fresher', 'Working Professional'],
        targetAudience: [
          'Fullstack Developer',
          'Backend Developer',
          'Frontend Developer',
        ],
    },
]