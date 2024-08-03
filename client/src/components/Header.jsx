import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap font-semibold text-md sm:text-xl dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg">
          FreePen
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          className=" hidden lg:inline focus:outline-none focus:border-indigo-600"
          rightIcon={AiOutlineSearch}
        />
      </form>
      <Button className="w-12 h-12 lg:hidden" color={"gray"} pill>
        <AiOutlineSearch className="mt-[3px] text-xl font-[900]" />
      </Button>
      <div className="flex items-center gap-2 md:order-2">
        <Button className="w-12 h-12 hidden sm:inline" color={"gray"} pill>
          <FaMoon />
        </Button>
        <Link to={"/sign-in"}>
          <Button gradientDuoTone="pinkToOrange" pill>
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path==='/'} as={'div'}>
          <Link to={"/"} className="text-lg">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/about'} as={'div'}>
          <Link to={"/about"} className="text-lg">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path==='/projects'} as={'div'}>
          <Link to={"/projects"} className="text-lg">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
