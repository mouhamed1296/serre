const Parametrage = () => {
  return (
    <div className="flex flex-col gap-5 my-60 mx-96 justify-center items-center p-4 bg-white shadow-md">
        <h1 className="text-xl text-emerald-500 font-bold">Parametrage de l'arrosage</h1>
        <form className="flex flex-col gap-5 w-full p-12">
            <div className="flex gap-3">
                <label htmlFor="type" className="w-1/3">Types de plantes</label>
                <select name="type" id="type" className="border-2 p-1 w-2/3 border-gray-700">
                    <option value=""></option>
                    <option value="tomate">Tomate</option>
                    <option value="aloe_vera">Aloe Vera</option>
                    <option value="nana">Nana</option>
                </select>
            </div>
            <div className="flex gap-3">
                <label htmlFor="nombre" className="w-1/3">Nombre d'arrosage</label>
                <input type="text" id="nombre" className="border-2 w-2/3 border-gray-700 py-1 px-2" />
            </div>
            <div className="flex gap-3">
                <label htmlFor="heure" className="w-1/3">Heure d'arrosage</label>
                <input type="text" id="heure" className="border-2 w-2/3 border-gray-700 py-1 px-2" />
            </div>
            <div className="flex justify-end">
                <button className="bg-emerald-700 text-white px-4 py-2 rounded-md">Sauvegarder</button>
            </div>
        </form>
    </div>
  )
}

export default Parametrage