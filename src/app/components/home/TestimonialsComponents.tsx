import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { MapPinIcon, Quote } from "lucide-react";
export default function TestomonialsComponents() {
    return (
        <div className="dark:bg-slate-900 bg-gray-100 py-8">

    <div className="w-10/12 mx-auto space-y-12">   
                <div className="text-center">
                <h1 className="text-3xl font-semibold w-8/12 mx-auto ">Ce que disent les locataires et propriétaires sur E-immo</h1>
                </div>
        <MaxWidthWrapper className="" >
            
            <div className="grid grid-cols-3 gap-4 ">
            {Array.from({ length: 3 }).map((_, index) => (
                <Card className="w-full max-w-md" key={index}>
                    <CardContent className="grid gap-6 p-6">
                        <div className="space-y-2">
                            <CardTitle className="text-2xl font-bold">"La maison de mes rêves à l'endroit idéal</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <MapPinIcon className="h-4 w-4" />
                                <span>Abomey-Calavi, BJ</span>
                            </div>
                        </div>
                        <blockquote className="text-lg font-medium leading-relaxed">
                            "Je n'aurais jamais cru que je trouverais une maison qui répondrait à toutes mes attentes, mais en travaillant avec l'équipe d'Acme Realty, mon rêve est devenu réalité.
                            mon rêve une réalité. L'emplacement est parfait et la maison est tout ce que j'aurais pu espérer."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <Quote className=" text-cyan-800 h-8 w-8" />
                            <div className="space-y-0.5">
                                <div className="font-medium">Jane Doe</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Homeowner</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
            </div>
        </MaxWidthWrapper>
        </div>
        </div>

    )
}