import navlogo from "../../assets/3b79aa92-1fc5-4c31-8979-84c7abd44563.svg";
import { NavItems } from "./NavItems";

export const Navbar = () => {
  return (
    <div className="flex pl-48 pt-5">
      <div className="mr-8 w-36"> 
        <img src={navlogo} alt="hi" />
      </div>
      <div className="flex">
        <NavItems title="Products" />
        <NavItems title="Company" />
        <NavItems title="Resources" />
        <NavItems title="Pricing" isLogoPresent={true} />
      </div>
    </div>
  );
};
