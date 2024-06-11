import { NavBar } from "@/components/menu/header/NavBar";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function LocatrionID({ params }: { params: { id: number } }) {
    return (
        <div>
            <NavBar />
            <div className="w-10/12 mx-auto flex space-x-4">
                <div className="w-7/12 p-2 bg-blue-200 rounded-md">
                    <div className="grid  grid-flow-col gap-4 ">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Image key={index} src="/maison.jpg" alt="picture image" className={cn(index == 0 ? ' row-span-2' : 'col-span-2 ', 'bg-blue-400')} width={index == 0 ? 450 : 200} height={index == 0 ? 400 : 200} />
                        ))}
                    </div>
                    <div className="py-8 space-y-4">
                        <div>
                            
                        </div>
                    </div>
                </div>

                <div className="w-5/12 p-2 bg-blue-200 rounded-md">

                </div>
            </div>

        </div>

    )
}

