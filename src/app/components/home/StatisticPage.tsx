export default function StatisticPage(){
    return (
        <section className='  w-full mx-auto mt-2 py-20  '>
        <div className=" w-full h-full dark:hover:bg-slate-900 hover:bg-slate-200/80 transition duration-200 dark:border-white  border-[#000000] border-t-[1px] border-b-[1px] py-8">
          <div className="text-center h-full items-center justify-center mx-auto xs:w-10/12  w-8/12 grid grid-cols-2 gray-y-2 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-1 lg:gap-y-0">
            <div className="">
              <h1 className="xs:text-2xl md:text-2xl  font-semibold">Plus de 200</h1>
              <p className="dark:text-gray-300/80 font-semibold">Parcels</p>
            </div>
            <div className="">
              <h1 className="xs:text-2xl md:text-2xl  font-semibold">80+</h1>
              <p className="dark:text-gray-300/80 font-semibold">Hotel disponibles</p>
            </div>
            <div className="">
              <h1 className="xs:text-2xl md:text-2xl  font-semibold">245+</h1>
              <p className="dark:text-gray-300/80 font-semibold">Appartements</p>
            </div>
            <div className="">
              <h1 className="xs:text-2xl md:text-2xl  font-semibold">605+</h1>
              <p className="dark:text-gray-300/80 font-semibold">Locations vérifiées</p>
            </div>
          </div>
        </div>

      </section>
    )
}