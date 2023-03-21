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
                        <div className='bg-white w-24 h-24 rounded-full mt-5 ml-16'>
                            <p className='text-center font-medium'>Démarer</p>
                        </div>
                    </div>
                    <div className='bg-emerald-600 w-1/2 h-80 drop-shadow-lg'>
                        <p className='text-white text-center text-xl m-0'>Ouverture toit</p>
                        <div className='flex justify-center'>
                            <img className='w-40 h-36 mt-4' src={toitFerme} alt="" />
                        </div>
                        <div className='bg-white w-24 h-24 rounded-full mt-5 ml-16'>
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
