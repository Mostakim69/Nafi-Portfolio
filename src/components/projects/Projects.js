import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="SOCIAL MEDIA CLONE Design"
          des=" A social media clone application designed for effortless user interaction. It features posting, liking, and commenting functionalities with a modern UI."
          src={projectOne}
          linkedin="https://www.linkedin.com/in/md-nafiu-islam-nafiu-0a7439366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          website="https://www.behance.net/nafiu-islam-78"
        />
        <ProjectsCard
          title="E-commerce Website Design"
          des=" A responsive e-commerce website design that enhances user shopping experience. It features smooth navigation, modern UI, and easy product browsing."
          src={projectTwo}
          linkedin="https://www.linkedin.com/in/md-nafiu-islam-nafiu-0a7439366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          website="https://www.behance.net/nafiu-islam-78"
        />
        <ProjectsCard
          title="Chatting App Design"
          des=" A real-time chatting app design focused on seamless messaging. It offers a clean, intuitive interface for sending and receiving messages instantly."
          src="https://i.postimg.cc/prw5xGY1/2b55fbf6-1046-4432-912e-0a54d9356b72.jpg"
          linkedin="https://www.linkedin.com/in/md-nafiu-islam-nafiu-0a7439366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          website="https://www.behance.net/nafiu-islam-78"
        />
        <ProjectsCard
          title="SOCIAL MEDIA CLONE Design"
          des=" A modern social media clone design that enables users to connect and share content effortlessly. It features a clean UI with interactive posts, likes, and comments functionality"
          src= "https://i.postimg.cc/3RvWJjSy/c86bd85e-d980-4032-a09f-219e0cd94e4f.jpg"
          linkedin="https://www.linkedin.com/in/md-nafiu-islam-nafiu-0a7439366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          website="https://www.behance.net/nafiu-islam-78"
        />
        <ProjectsCard
          title="E-commerce Website Design"
          des=" An interactive e-commerce website design focused on user-friendly navigation and modern UI. It provides smooth product browsing and a seamless shopping experience."
          src="https://i.postimg.cc/L5WyBpkQ/a3ba66a2-b817-4692-9423-d02f3a60c2d3.jpg"
          linkedin="https://www.linkedin.com/in/md-nafiu-islam-nafiu-0a7439366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          website="https://www.behance.net/nafiu-islam-78"
        />
        <ProjectsCard
          title="Chatting App Design"
          des=" A real-time chatting application built for seamless communication. It allows users to send and receive messages instantly with a smooth and user-friendly interface."
          src={projectTwo}
          linkedin="https://www.linkedin.com/in/md-nafiu-islam-nafiu-0a7439366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          website="https://www.behance.net/nafiu-islam-78"
        />
      </div>
    </section>
  );
}

export default Projects