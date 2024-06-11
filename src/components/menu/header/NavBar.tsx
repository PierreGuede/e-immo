import { Menu } from "lucide-react"
import { Logo } from "./Logo"
import { NavBarItems } from "./NavbarItems"
import { Button } from "@/components/ui/ButtonUI"
import { ModeToggle } from "@/app/components/DarkOrLightMode"

export const NavBar= ()=>{
    return (
        <div className="flex p-4 items-center justify-center w-full mx-auto lg:w-full ">
          <div className="p-2 lg:w-1/3 w-1/2 text-center">
            <Logo/>
          </div>
          <div className="hidden lg:block lg:w-2/3">
            <NavBarItems/>
          </div>
          <div className="p-2 lg:hidden w-1/2 text-right flex items-end justify-end ">
            <Menu/>
          </div>
          <div className="hidden lg:flex lg:w-1/3 space-x-4 items-center justify-center ">
            <ModeToggle/>
            <Button className="text-white">Connexion</Button> 
            {/* <button className="p-2 hover:bg-orange-600 transition bg-orange-400/90 text-white rounded-lg">Connexion</button> */}
          </div>
        </div>
    )
}