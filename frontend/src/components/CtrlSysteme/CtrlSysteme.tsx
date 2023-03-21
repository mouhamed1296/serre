import './CtrlSysteme.css'
import extracteur1 from '../../assets/fan.png'
import extracteur2 from '../../assets/fan.gif'
import arroseur1 from '../../assets/arr.jpeg'
import arroseur2 from '../../assets/arr-gif.gif'
import toitFerme from '../../assets/toit_ferme.jpg'

function CtrlSysteme() {
    return (
        <div className='flex gap-16 w-full h-96'>
            <div className='bg-white rounded-lg drop-shadow-lg w-3/4'>
                <h1 className='text-center text-emerald-600 text-2xl font-medium m-2'>Contrôler les composants</h1>
                <div className='flex flex-row space-x-14 justify-center px-10'>
                    <div className='bg-emerald-600 w-1/2 h-80 drop-shadow-lg'>
                        <p className='text-white text-center text-xl m-0'>Arrosage</p>
                        <div className='flex justify-center'>
                            <img className='w-40 h-36 mt-4' src={arroseur1} alt="" />
                        </div>
                        <div className='bg-white w-24 h-24 rounded-full mt-5 ml-16 flex flex-col justify-center'>
                            <div className='flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                    <path d="M 14 11 C 6.28125 11 0 17.28125 0 25 C 0 32.71875 6.28125 39 14 39 L 36 39 C 43.71875 39 50 32.71875 50 25 C 50 17.28125 43.71875 11 36 11 Z M 14 13 C 20.640625 13 26 18.359375 26 25 C 26 31.640625 20.640625 37 14 37 C 7.359375 37 2 31.640625 2 25 C 2 18.359375 7.359375 13 14 13 Z M 21.15625 13 L 36 13 C 42.640625 13 48 18.359375 48 25 C 48 31.640625 42.640625 37 36 37 L 21.15625 37 C 25.242188 34.550781 28 30.097656 28 25 C 28 19.902344 25.242188 15.449219 21.15625 13 Z"></path>
                                </svg>
                            </div>
                            <p className='text-center font-medium'>Démarer</p>
                        </div>
                    </div>
                    <div className='bg-emerald-600 w-1/2 h-80 drop-shadow-lg'>
                        <p className='text-white text-center text-xl m-0'>Ouverture toit</p>
                        <div className='flex justify-center'>
                            <img className='w-40 h-36 mt-4' src={toitFerme} alt="" />
                        </div>
                        <div className='bg-white w-24 h-24 rounded-full mt-5 ml-16 flex flex-col justify-center'>
                            <div className='flex justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                                    <path d="M 14 11 C 6.28125 11 0 17.28125 0 25 C 0 32.71875 6.28125 39 14 39 L 36 39 C 43.71875 39 50 32.71875 50 25 C 50 17.28125 43.71875 11 36 11 Z M 14 13 C 20.640625 13 26 18.359375 26 25 C 26 31.640625 20.640625 37 14 37 C 7.359375 37 2 31.640625 2 25 C 2 18.359375 7.359375 13 14 13 Z M 21.15625 13 L 36 13 C 42.640625 13 48 18.359375 48 25 C 48 31.640625 42.640625 37 36 37 L 21.15625 37 C 25.242188 34.550781 28 30.097656 28 25 C 28 19.902344 25.242188 15.449219 21.15625 13 Z"></path>
                                </svg>
                            </div>
                            <p className='text-center font-medium'>Ouvrir</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='rounded-lg drop-shadow-lg w-1/3'>
                <div className='bg-white w-full h-3/5 rounded-lg drop-shadow-lg flex justify-center'>
                    <img src={extracteur1} alt="" />
                </div>
                <div className='bg-white w-full mt-6 h-2/6 rounded-lg drop-shadow-lg'>
                    <p className='text-emerald-600 text-center text-2xl font-medium m-0'>Etats des capteurs</p>
                </div>
            </div>
        </div>
    )

}

export default CtrlSysteme
