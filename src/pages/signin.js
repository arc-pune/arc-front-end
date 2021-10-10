import React , { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"

const Signin = ({ setSignin }) => {
  const [ishead , setIshead ] = useState(true);
  const onHandlechange = () => {
    if(window.innerWidth > 600){
      setIshead(true)
    }
    else {
      setIshead(false)
    }
  }
  useEffect(() => {
    window.addEventListener("resize" , onHandlechange)
  })
  return (
    <div class="text-gray-600 body-font md:min-w-screen md:h-screen left-0 top-0 inset-0 z-50 fixed">
      <div class="absolute bg-gray-700 opacity-80 inset-0 z-0"></div>
      <div className="relative m-6 my-10 lg:px-20 lg:py-10 " style={{marginTop:"1vh"}} >
        <div style={{maxWidth:"1100px"}} class="container md:min-w-5xl md:h-full  mx-auto justify-center flex flex-wrap sm:flex-nowrap ">
          <div
            class="lg:max-w-lg lg:w-1/3 lg:p-auto sm:w-1/2 md:py-2 px-5 md:w-1/2 w-full "
            style={{ backgroundColor: "#faaf4f" }}
          >
            <button
              className="petailDetail__cross -px-10 -py-10 "
              onClick={() => {
                setSignin(false);
              }}
            >
              <img src="/Assets/icons/cross.svg" alt="cross" />
            </button>
            <div
              class="md:w-full h-full flex flex-col py-5 -mt-5 lg:-mt-20 text-center justify-center sm:text-left 
"
            >
              <div class="image">
                <img
                  src="/Assets/images/image 8.png"
                  alt="arc"
                  class="w-1/2 mx-auto sm:mx-10 my-auto sm:my-10 sm:mt-5 -mt-6"
                ></img>
              </div>
              <div class="mx-auto sm:mx-10 my-2 sm:text-2xl text-1xl md:font-sans font-bold title-font text-black ">
                Help our furry little friends find a home for themselves.
              </div>
            </div>
          </div>
          <div class="lg:flex-grow w-full lg:font-semibold md:w-3/4 px-5 flex flex-col items-center text-center text-black  bg-white dark:text-white dark:bg-black">
            <div class="relative flex w-full md:justify-center m-auto justify-center">
              <div class="mx-5 md:w-full md:pt-25 lg:px-20 lg:py-10 py-5 lg:pb-16 lg:w-full xl:w-full w-full items-center">
               { ishead ?  <p className="font-bold text-3xl md:pb-10 opacity-0 md:opacity-100"> Hello! Please tell us a little about yourself </p> : ""}
                <div className="md:grid md:grid-cols-2 md:gap-6 mt-0" >
                  <div>
                    <p for="hero-field" class="leading-7 text-left text-sm md:text-base">
                      First Name
                    </p>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder="Your Firstname"
                      class="w-full bg-gray-100  lg:my-5 rounded border mb-2  bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-sm md:text-base md:py-1 outline-none text-black dark:text-white px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <p for="hero-field" class="leading-7 text-left text-sm -mt-1 md:text-base">
                      Last Name
                    </p>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Your Lastname"
                      class="w-full bg-gray-100 rounded-md  lg:my-5 border mb-5  bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-sm md:text-base md:py-1 outline-none text-black dark:text-white px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <p for="hero-field" class="leading-7 text-left text-sm -mt-3 md:text-base">
                      Phone Number
                    </p>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91"
                      class="w-full bg-gray-100 rounded-md  lg:my-5 border mb-5  bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-sm md:text-base md:py-1 outline-none text-black dark:text-white px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <div>
                    <p for="hero-field" class="leading-7 text-left -mt-3 text-sm md:text-base">
                     Alt-Phone Number
                    </p>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91"
                      class="w-full bg-gray-100 rounded-md  lg:my-5 border mb-5  bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-sm md:text-base outline-none text-black dark:text-white md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <p for="hero-field" class="leading-7 text-left -mt-3 text-sm md:text-base">
                  Email Address
                </p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example.email@yourmail.com"
                  class="w-full bg-gray-100 rounded-md  lg:my-5 border mb-5  bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-sm md:text-base outline-none text-black dark:text-white md:py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                
                <div className="loginSignup">
                  <button class="bg-transparent text-sm lg:my-5 text-center bg-red-500 hover:bg-red-700 md-4 w-4/5 p-auto text-white font-semibold py-2 border border-red-400 rounded-lg">
                    Confirm Sign In
                  </button>
                </div>
                <div className="flex justify-center -mt-2" >
                <h2>Already a user?</h2> &nbsp;&nbsp;
                <h1 className="text-blue-400"> Sign in</h1> 
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;