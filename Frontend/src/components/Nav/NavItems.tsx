import { IoIosArrowDown } from "react-icons/io";

interface NavProps{
    title:string
    isLogoPresent?:boolean
}

export const NavItems = ({ title, isLogoPresent }:NavProps) => {

  return (
    <div className="flex items-center px-5">
      <div>{title}</div>
      {isLogoPresent === true ? (
        ""
      ) : (
        <div className="pt-1">
          <IoIosArrowDown size={20} />
        </div>
      )}
    </div>
  );
};
