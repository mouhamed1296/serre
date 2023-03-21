import './CtrlSysteme.css'
import extracteur1 from '../../assets/fan.png'
import extracteur2 from '../../assets/fan.gif'
import arroseur1 from '../../assets/arr.jpeg'
import arroseur2 from '../../assets/arr-gif.gif'
import toitFerme from '../../assets/toit_ferme.jpg'
import toitOuvert from '../../assets/toit_ouvert.webp'
import { useState } from 'react'

function CtrlSysteme() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle)
    };
    const [toggle2, setToggle2] = useState(false);
    const handleClick2 = () => {
        setToggle2(!toggle2)
    };
    return (
        <div className='flex gap-16 w-full h-96'>
            <div className='bg-white rounded-lg drop-shadow-lg w-3/4'>
                <h1 className='text-center text-emerald-600 text-2xl font-medium m-2'>Contrôler les composants</h1>
                <div className='flex flex-row space-x-14 justify-center px-10'>
                    <div className='bg-emerald-600 w-1/2 h-80 drop-shadow-lg'>
                        <p className='text-white text-center text-xl m-0'>Arrosage</p>
                        {
                            toggle ?
                                <div className='flex justify-center'>
                                    <img className='w-40 h-36 mt-4' src={arroseur2} alt="" />
                                </div>
                                :
                                <div className='flex justify-center'>
                                    <img className='w-40 h-36 mt-4' src={arroseur1} alt="" />
                                </div>
                        }
                        {
                            toggle ?
                                <div className='bg-white w-24 h-24 rounded-full mt-5 ml-20'>
                                    <button onClick={handleClick} className='flex justify-center ml-6'>
                                        <svg fill="#12B886" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px"><path d="M22,7C19.867,7,8.513,7,8,7c-4.418,0-8,3.582-8,8s3.582,8,8,8c0.513,0,11.867,0,14,0c4.418,0,8-3.582,8-8S26.418,7,22,7z M22,21c-3.314,0-6-2.686-6-6s2.686-6,6-6s6,2.686,6,6S25.314,21,22,21z" /></svg>
                                    </button>
                                    <p className='text-center font-medium'>Arreter</p>
                                </div>
                                :
                                <div className='bg-white w-24 h-24 rounded-full mt-5 ml-20'>

                                    <button onClick={handleClick} className='flex justify-center ml-6'>
                                        <svg fill="#FA5252" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px"><path d="M 8 7 A 1.0001 1.0001 0 0 0 7.8886719 7.0058594 C 3.5337373 7.0663982 0 10.631126 0 15 C 0 19.371502 3.5379402 22.937792 7.8964844 22.994141 A 1.0001 1.0001 0 0 0 8 23 L 22 23 C 26.052135 23 29.281986 19.915394 29.796875 16 L 30 16 L 30 15 C 30 10.593562 26.406438 7 22 7 L 8 7 z M 8 9 C 11.325553 9 14 11.674447 14 15 C 14 18.325553 11.325553 21 8 21 C 4.6744469 21 2 18.325553 2 15 C 2 11.674447 4.6744469 9 8 9 z M 13.271484 9 L 22 9 C 25.325562 9 28 11.674438 28 15 C 28 18.325562 25.325562 21 22 21 L 13.271484 21 C 14.93967 19.532053 16 17.387963 16 15 C 16 12.612037 14.93967 10.467947 13.271484 9 z" /></svg>
                                    </button>
                                    <p className='text-center font-medium'>Démarer</p>
                                </div>
                        }
                    </div>
                    <div className='bg-emerald-600 w-1/2 h-80 drop-shadow-lg'>
                        <p className='text-white text-center text-xl m-0'>Ouverture toit</p>
                        {
                            toggle2 ?
                                <div className='flex justify-center'>
                                    <img className='w-40 h-36 mt-4' src={toitOuvert} alt="" />
                                </div>
                                :
                                <div className='flex justify-center'>
                                    <img className='w-40 h-36 mt-4' src={toitFerme} alt="" />
                                </div>
                        }
                        {
                            toggle2 ?
                                <div className='bg-white w-24 h-24 rounded-full mt-5 ml-20'>
                                    <button onClick={handleClick2} className='flex justify-center ml-6'>
                                        <svg fill="#12B886" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px"><path d="M22,7C19.867,7,8.513,7,8,7c-4.418,0-8,3.582-8,8s3.582,8,8,8c0.513,0,11.867,0,14,0c4.418,0,8-3.582,8-8S26.418,7,22,7z M22,21c-3.314,0-6-2.686-6-6s2.686-6,6-6s6,2.686,6,6S25.314,21,22,21z" /></svg>
                                    </button>
                                    <p className='text-center font-medium'>Fermer</p>
                                </div>
                                :
                                <div className='bg-white w-24 h-24 rounded-full mt-5 ml-20'>
                                    <button onClick={handleClick2} className='flex justify-center ml-6'>
                                        <svg fill="#FA5252" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="50px" height="50px"><path d="M 8 7 A 1.0001 1.0001 0 0 0 7.8886719 7.0058594 C 3.5337373 7.0663982 0 10.631126 0 15 C 0 19.371502 3.5379402 22.937792 7.8964844 22.994141 A 1.0001 1.0001 0 0 0 8 23 L 22 23 C 26.052135 23 29.281986 19.915394 29.796875 16 L 30 16 L 30 15 C 30 10.593562 26.406438 7 22 7 L 8 7 z M 8 9 C 11.325553 9 14 11.674447 14 15 C 14 18.325553 11.325553 21 8 21 C 4.6744469 21 2 18.325553 2 15 C 2 11.674447 4.6744469 9 8 9 z M 13.271484 9 L 22 9 C 25.325562 9 28 11.674438 28 15 C 28 18.325562 25.325562 21 22 21 L 13.271484 21 C 14.93967 19.532053 16 17.387963 16 15 C 16 12.612037 14.93967 10.467947 13.271484 9 z" /></svg>
                                    </button>
                                    <p className='text-center font-medium'>Ouvrir</p>
                                </div>
                        }
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
