import { useState } from 'react'
import Success from './Success'

import Sucess from './Success'
import { data } from './test'


const Modal = ({ show, setShow, data }: { show: boolean, setShow: any, data: any }) => {
  const [showM, setShowM] = useState<boolean>(false)
  const [showM1, setShowM1] = useState<boolean>(false)
  return (
    <div className={`relative ${!show ? 'hidden' : ''} z-10`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/*  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/*       <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      --> */}
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full flex flex-col gap-4 justify-center items-center">
                  <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                    <img src={data.image} className="w-16 h-16" alt="" />
                    <span>{data.plante}</span>
                  </h3>
                  <hr />
                  <div className="mt-2 flex flex-col gap-4 ">
                    <p className="text-sm text-gray-800">
                      <span><span className="font-bold">Nombre d'arrosage:</span> {data.nbArrosage}</span>
                    </p>
                    <p className="text-sm text-gray-800">
                      <span><span className="font-bold">Heure d'arrosage:</span> {data.heureArrosage}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" className="inline-flex w-full justify-center rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 sm:ml-3 sm:w-auto">{


                <button onClick={(e) => {

                  setShowM1(true)
                  setTimeout(() => {
                    setShowM1(false)
                  }, 3000);
                }}>
                  Appliquer
                </button>

              }
              </button>
              <button onClick={() => setShow(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Annuler</button>
            </div>
          </div>
        </div>
        {showM1 && <Success showM={showM1} />}
      </div>

    </div>
  )
}

export default Modal