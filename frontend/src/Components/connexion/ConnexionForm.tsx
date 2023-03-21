
import { FaUserAlt } from 'react-icons/fa';
import { FaLock} from 'react-icons/fa';
import rfidImg from '../../assets/carte-rfid.png'
import { useForm } from "react-hook-form";

 const ConnexionForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange"});
  const onSubmit = (data: any) => console.log(data);
  return (
<div className=" flex ">
      <div className=" h-screen w-screen drop-shadow-5xl bg-[url('assets/image.jpeg')] bg-no-repeat bg-cover bg-center flex justify-end">
        <div className="bg-gray-100/25 m-8 mr-20 w-3/6">
      <h1 className="flex justify-center font-bold mt-10 text-4xl text-white">CONNEXION</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="  flex flex-col px-32 gap-5 mt-4 items-center">
        <div className='flex flex-col w-full gap-2'>
          <div className="flex items-center w-full">
              <div className="bg-green-600 mt-8 p-3 flex justify-center items-center">
                <FaUserAlt className="w-10 h-8 text-white"/>
              </div>
          <div className="flex flex-col  w-full">
            <label htmlFor="email" className="text-white text-2xl relative left-4 top-12 focus:top-0 focus:left-0" >Email</label>
            <input  {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })} type="email" id="email"  className="border-b-3 p-4 rounded-r-lg bg-gray-50/25" />
          </div>
          </div>
          {errors.email?.type === "required" && 
            <span className='text-red-600'>Ce champ est Obligatoire</span>
          }
              {errors.email?.type === "pattern" &&
                <span className='text-red-600'>Email entré n'est pas valide</span>}
        </div>
        <div className='flex flex-col w-full gap-2'>
          <div className="flex items-center w-full">
              <div className="bg-green-600 mt-8 p-3 py-3 flex justify-center items-center">
                <FaLock className="w-10 h-8 text-white"/>
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="password" className=" text-white text-2xl relative left-4 top-12">Mot de passe</label>
                
                <input  {...register("password", {  required: true,  minLength: 5,  maxLength: 20,
              })} type="password" id="password" className="border-b-3 p-4 rounded-r-lg bg-gray-50/25" />        
              </div>
          </div>
          {errors.password?.type === "minLength" && <p className='text-red-600'>Mot de passe doit être plus de 5 caractères</p>}
          {errors.password?.type === "maxLength" && <p className='text-red-600'>Mot de passe doit être moins de 20 caractères</p>}
          {errors.password?.type === "required" && <p className='text-red-600'>Ce champ est Obligatoire</p>}
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





