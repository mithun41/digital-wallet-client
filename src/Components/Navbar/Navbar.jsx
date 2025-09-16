import React from "react";
import { Link } from "react-router";

const Navbar = () => {

  return (
    <div className="my-4 flex justify-around">

      <Link to='/' className=" text-black m-2 px-2"> Home</Link>
      <Link to='/login' className="bg-amber-300 text-black m-2 px-2"> login</Link>
      <Link to='/Register' className="bg-amber-300 text-black m-2 px-2"> Register</Link>
  </div>
  )
};

export default Navbar;
