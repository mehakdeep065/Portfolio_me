import React from "react";
import Navbar from "../components/Navbar";
import TextImg from "../components/TextImg";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
function Home() {
  return (
    <>
      <Navbar />
      <Banner showImg={true}/>
      <h1 className="flex justify-center mt-[15vw] text-3xl">Projects</h1>
      <hr className="flex justify-center border-2 mx-[46.9vw] rounded mt-2 border-amber-300" />
      <TextImg imgSrc="project1.PNG"
        projectName="Furniro"
        description="This is the full e-commarce website ."
        linkSrc="https://github.com/mehakdeep065/homework"
      />
      <TextImg imgSrc="project2.PNG"
        projectName="Spaak foodie"
        description="This is a website for display diffrent type of salads and food."
        reverseOrder={true}
        linkSrc="https://github.com/mehakdeep065/spaak"
      />
      {/* <TextImg imgSrc="projectimg.png"
          projectName="Spaak foodie" 
        description="This is the description for Project One."
        /> */}
      <Footer />
    </>
  );
}

export default Home;