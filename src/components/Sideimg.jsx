import React from "react";
function Sideimg({className}) {
    return (
        <>
            <div  className={`flex bgimg bg-cover bg-center bg-no-repeat   ${className} `}>         
                <img className="relative left-0.5" src="image.png" alt="photo background" />
            </div>
        </>
    );
}

export default Sideimg;