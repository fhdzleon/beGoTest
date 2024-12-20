/* eslint-disable @next/next/no-img-element */
import React from "react";

const NavBar = () => {
  return (
    <div className="max-w-md w-full justify-between items-center  flex">
      <img src="/back.svg" alt="back" />
      <p className="text-textColor   text-[20px]">Cargo Orders</p>
      <img src="/notification.svg" alt="notifications" />
    </div>
  );
};

export default NavBar;
