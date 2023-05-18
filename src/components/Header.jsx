import React from "react";
import headerIcon from "../svg/headerIcon.svg";
import searchIcon from "../svg/searchIcon.svg";
import userIcon from "../svg/userIcon.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
    // console.log(dispatch(toggleMenu))
    console.log("hello");
  };

  return (
    <div className="flex flex-row shadow-md p-4 justify-between">
      <div className="flex flex-row mx-4">
        <img
          src={headerIcon}
          onClick={() => toggleMenuHandler()}
          className="w-7 h-10 mr-4 cursor-pointer"
          alt="header-icon"
        />
        <img
          alt="you-tube-logo"
          className="w-20 h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
        />
      </div>

      <div className="flex flex-row">
        <input
          className="w-96 h-10 rounded-l-full border border-gray-500 placeholder:text-gray-500 pl-4 "
          type="text"
          placeholder="Search"
        />

        <img
          src={searchIcon}
          className="w-14 h-10 px-5 border border-gray-500 rounded-r-full"
          alt="header-icon"
        />
      </div>

      <div className="mx-4">
        <img className="w-9 h-10 " src={userIcon} alt="user-icon" />
      </div>
    </div>
  );
};
export default Header;
