import { useEffect, useState } from 'react'
import Modal from './Modal'
import { Plante } from '../../fake_api/plante';
import imgTomate from '../../assets/tomate.png'
import imgAloevera from '../../assets/aloevera.png'
import imgNana from '../../assets/nana.png'

const Sauvegarde = () => {
    const [show, setShow] = useState<boolean>(false)
    const [modalData, setModalData] = useState({} as Plante)

    const [data, setData] = useState<Plante[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/plantes', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            setData(data);
            console.log(data);
        })
    }, [])

    return (
        <div className="justify-center drop-shadow-lg m-auto w-full h-96 rounded-lg border bg-white">
            <h1 className="text-emerald-500 mt-4 mb-4 text-center text-2xl font-bold ">Paramètre arrosage enregistré</h1>
            <div className='flex flex-row gap-4 py-4 px-5'>
                {
                    data.map((d) =>

                       <button value={d.nomPlante} onClick={(e) => {
                            if(d.nomPlante == e.currentTarget.value) {
                                setModalData(d)
                            }
                            setShow(true)
                        }}>
                            <div className='flex flex-col justify-center items-center bg-white px-8 py-2 shadow-md'>
                                {d.nomPlante === 'Aloe vera' && <img src={imgAloevera} className='w-24 h-24 mt-2' alt="" />}
                                {d.nomPlante === 'Tomate' && <img src={imgTomate} className='w-24 h-24 mt-2' alt="" />}
                                {d.nomPlante === 'Nana' && <img src={imgNana} className='w-24 h-24 mt-2' alt="" />}
                                <span className='text-center mt-6 text-xl font-medium'>{d.nomPlante}</span>
                            </div>
                       </button>

                    )
                }
            </div>
                <Modal show={show} setShow={setShow} data={modalData} plantes={data} />
                
        </div>
    )
}

export default Sauvegarde