import { FaBars } from "react-icons/fa";
import NavList from "./NavList";

interface Props {
  showSideBar: () => void;
}

function Navigation({ showSideBar }: Props) {
  return (
    <nav className="bg-blue-400 shadow-md p-6 flex text-white justify-between items-center">
      <h3 className="text-lg font-bold cursor-pointer">My first Website</h3>
      <FaBars
        onClick={() => showSideBar()}
        className="block md:hidden cursor-pointer"
      />
      <NavList className="gap-3 text-white hidden md:flex" />
    </nav>
  );
}

export default Navigation;
