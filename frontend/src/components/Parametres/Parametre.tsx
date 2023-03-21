import './Parametre.css'
import { useState } from 'react'
import imgNana from '../../assets/nana.png'
import imgTomate from '../../assets/tomate.png'
import imgAloevera from '../../assets/aloevera.png'

function Parametre() {
    const [plante, setPlante] = useState<string>("");

    return(
      <div className='flex justify-center'>
        <div className='flex flex-col bg-white shadow-lg w-2/5 h-3/5 parametre'>
            <h1 className='w-full mt-6 mb-14 text-center text-emerald-600 text-2xl font-medium'> Paméterer l'arrosage</h1>
            <form className='w-full flex flex-col justify-center place-items-center'>
                <div className='flex flex-row w-full justify-center mb-8'>
                    <label htmlFor='plante' className='w-2/6 mt-2 text-xl'>Type de plante</label>
                    <select className='w-1/2 h-12 ml-8 bg-white border border-gray-200 rounded'
                            name='plante'
                            id='plante'
                            value={plante}
                            onChange={(event) => setPlante(event.target.value)}
                            onBlur={(event) => setPlante(event.target.value)}>
                        <option value="" selected>Choisissez une plante</option>
                        <option value="tomate">Tomate <img src={imgTomate} alt="" /></option>
                        <option value="aloevera">Aloe vera <img src={imgAloevera} alt="" /></option>
                        <option value="nana">Nana <img src={imgNana} alt="" /></option>
                    </select>
                </div>
                <div className='flex flex-row w-full justify-center mb-8'>
                    <label htmlFor='nombre' className='w-2/6 mt-2 text-xl'>Nombre d'arrosage</label>
                    <input name='nombre' className='w-1/2 h-12 ml-8 border border-gray-200 rounded' type="text" 
                    />
                </div>
                <div className='flex flex-row w-full justify-center mb-8'>
                    <label htmlFor='heure' className='w-2/6 mt-2 text-xl'>Heures d'arrosage</label>
                    <input name='heure' className='w-1/2 h-12 ml-8 border border-gray-200 rounded' type="text" />
                </div>
                <button type='submit' className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded mb-10 ml-96">
                    Sauvegarder
                </button>
            </form>
        </div>
      </div>
    )
  
  }
  
  export default Parametre