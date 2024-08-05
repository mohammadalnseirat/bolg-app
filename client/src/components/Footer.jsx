import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            {" "}
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg">
                FreePen
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" className="cursor-pointer" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link as={Link} to="/about">
                  FreePen Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="cursor-pointer" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/mohammadalnseirat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="cursor-pointer" />
              <Footer.LinkGroup col>
                <Footer.Link as={Link} to="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="h-[2px] bg-gray-300" />
        <div className="w-full text-center sm:flex sm:items-center sm:justify-between font-semibold">
          <Footer.Copyright
            href="#"
            by="Mohammad Alnseirat"
            year={new Date().getFullYear()}
          />
          <div className="flex  items-center gap-6 sm:mt-0 mt-4 justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
              className="text-[#1877f2]"
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
              className="text-[#fd1d1d]"
            />
            <Footer.Icon href="#" icon={BsTwitter} className="text-[#1da1f2]" />
            <Footer.Icon
              href="https://github.com/mohammadalnseirat"
              icon={BsGithub}
              className="text-[#333]"
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
              className="text-[#ff8833]"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
