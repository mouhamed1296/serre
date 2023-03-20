import './Mesures.css'

function Mesures() {
    return(
      <div className='flex flex-row absolute place-content-end place-items-center space-x-24 w-full'>
        <div className='bg-white w-1/5 h-36 rounded-lg drop-shadow-lg'>
            <div className='bg-emerald-600 h-14 rounded-lg text-center'>
                <span className='text-white font-medium text-2xl m-0'>Température</span>
            </div>
            <div>
                <span></span>
            </div>
        </div>
        <div className='bg-white w-1/5 h-36 rounded-lg drop-shadow-lg'>
            <div className='bg-emerald-600 h-14 rounded-lg text-center'>
                <span className='text-white font-medium text-2xl m-0'>Humidité</span>
            </div>
            <div className='flex flex-col'>
                <span className='m-2 text-lg'>Ambiante:</span>
                <span className='m-2 text-lg'>Sol:</span>
            </div>
        </div>
        <div className='bg-white w-1/5 h-36 rounded-lg drop-shadow-lg'>
            <div className='bg-emerald-600 h-14 rounded-lg text-center'>
                <span className='text-white font-medium text-2xl m-0'>Luminosité</span>
            </div>
            <div>
                <span></span>
            </div>
        </div>
      </div>
    )
  
  }
  
  export default Mesures