import { useState } from 'react'
import Modal from './Modal'
import { data } from './test'


const Sauvegarde = () => {
    const [show, setShow] = useState<boolean>(false)
    const [modalData, setModalData] = useState({})
    return (
        <div className="justify-center drop-shadow-lg m-auto w-full h-96 rounded-lg border bg-white">
            <h1 className="text-emerald-500 mt-4 mb-4 text-center text-2xl font-bold ">Paramètre arrosage enregistré</h1>
            <div className='flex flex-row gap-4 py-4 px-5'>
                {
                    data.map((d) =>

                       <button value={d.plante} onClick={(e) => {
                            if(d.plante == e.currentTarget.value) {
                                setModalData(d)
                            }
                            setShow(true)
                        }}>
                            <div className='flex flex-col justify-center items-center bg-white px-8 py-2 shadow-md'>
                                <img src={d.image} className='w-24 h-24 mt-2' alt="" />
                                <span className='text-center mt-6 text-xl font-medium'>{d.plante}</span>
                            </div>
                       </button>

                    )
                }
            </div>
                <Modal show={show} setShow={setShow} data={modalData} />
                
        </div>
    )
}

export default Sauvegarde