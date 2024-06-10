import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { perk } from "@/config";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export default function PerkComponent() {
    return (
        <MaxWidthWrapper className=' '>
            {/* <div className=""> <span className="">{scrollTop}</span> </div> */}
            <div className="w-full text-center">
                <p className=" font-semibold text-3xl"> Ce que vous recherchez?</p>
                {/* <h1 className="text-3xl lg:text-5xl w-full lg:w-1/2 mx-auto font-semibold text-[#278e2b]"> We Are In Mission To Help The Helpless</h1> */}
            </div>
            <div className='  grid grid-cols-1 gray-y-2 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0 pt-24 pb-10'>
                {perk.map((perk) => (
                    <div key={perk.name} className='text-center w-full  md:flex md:items-start md:text-left lg:block lg:text-center mb-4 md:mb-4'>
                        <div className='md:flex-shrink-0 flex justify-center'>
                            <div className="w-16 h-16 flex items-center justify-center rounded-full ">
                                {<perk.icon />}
                            </div>
                        </div>
                        <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 w-full text-center'>
                            <h3 className={twMerge('text-base font-semibold ', perk.class)}>{perk.name}</h3>
                            <p className='mt-3 text-sm text-muted-foreground w-4/6 mx-auto'>{perk.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 md:flex-shrink-0 flex justify-center'>
                <Link href='' className='font-semibold border text-xs tracking-widest  px-16 py-[10px] transition hover:border-slate-400  rounded-full space-x-4 flex justify-center items-center'><span>Learn more</span>  </Link>

            </div>
        </MaxWidthWrapper>
    )
}

export const VectorRight = () => {
    return (
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25 1L10.75 5.5L6.25 10M10.125 5.5H1" stroke="#008000" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}
