import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <a href="/" className="mr-5">
        Next.js
      </a>
      <a href="/users">Users</a>
    </div>
  );
};

export default NavBar;
