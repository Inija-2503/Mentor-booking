# Mentor-booking

# MENTORHUB

College Mentor-Mentee Selection Platform

Overview:
This project aims to create a mentor-mentee selection system for a college where each professor acts as a mentor. Mentors will be categorized based on their skills into five predefined categories. Students, or mentees, can choose their mentors based on their interests using a filtering system. The system will allow students to view detailed mentor profiles and select a mentor who aligns with their academic and professional goals.

The plan is to use MERN stack \
M -> MongoDB || for data storage, read, write or PostgreSQL is also good to go \
E -> Express || middleware to connect the FrontEnd with BackEnd ( a framework of node ) \
R -> React Js || Frontend with css \
N -> Node Js || Backend activities

Group of 4: (Individual Roles)

1. React + Css
2. PostgreSql
3. Node js + Express js
4. Express js + Axios(api fetch) ( to handle http requests from React to Node js)

Use github to save the progress so that everyone can know others progress
Can git to make a sub branch with team members names & each can build upon that
Make sure to often merge the branches to check the working of integration

---

## Key Components:

### Categories of Mentors:

Technology: Professors specializing in technology fields like computer science, engineering, etc. \
Spirituality: Professors offering mentorship in personal growth, mindfulness, and spirituality. \
Business: Professors with skills in entrepreneurship, management, and finance. \
Health & Fitness: Professors with expertise in health, wellness, and physical fitness. \
Juniors: Professors focusing on guiding junior students in their early academic stages.

## Frontend Description:

Technologies:
React.js for building the user interface.
Optional: CSS-in-JS for styling, React Router for navigation.
Steps to Implement:
Student Login Page (Optional):

Feature: A simple login page allowing students to log in using their credentials.
Libraries/Tools: Authentication can be added using Firebase/Auth0 for simplicity, or a custom Node.js-based login system.
Fields: Email, Password, Remember Me checkbox.
Mentor Cards Display:

Feature: Upon login, all available mentors will be displayed as cards.

### Card Design:

Profile Photo: Display mentor’s image. \
Name: Display the mentor’s full name. \
Skills: Display the mentor’s key skills. \
Functionality: When a student clicks on a mentor’s card, a detailed profile page opens.

### Filtering System:

Feature: Students can filter mentors based on the five predefined categories (Technology, Spirituality, Business, Health & Fitness, Juniors).
Method: A dropdown or radio buttons to allow students to filter mentors based on their interests.
Component Logic: On selecting a category, only mentors from that category are displayed.
Detailed Mentor Profile (On Card Click):

Fields:
Description: A detailed description of the mentor’s expertise. \
Years of Experience: Number of years of mentorship/professional experience. \
Social Contacts: Links to the mentor’s social profiles (LinkedIn, personal website, etc.). \
Course Duration: Indicate how long the mentor’s course lasts or how long the student can be under the mentor’s guidance. \
Interactive Features:
Button to “Select Mentor” for the student to choose a mentor.
