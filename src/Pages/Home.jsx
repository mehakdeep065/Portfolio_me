import React from "react";
import Navbar from "../components/Navbar";
import TextImg from "../components/TextImg";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Certificates from "../components/Certificates";
function Home() {
  return (
    <>
      <Navbar />
      <Banner showImg={true} />
      <h1 className="flex justify-center mt-[15vw] text-3xl">Projects</h1>
      <hr className="flex justify-center border-2 mx-[46.9vw] rounded mt-2 border-amber-300" />

      {/* project section  */}
      <TextImg imgSrc="project1.PNG"
        projectName="Furniro"
        description="This is the full e-commarce website ."
        linkSrc="https://homework-henna-five.vercel.app/"
      />
      <TextImg imgSrc="project3.PNG"
        projectName="Gym Website"
        description="This website only ui website make in react.js that is do noting much at the time."
        reverseOrder={true}
        linkSrc="https://gym-ten-virid.vercel.app/"
      />
      <TextImg imgSrc="project2.PNG"
        projectName="Spaak foodie"
        description="This is a website for display diffrent type of salads and food."
        linkSrc="https://github.com/mehakdeep065/spaak"
      />
      {/* certificate section  */}
      <h1 className='flex justify-center text-3xl mt-10 border-b-4 mx-[45.3vw] rounded border-amber-300 '>Certificates</h1>
      <div className="grid-cols-2 grid gap-5 m-10 ">
        <Certificates imgSrc="certificates/MERN.jpeg" />
        <Certificates imgSrc="certificates/m_gpt.jpg" />
        <Certificates imgSrc="certificates/m_hp_life_certificate.jpg" />
        <Certificates imgSrc="certificates/m_naukari_certificate.jpg" />
      </div>



      <Footer />
    </>
  );
}

export default Home;