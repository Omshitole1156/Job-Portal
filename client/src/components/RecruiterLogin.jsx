import React, { useContext, useEffect, useState } from "react";

import { assets } from "../assets/assets";
import App from "../App";
import { AppContext } from "../context/AppContext";
import { useFetcher } from "react-router-dom";

const RecruiterLogin = () => {
   
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [image, setImage] = useState(false);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);
  const {setShowRecruiterLogin} = useContext(AppContext)
  const onSumitHandler = async (e) =>{
    e.preventDefault()

    if(state === 'Sign Up' && !isTextDataSubmited){
        setIsTextDataSubmited(true);
    }
  }

  useEffect(()=>{
    document.body.style.overflow = 'hidden'

    return () =>{
         document.body.style.overflow = 'unset'

    }

  },[])
  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center bg-black/30 backdrop-blur-sm ">
      <form onSubmit={onSumitHandler} className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue</p>
        {state === "Sign Up" && isTextDataSubmited ? (
          <>
           <div className="flex items-center gap-4 my-10">
            <label htmlFor="image">
                <img className="w-16 rounded-full" src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                <input onChange={e => setImage(e.target.files[0])} type="file" id="image" hidden />
            </label>
            <p>Upload Company <br /> logo</p>
           </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                <img src={assets.person_icon} alt="" />
                <input
                  className="outline-none text-sm"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Company Name"
                  required
                />
              </div>
            )}

            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="" />
              <input
                className="outline-none text-sm"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email Id"
                required
              />
            </div>
            <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="" />
              <input
                className="outline-none text-sm "
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="password"
                required
              />
            </div>
          </>
        )}
       { state === 'Login' &&  <p className="text-sm cursor-pointer text-blue-600 mt-4 ">
          Forgot Password?
        </p>} 
       

        <button type="sumbit" className="bg-blue-600 w-full text-white py-2 rounded-full mt-4 ">
          {state === "Login" ? "login" : isTextDataSubmited ? "create account" :'next'}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <span
              className="cursor-pointer text-blue-600"
              onClick={() => setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="cursor-pointer  text-blue-600"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}
        <img onClick={e => setShowRecruiterLogin(false)} className="absolute top-5 right-5 cursor-pointer" src={assets.cross_icon} alt="" />
      </form>
    </div>
  );
};

export default RecruiterLogin;
