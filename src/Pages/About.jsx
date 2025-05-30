import React from "react";
import Navbar from "../components/Navbar";
import TextButtons from "../components/TextButtons";
function About() {
    return (<>
        <Navbar  />
        <TextButtons className=" justify-center w-5/6   items-center  hover:shadow-2xl hover:shadow-blue-400  hover:-translate-y-5 duration-200 p-6 " 
        shortText={`Hi, I’m Mehakdeep Singh — a recent BCA graduate and a passionate MERN stack developer. I love building modern, responsive websites that not only look good but also work smoothly. My main focus is on React.js for creating fast and interactive user interfaces, and I use Tailwind CSS to design clean, mobile-friendly layouts with ease. \n
        Though I’m just starting out, I’ve already worked on several personal projects where I handled both frontend and backend using MongoDB, Express.js, React, and Node.js. I enjoy solving problems, writing clean code, and learning new tools that help me improve as a developer.\n
        Right now, I’m looking for opportunities to work on real-world projects, grow my skills, and be part of a team where I can contribute and learn every day. If you're looking for someone who's eager, curious, and ready to build — I’m your guy.`} />
        

    </>);
}

export default About;