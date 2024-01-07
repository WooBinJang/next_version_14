import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Link className="mr-5" href={"/"}>
        NEXT JS
      </Link>
      <Link className="mr-5" href={"/users"}>
        USERS
      </Link>
      <Link className="mr-5" href={"/admin"}>
        ADMIN
      </Link>
    </div>
  );
};

export default NavBar;
