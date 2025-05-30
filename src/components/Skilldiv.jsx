import React from "react";
function Skilldiv({SkillName,SkillImg,SkillRef}) {
    return (
        <>
        <a href={SkillRef}>
            <div className="flex border  p-5 rounded-2xl   hover:shadow-2xl hover:shadow-blue-400  hover:-translate-y-5 duration-200">
                <div className="mx-10 my-5 flex flex-col gap-6 w-[50vw] justify-center  ">
                    <h1 className="text-3xl">{SkillName}</h1>
                  
                </div>
                <div>
                    <img className={`rounded-xl `} src={SkillImg} alt="project image" />
                </div>
            </div>
        </a>
        </>
    );
}

export default Skilldiv;