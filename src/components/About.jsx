import React from 'react'

function About() {
  return (
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>
            Hello, I'm Pushkar, a passionate Web Developer with a keen eye for frontend development with React.
            With a background in IT, I strive to create impactful and visually stunning Software 
            solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className='text-green-600 font-semibold text-xl'>Education & Training</h1>
        <span>
            4th year undergrad at Punjab Engineering College, Chandigarh.<br/>
            BTech in Computer Science(Data Science).
        </span>
       <br />
       <br />

        <h1 className='text-green-600 font-semibold text-xl'>Skills & Expertise</h1>
        <span>
            Proficient in C++, JavaScript, Experienced with React.<br/>
            Strong grasp of OOPS, Operating System, DBMS.<br />
            Excellent Problem-solving skills,
            Effective communicator and collaborator.  
        </span>

        <br />
       <br />

        <h1 className='text-green-600 font-semibold text-xl'>Professional Experience</h1>
        <span>
            Worked at <span className='text-blue-700'>
                NIC(National Informatics Center) Govt of India
                </span> as a Software Development Intern for 6 months.
        </span>
        </div>

        <br />
        <br />
        <h1 className='text-green-600 font-semibold text-xl'>Achievements & Rewards</h1>
        <ul>
           <li> Received a 4-star rating on HackerRank for solving SQL problems.</li>
<li>Solved over 350 Data Structures & Algorithms problems across various platforms like geeksforgeeks, leetcode, etc.</li>
 <li></li>
 Top Contributor in DSA Supreme2.0 Course By Love Babbar.
 Participated in the Hackathon organized by ACM-CSS in the college.
        </ul>

        <br />
       <br />

        <h1 className='text-green-600 font-semibold text-xl '>Mission Statement</h1>
        <span>
            My mission is to leverage my skills and creativity to deliver innovative solutions that exceed client expectations and contribute positively to the digital landscape. 
            I am committed to continious learning and growth, always seeking new challenges and opportunites to expand my horizons.
        </span>
    </div>
  )
}

export default About