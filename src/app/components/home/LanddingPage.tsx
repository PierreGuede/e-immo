import { Button } from "@/components/ui/ButtonUI"
import { Input } from "@/components/ui/InputUI"
import { Search } from "lucide-react"

export const LandingPage = ()=>{
    return(
        <div className="p-8 text-center lg:w-10/12 2xl:w-9/12  mx-auto flex flex-col items-center justify-center min-h-screen">
          <div className=" 2xl:w-4/6 lg:w-8/10 text-center mx-auto  space-y-8 py-8">
            <h1 className="text-[30px] lg:text-[52px] font-[monospace] mx-auto w-5/6 ">Trouvez et réservez le logement de vos rêves pour plusieurs mois. </h1>
            <div className="flex space-x-4 items-center justify-center">
            <Button className="rounded-lg text-white ">Trouver un logement</Button>
            <Button variant={"outline"}  className="rounded-lg">Faire une estimation</Button>
            </div>
          </div>
          <div className="hidden  lg:flex bg-slate-100  dark:bg-slate-100 border-[1px] w-1/3  rounded-lg p-2 lg:space-x-2 lg:items-center lg:justify-center">
              <Input type="text" className=" border-none w-full  bg-slate-100 text-black placeholder:font-mono " placeholder="Rechercher dans une ville"/>
              <Search className="text-black bg-slate-300 p-1 rounded-full text-xl"/>
          </div>
        </div>
    )
} 