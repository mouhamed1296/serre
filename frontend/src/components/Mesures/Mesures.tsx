import './Mesures.css'

function Mesures() {
    return(
        <div className='flex flex-col gap-16 items-start'>
            <div className='flex items-center gap-2 text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className='font-medium'>Nom Prenom</p>
            </div>
            <div className='flex flex-row gap-14 w-full'>
                <div className='bg-white w-1/3 h-40 rounded-lg drop-shadow-lg'>
                    <div className='bg-emerald-600 h-14 rounded-lg text-center'>
                        <span className='text-white font-medium text-2xl m-0'>Température</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
                <div className='bg-white w-1/3 h-40 rounded-lg drop-shadow-lg'>
                    <div className='bg-emerald-600 h-14 rounded-lg text-center'>
                        <span className='text-white font-medium text-2xl m-0'>Humidité</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='m-2 text-lg'>Ambiante:</span>
                        <span className='m-2 text-lg'>Sol:</span>
                    </div>
                </div>
                <div className='bg-white w-1/3 h-40 rounded-lg drop-shadow-lg'>
                    <div className='bg-emerald-600 h-14 rounded-lg text-center'>
                        <span className='text-white font-medium text-2xl m-0'>Luminosité</span>
                    </div>
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
  
  }
  
  export default Mesures