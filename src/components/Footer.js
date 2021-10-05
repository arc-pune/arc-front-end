import React from 'react'
import "../index.css"

export const Footer = () => {
    return (
        <footer className="">
            <div 
            className="grid lg:grid-cols-2 sm:grid-cols-none gap-4 px-2 py-5 sm:px-6 lg:px-48"
            style={
                {
                    backgroundColor: "#FAAF4F",   
                }
            }>
                
                  <div className="flex justify-center lg:justify-start items-center my-5 lg:my-20">
                    <a href="/" >
                        <img
                        className="block lg:hidden h-40 w-auto "
                        src="/Assets/icons/logo.svg"
                        alt="Logo"
                        />
                        <img
                        className="hidden lg:block h-40 w-auto"
                        src="/Assets/icons/logo.svg"
                        alt="Logo"
                        />
                    </a>
                  </div>

                <div className="my-5 lg:my-20">
                    <div className="flex justify-center lg:justify-end">
                        <h3 className="font-sans font-bold text-right">Take a step forward & adopt them,<br/>They need your love & care.<br /></h3>
                    </div>
                    <div className="flex justify-center py-10 lg:justify-end">
                        <a href="/">
                            <img src="/Assets/icons/instagram-footer.svg" alt="Instragram footer"></img>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        
    )
}


