import Link from "next/link"

export const Logo= ()=> { 
    return (
        <Link href="/" className="text-2xl ">
            E-<span className="italic  text-[#123C3F] font-bold">IMMO</span><span className="animate-typing italic whitespace-nowrap border-r-4 border-r-black   text-[#123C3F] font-bold"></span>
        </Link>
    )
}