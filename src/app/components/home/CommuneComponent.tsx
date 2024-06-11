import Link from 'next/link';
import CommunesDuBenin from '../../../config/CommunesList.json';

export default function Communes() {
    return (
        <div className='w-10/12 mx-auto py-8 '>
            <div className='py-12'>
                <h1 className='text-3xl'>Rechercher par communes ({CommunesDuBenin.communes.length})</h1>

            </div>
            <div className="grid grid-cols-6 gap-4 ">
                {CommunesDuBenin.communes.map((communes, index) => (
                    <div key={index} className="p-4 dark:bg-transparent dark:hover:bg-slate-500 dark:hover:text-black dark:transition dark:duration-200 bg-gray-50 rounded-md">
                        <Link href="" className='underline'>Recherche à {communes}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}