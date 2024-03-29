import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";

const SearchResultHeader = () => {
  const { setImageSearch } = useContext(Context);

  const [selectedMenu, setSelectedMenu] = useState("All");

  useEffect(() => {
    return () => setImageSearch(false);
  }, []);

  const clickHandler = (menu) => {
    let isTypeImage = menu.name === "Images";
    setSelectedMenu(menu.name);
    setImageSearch(isTypeImage ? true : false);
  };
  return (
    <div
      className="p-[15px] pb-0 md:pr-5 
        md:pt-7 border-b border-[#ebebeb] 
        flex flex-col items-center md:block 
        sticky top-0 bg-white "
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <Link to="/">
            <img className="hidden md:block w-[92px] mr-10" src={Logo} alt="" />
          </Link>
          <SearchInput />
        </div>

        <div className="hidden md:block">
          <ProfileIcon />
        </div>
      </div>

      <div className="flex ml-[-12px] mt-3">
        {menu.map((menu, idx) => (
          <span
            key={idx}
            className={`relative flex items-center p-3 text-[#5f6368] cursor-pointer ${
              selectedMenu === menu.name ? " text-[#1a73e8]" : ""
            }`}
            onClick={() => clickHandler(menu)}
          >
            <span className="hidden md:block mr-2">{menu.icon}</span>
            <span className="text-sm">{menu.name}</span>
            {selectedMenu === menu.name && (
              <span className="absolute h-[3px] w-[calc(100%-20px)] bg-[#1a73e8] bottom-0 left-[1l0px] " />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
