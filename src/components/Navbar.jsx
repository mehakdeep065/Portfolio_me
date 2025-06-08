import React from "react";
import { Link } from "react-router-dom";


function Navbar({className}) {
    return (
        <>
            <div className="flex justify-between mx-28 my-3 z-10 ">
                <div>
                    <h2 className="font-bold text-3xl font-serif hover:rotate-6">MK</h2>
                </div>
                <div className={`flex gap-5 items-center mr-16 z-20 ${className} font-serif `}>
                    <Link to='/'>Home</Link>
                    <Link to='/About'>About</Link>
                    <Link to='/Skills'>Skills</Link>

                    <button className="border px-5 py-2 rounded bg-[#3a8cd0] text-white "><a href='/Resume/mehak_resume.pdf'>Downloard CV</a> </button>
                    {/* <Link to='/Contacts'>Contact</Link> */}

                </div>
            </div>
        </>
    );
}

export default Navbar;