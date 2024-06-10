import Link from 'next/link';
import CommunesDuBenin from '../../../config/CommunesList.json';

export default function Communes() {
    return (
        <div className='w-10/12 mx-auto py-8 '>
            <div className='py-12 text-center'>
                <h1 className='text-4xl'>Rechercher par communes</h1>

            </div>
            <div className="grid grid-cols-5 gap-4 ">
                {CommunesDuBenin.communes.map((communes, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-md">
                        <Link href="" className='underline'>Recherche à {communes}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}