import React, {useState, useEffect, useContext} from "react";



function Nav(){
return (
    <>
        <div className="flex flex-row justify-center space-x-28  w-screen p-10 px-0 bg-black ">
                <p className="text-5xl text-white text-opacity-65 -ml-20 hover: cursor-pointer">
                    Leaderbords
                </p>
                <p className="text-5xl text-white text-opacity-65 hover: cursor-pointer">
                    Home
                </p>
           
        </div>
    </>
)

}

export default Nav;