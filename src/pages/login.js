import React from "react";
import "../styles/login.css";

const Login = ({ setLogin }) => {
  return (
    <div className='min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover'>
      <div className='absolute bg-black opacity-80 inset-0 z-0'></div>
      <div className='w-full  max-w-7xl p-5 relative mx-auto my-auto rounded-xl shadow-lg  '>
        <div className='loginmain'>
          <div className='cancelparent'>
            <button
              className='cancel'
              onClick={() => {
                setLogin(false);
              }}
            >
              &times;
            </button>
          </div>
          <div className='login'>
            <div className='section-1'>
              <div className='content'>
                <div className='image'>
                  <img src='/Assets/images/image 8.png' alt='arc'></img>
                </div>
                <div className='text'>
                  Help our furry little friends find a home for themselves.
                </div>
              </div>
            </div>
            <div className='section-2'>
              <form className='form'>
                <div className='form-control'>
                  <label htmlFor='email'>Email</label>
                  <input
                    className='loginp'
                    type='text'
                    required
                    id='email'
                    placeholder='example.mail@yourmail.com'
                  ></input>
                </div>
                <div className='form-control'>
                  <label htmlFor='password'>Password</label>
                  <input
                    className='loginp'
                    type='password'
                    required
                    id='password'
                    placeholder='Password'
                  ></input>
                </div>
                <div className='buttonparent'>
                  <div className='buttons'>
                    <p className='signin button'>Login</p>
                    <p className='signup button'>New User? Sign up</p>
                  </div>
                  <p className='or'>OR</p>
                  <div className='google button'>
                    <p>
                      <img
                        src='/Assets/images/google.png'
                        alt='google'
                        className='inline'
                      />
                      continue with google
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
