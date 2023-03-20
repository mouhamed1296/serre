
import { FaUserAlt } from 'react-icons/fa';
import { FaLock} from 'react-icons/fa';
import rfidImg from '../../assets/carte-rfid.png'
import "./Connexion.css";

import React from "react";
import { useForm } from "react-hook-form";

 const Connexion = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
<div className=" flex ">
      <div className=" h-screen w-screen drop-shadow-5xl bg-[url('assets/image.jpeg')] bg-no-repeat bg-cover bg-center flex justify-end">
        <div className="bg-gray-100/25 m-8 mr-20 w-3/6">
      <h1 className="flex justify-center font-bold mt-16 text-5xl text-white">CONNEXION</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="  flex flex-col px-32 gap-10 mt-12 items-center row g-3 d-flex">
      <div className="flex items-center w-full">
            <div className="bg-green-600 mt-8 p-3 py-3 flex justify-center items-center">
              <FaUserAlt className="w-10 h-10 text-white"/>
            </div>
        <div className="flex flex-col  w-full">

          <label htmlFor="email" className="text-white text-2xl relative left-4 top-12" >Email</label>
          <input  {...register("email", { required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })} type="email" id="email"  className="border-b-3 p-5 py-5 rounded-r-lg bg-gray-50/25" />
            
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
       
        </div>
        </div>
        <div className="flex items-center w-full">
            <div className="bg-green-600 mt-8 p-3 py-3 flex justify-center items-center">
              <FaLock className="w-10 h-10 text-white"/>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="password" className=" text-white text-2xl relative left-4 top-12">Mot de passe</label>
              
              <input  {...register("password", {  required: true,  minLength: 5,  maxLength: 20,
            })} type="password" id="password" className="border-b-3 p-5 py-5 rounded-r-lg bg-gray-50/25" />
      
            {errors.password?.type === "minLength" &&
              "Entered password is less than 5 characters"}
            {errors.password?.type === "maxLength" &&
              "Entered password is more than 20 characters"}
        
            </div>
        </div>
        <div>
        <button  onClick={onSubmit} className="p-4 bg-green-600 rounded text-white font-bold text-xl  hover:text-red-500">Se Connecter</button>
        </div>
        <div>
        <h1 className="flex justify-center font-bold  text-3xl text-white underline underline-offset-4">Poser votre carte !</h1>
          <img src={rfidImg} alt="" className="w-64"/>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
} 

export default Connexion;





