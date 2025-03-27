import { Input } from "@/components/ui/input";
import { Moon, Bell, Settings, UserRound, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/components/custom/Theme/Theme";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const [dark, setDark] = useState(
    localStorage.getItem("vite-ui-theme") === "dark"
  );
  const { setTheme } = useTheme();

  console.log(dark);

  function toggleDark() {
    setDark(!dark);
  }

  console.log(dark);

  // console.log(root.classList.contains("dark"));

  return (
    <header className="flex items-center justify-center lg:justify-between">
      <div className="hidden lg:block">
        <Input type="search" placeholder="Search..." className="w-[12rem]" />
      </div>
      <div className="">
        <ul className="flex items-center gap-8">
          <li className="cursor-pointer hover:bg-[var(--ring)] h-10 w-10 flex items-center justify-center rounded-full duration-150">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="cursor-pointer"
                onClick={toggleDark}
              >
                {dark && <Sun onClick={() => setTheme("light")} />}
                {!dark && <Moon onClick={() => setTheme("dark")} />}
              </DropdownMenuTrigger>
            </DropdownMenu>
          </li>
          <li className="cursor-pointer hover:bg-[var(--ring)] h-10 w-10 flex items-center justify-center rounded-full duration-150">
            <Link to="/">
              <Bell />
            </Link>
          </li>
          <li className="cursor-pointer hover:bg-[var(--ring)] h-10 w-10 flex items-center justify-center rounded-full duration-150">
            <Link to="/">
              <Settings />
            </Link>
          </li>
          <li className="cursor-pointer hover:bg-[var(--ring)] h-10 w-10 flex items-center justify-center rounded-full duration-150">
            <Link to="/">
              <UserRound />
            </Link>
          </li>
        </ul>
      </div>
      {/* <div className="lg:hidden flex items-center gap-2">
        <span className="bg-black w-2 h-8"></span>
        <span className="bg-black w-2 h-8"></span>
        <span className="bg-black w-2 h-8"></span>
      </div> */}
    </header>
  );
}

export default Header;
