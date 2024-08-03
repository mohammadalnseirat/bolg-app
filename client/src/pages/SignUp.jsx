import { Button, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen mt-20">
      <div className="max-w-3xl mx-auto p-3 flex flex-col md:flex-row md:items-center gap-5">
        {/* left side */}
        <div className="flex-1">
          <Link to={"/"} className=" font-bold text-4xl dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg">
              FreePen
            </span>
            Blog
          </Link>
          <p className="text-md text-gray-500 font-[500] mt-5">
            Free Pen is a blog offering tips and resources for freelance
            writers, You can sign up with your email and password or with
            Google.
          </p>
        </div>
        {/* right side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username:" />
              <TextInput
                type="text"
                placeholder="Enter your name"
                id="username"
              />
            </div>
            <div>
              <Label value="Email:" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div className="relative">
              <Label value="Password:" />
              <TextInput
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                id="password"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-4 top-9 text-xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="absolute right-4 top-9 text-xl  cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <Button type="submit" gradientDuoTone={"pinkToOrange"}>
              Sign Up <HiOutlineArrowRight className="ms-2 mt-[2px] h-4 w-4" />
            </Button>
          </form>
          <div className="flex gap-3 text-sm mt-5">
            <p className="italic">
              - Already have an Account?{" "}
              <Link
                to={"/sign-in"}
                className="text-blue-800 font-semibold underline underline-offset-1 hover:text-red-500 transition-all ease-in duration-300"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
