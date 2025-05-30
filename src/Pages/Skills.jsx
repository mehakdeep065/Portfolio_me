import React from "react";
import Navbar from "../components/Navbar";
import TextImg from "../components/TextImg";
import Skilldiv from "../components/Skilldiv";

function Skills() {
    return (
        <>
            <Navbar />
            <h1 className="flex  justify-center text-4xl my-10 mx-[40vw] px-5 py-2 rounded-2xl  hover:rotate-6">SKILLS</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <Skilldiv SkillName ="HTML" SkillImg="Html.png" SkillRef="https://developer.mozilla.org/en-US/docs/Web/HTML" />
                <Skilldiv SkillName ="CSS" SkillImg="CSS.png" SkillRef="https://developer.mozilla.org/en-US/docs/Web/CSS" />
                <Skilldiv SkillName ="Tailwind CSS" SkillImg="Tailwind.png" SkillRef="https://tailwindcss.com/"  />
                <Skilldiv SkillName ="JS" SkillImg="JS.png" SkillRef="https://developer.mozilla.org/en-US/docs/Web/JavaScript"  />
                <Skilldiv SkillName ="TS" SkillImg="TS.png" SkillRef="https://www.typescriptlang.org/" />
                <Skilldiv SkillName ="React.js" SkillImg="React.png" SkillRef="https://react.dev/" />
                <Skilldiv SkillName ="Express.js" SkillImg="express.png" SkillRef="https://expressjs.com/" />
                <Skilldiv SkillName ="Mongoo DB" SkillImg="mongodb.png" SkillRef="https://www.mongodb.com/" />
                <Skilldiv SkillName ="Basic Figma" SkillImg="figma.png" SkillRef="https://www.figma.com/" />
              
            </div>
       
        </>
    );
}

export default Skills;