import { FaBars } from "react-icons/fa";
import NavList from "./NavList";

interface Props {
  showSideBar: (e: React.MouseEvent, test: string) => void;
}

function Navigation({ showSideBar }: Props) {
  const test = "Hai Im Child Element";
  return (
    <nav className="bg-blue-400 shadow-md p-6 flex text-white justify-between items-center">
      <h3 className="text-lg font-bold cursor-pointer">My first Website</h3>
      <FaBars
        onClick={(e) => showSideBar(e, test)}
        className="block md:hidden cursor-pointer"
      />
      <NavList className="gap-3 text-white hidden md:flex" />
    </nav>
  );
}

export default Navigation;
