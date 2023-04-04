import './Parametre.css'
import { useEffect, useState, useRef } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

function Parametre() {
    const [Plantes, setPlantes] = useState([])
    const [plante, setPlante] = useState<any>("");
    let [heure, setHeure] = useState<string>("");
    let [nombre, setNombre] = useState<string>("");
    useEffect(() => {
        axios.get('http://localhost:3000/plantes/').then((response) => {
            setPlantes(response.data)
        })
        
 
        if (plante === 'tomate') {
            setHeure('10h/18h');
            setNombre('2 fois/jour');
        } else if (plante === 'aloevera') {
            setHeure('10h/14h/18h');
            setNombre('3 fois/jour');
        } else if (plante === 'nana') {
            setHeure('14h');
            setNombre('1 fois/jour');
        } else {
            setHeure('');
            setNombre('');
        }
    }, [plante]);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: 'onChange' });
    const onSubmit = (data: any) => {
 /*          var payload = {
          nomPlantes: nomPlantes.current.value,
          nombreArrosage: nombreArrosage.current.value,
          heureArrosage: heureArrosage.current.value,
        };
        axios.patch(`http://localhost:3000/plantes/${id}`,payload)
        .then(() => {
            navigate("/");
        })   */
      };

    return (
        <div className='flex flex-col bg-white h-96 shadow-lg border border-primaryBorder justify-center py-8 mx-32 items-center rounded-lg'>
            <h1 className='w-full text-center mb-5 text-emerald-600 text-2xl font-medium'> Paméterer l'arrosage</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='w-full flex flex-col justify-center place-items-center space-y-6'>
                <div className='w-full'>
                    <div className='flex flex-row w-full justify-center'>
                        <label className='w-2/6 mt-2 text-xl'>Type de plante</label>
                        <select className='w-1/2 h-12 ml-8 bg-white border border-gray-200 rounded'
                            {...register("plante", { required: true, })}
                            name='plante'
                            onChange={(e) => {
                                const plante = Plantes.filter((parametre: any) => {
                                    console.log(e.target.value);

                                    return parametre.nomPlante === e.target.value
                                })[0]
                                console.log(plante);

                                setPlante(plante as unknown as any)

                            }}>
                            <option value="" selected>Choisissez une plante</option>
                            <option value="Tomate">Tomate</option>
                            <option value="Aloe vera">Aloe vera</option>
                            <option value="Nana">Nana</option>
                        </select>
                    </div>
                    {errors.plante?.type === "required" &&
                        <span className='text-red-600 ml-80 text-sm'>Ce champ est Obligatoire</span>
                    }
                </div>
                <div className='w-full'>
                    <div className='flex flex-row w-full justify-center'>
                        <label htmlFor='nombre' className='w-2/6 mt-2 text-xl'>Nombre d'arrosage</label>
                        <input {...register("nombre", { required: true, pattern: /^[0-9]+( fois\/jour| fois\/semaine| fois\/mois)$/ })}
                            type="text" name='nombre' className='w-1/2 h-12 ml-8 border border-gray-200 rounded'
                            defaultValue={plante?.nombreArrosage}
                            onChange={(e) => {
                                const plante = Plantes.filter((parametre: any) => {
                                    console.log(e.target.value);

                                    return parametre.nomPlante === e.target.value
                                })[0]
                                console.log(plante);

                                setPlante(plante as unknown as any)

                            }}
                            placeholder='ex. 2 fois/jour' />
                    </div>
                    {errors.nombre?.type === "required" &&
                        <span className='text-red-600 ml-80 text-sm'>Ce champ est Obligatoire</span>
                    }
                    {errors.nombre?.type === "pattern" &&
                        <span className='text-red-600 ml-80 text-sm'>Format incorrect</span>
                    }
                </div>
                <div className='w-full'>
                    <div className='flex flex-row w-full justify-center'>
                        <label htmlFor='heure' className='w-2/6 mt-2 text-xl'>Heures d'arrosage</label>
                        <input {...register("heure", { required: true, pattern: /^[0-9]{2}h\/[0-9]{2}h\/[0-9]{2}h$ |^[0-9]{2}h\/[0-9]{2}h$ |^[0-9]{2}h$/ })}
                            type="text" name='heure' className='w-1/2 h-12 ml-8 border border-gray-200 rounded'
                            defaultValue={plante?.heureArrosage}
                            onChange={(e) => {
                                const plante = Plantes.filter((parametre: any) => {
                                    console.log(e.target.value);

                                    return parametre.nomPlante === e.target.value
                                })[0]
                                console.log(plante);

                                setPlante(plante as unknown as any)

                            }}
                            placeholder='ex. 10h/15h/19h' />
                    </div>
                    {errors.heure?.type === "required" &&
                        <span className='text-red-600 ml-80 text-sm'>Ce champ est Obligatoire</span>
                    }
                    {errors.heure?.type === "pattern" &&
                        <span className='text-red-600 ml-80 text-sm'>Format incorrect</span>
                    }
                </div>
                <button onClick={onSubmit} type='submit' className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded ml-auto mr-11">
                    Sauvegarder
                </button>
            </form>
        </div>

    )

}

export default Parametre;