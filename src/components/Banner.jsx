import React from "react";


function Banner({ className, shortText,showImg }) {
    return (
        <> <div className="flex justify-between">
            <div className={` flex flex-col gap-4 mx-[10vw] my-16  w-1/4 ${className}  `}>
                <p className="text-[#3a8cd0]  ">Web Devloper</p>
                <h1 className="text-4xl">Hello,My name is Mehakdeep Singh.</h1>
                <p className="font-light ">{shortText}</p>
                <div className="flex gap-5">
                    <a className="  hover:-translate-y-2 duration-200"
                        href="https://github.com/mehakdeep065"
                        target="_blank" rel="noopener noreferrer"   >
                        <button className="border  px-3 py-0.5 rounded-[8px] bg-[#3a8cd0] text-white  font-semibold">GitHub</button>
                    </a>
                    <a className=" hover:-translate-y-2 duration-200"
                        href="https://linkedin.com/in/mehaksingh065"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="border-2 px-3 py-0.5 rounded-[8px]">LinkedIn</button>
                    </a>
                </div>
            </div>
            {/* image inside div  */}
            
            {showImg && (
                    <div className="flex bgimg bg-cover bg-center bg-no-repeat">
                        <img src="image.png" alt="photo background" />
                    </div>
                )}
            
        </div>

        </>
    );
}

export default Banner;