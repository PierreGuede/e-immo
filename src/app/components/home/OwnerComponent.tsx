import { Button } from "@/components/ui/ButtonUI";
import Link from "next/link";

export default function OwnerComponent(){
    return (
        <div className="py-8 bg-sky-900">
            <div className="w-9/12 mx-auto flex items-center justify-center">
                <div className="w-4/6 text-white">
                    <h1 className="text-2xl ">Êtes-vous un propriétaire ?</h1>
                    <p>Publiez votre propriété gratuitement et nous nous occupons du reste.</p>
                </div>
                <div className="w-2/6">
                    <Link  href="#" className="p-6 rounded-md text-white hover:bg-amber-700 bg-amber-600 transition duration-200"> Explorer l'espace Proprietaire</Link>
                </div>
            </div>
        </div>
    )
}