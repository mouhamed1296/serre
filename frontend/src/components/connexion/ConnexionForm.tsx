
import { FaUserAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import rfidImg from '../../assets/carte-rfid.png'
import { useForm } from "react-hook-form";

const ConnexionForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className=" flex ">
      <div className=" h-screen w-screen drop-shadow-5xl bg-[url('assets/image.jpeg')] bg-no-repeat bg-cover bg-center flex justify-end">
        <div className="bg-gray-100/25 m-8 mr-20 w-3/6">
          <h1 className="flex justify-center font-bold mt-10 text-4xl text-white">CONNEXION</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="  flex flex-col px-32 gap-5 mt-10 items-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center w-full">
                <div className="bg-green-600 mt-2 p-2 flex justify-center items-center">
                  <FaUserAlt className="w-10 h-8 text-white"/>
                </div>
                <div className="relative">
                  <div className='flex flex-col w-full gap-2'>
                    <input id="email" type="email"  {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i, })} 
                    className="px-2 bg-gray-50/25 peer mt-2 h-12 w-96 border-b-2  text-white placeholder-transparent focus:outline-none focus:border-green-600" placeholder="test@gmail.com" />
                    <label htmlFor="email" className="absolute mt-2 -left-14 peer-placeholder-shown:left-2 -top-8 text-white text-2xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-4 peer-focus:-top-8 peer-focus:-left-14 peer-focus:text-white peer-focus:text-2xl">Email</label>
                  </div>
                </div>    
              </div>
              <div>
                {errors.email?.type === "required" && 
                  <span className='text-red-600'>Ce champ est Obligatoire</span>
                }
                {errors.email?.type === "pattern" &&
                  <span className='text-red-600'>Email entré n'est pas valide</span>
                }
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center w-full">
                <div className="bg-green-600 mt-10 p-2 flex justify-center items-center">
                  <FaLock className="w-10 h-8 text-white"/>
                </div>
                <div className="mt-10 relative">
                  <div className='flex flex-col w-full gap-2'>
                    <div className="w-full flex flex-col">
                      <input id="password" type="password" {...register("password", {  required: true,  minLength: 5,  maxLength: 20, })} 
                      className="px-2 bg-gray-50/25 peer h-12 w-96  border-b-2 text-white placeholder-transparent focus:outline-none focus:border-green-600 " placeholder="Password" />
                      <label htmlFor="password" className="absolute mt-2 -left-14 peer-placeholder-shown:left-2 -top-10 text-white text-2xl transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-placeholder-shown:top-2 peer-focus:-top-10 peer-focus:-left-14 peer-focus:text-white peer-focus:text-2xl">Mot de passe</label>
                    </div>     
                  </div>
                </div>
              </div>
              <div>
                {errors.password?.type === "minLength" && <p className='text-red-600'>Mot de passe doit être plus de 5 caractères</p>}
                {errors.password?.type === "maxLength" && <p className='text-red-600'>Mot de passe doit être moins de 20 caractères</p>}
                {errors.password?.type === "required" && <p className='text-red-600'>Ce champ est Obligatoire</p>}
              </div>
            </div>
        <div>
        <button  onClick={onSubmit} className="p-4 mt-6 bg-green-600 rounded text-white font-bold text-xl  hover:text-red-500">Se Connecter</button>
        </div>
        <div>
        <h1 className="flex justify-center font-bold  text-3xl text-white underline underline-offset-4">Poser votre carte !</h1>
          <img src={rfidImg} alt="" className="w-40"/>
        </div>
    </form>
      </div>
    </div>
    </div>
  );
}

export default ConnexionForm;





