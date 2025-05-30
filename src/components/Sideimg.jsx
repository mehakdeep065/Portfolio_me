import React from "react";
function Sideimg({className}) {
    return (
        <>
            <div  className={`flex bgimg bg-cover bg-center bg-no-repeat w-1/2  ${className} `}>         
                <img className="z-1" src="image.png" alt="photo background" />
            </div>
        </>
    );
}

export default Sideimg;