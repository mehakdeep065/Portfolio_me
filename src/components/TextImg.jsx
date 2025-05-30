import React from "react";

function TextImg({ imgSrc, reverseOrder, className,projectName, description ,linkSrc }) {
    return (
        <>
            <div className={` mt-14 mx-[7vw] flex rounded-2xl  border shadow-gray-600 w-10/12 ${className}  hover:shadow-2xl   hover:-translate-y-5 duration-75 `}>
                {reverseOrder ? (
                    <>
                        <div>
                            <img className={`rounded-l-2xl `}
                             src={imgSrc} alt="project image" />
                        </div>
                        <div className="mt-20 ml-20  flex flex-col gap-6 w-[50vw]  ">
                            <h1 className="text-3xl">{projectName}</h1>
                            <p className="font-extralight w-4/5">{description}</p>
                           <a href={linkSrc} > <button className="border-2 px-2 py-2 rounded-[80px] w-[10vw]">view project</button></a> 
                        </div>

                    </>) : (
                    <>
                        <div className="mt-20 ml-20  flex flex-col gap-6 w-[50vw]  ">
                            <h1 className="text-3xl">{projectName}</h1>
                            <p className="font-extralight w-4/5">{description}</p>

                           <a href={linkSrc} ><button className="border-2 px-3 py-2 rounded-[80px] w-[10vw]">view project</button></a> 
                        </div>
                        <div>
                            <img src={imgSrc} className={`rounded-r-2xl `}  alt="project image" />
                        </div>
                    </>)}

            </div>

        </>
    );
}

export default TextImg;
