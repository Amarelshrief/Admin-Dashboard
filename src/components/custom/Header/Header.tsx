import { Input } from "@/components/ui/input";
import { Moon, Bell, Settings, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        <Input
          type="search"
          placeholder="Search..."
          className="w-[12rem] ml-4"
        />
      </div>
      <div className="">
        <ul className="flex items-center gap-8">
          <li className="hover:bg-black hover:text-white h-10 w-10 flex items-center justify-center rounded-full duration-150">
            <Link to="/">
              <Moon className="" />
            </Link>
          </li>
          <li className="hover:bg-black hover:text-white h-10 w-10 flex items-center justify-center rounded-full duration-150">
            <Link to="/">
              <Bell />
            </Link>
          </li>
          <li className="hover:bg-black hover:text-white h-10 w-10 flex items-center justify-center rounded-full duration-150">
            <Link to="/">
              <Settings />
            </Link>
          </li>
          <li className="hover:bg-black hover:text-white h-10 w-10 flex items-center justify-center rounded-full duration-150">
            <Link to="/">
              <UserRound />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
