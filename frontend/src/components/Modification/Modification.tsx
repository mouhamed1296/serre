import "./Modification.css";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const Modification = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  const password=useRef({})
  password.current=watch("nouveauPassword", "")

  return (
    <div className="border-primaryBorder drop-shadow-lg m-auto w-3/5 h-1/2 rounded-lg border bg-white px-16">
      <h1 className="text-emerald-500 mt-4 mb-4 text-center text-2xl font-bold ">
        Modfier le mot de passe
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg">Actuel mot de passe</label>
          <input
            {...register("actuelPassword", { required: true,  minLength: 5, maxLength: 20 })}
            type="password"
            className={`text-primary mb-4 w-full border-2 border-gray-700 rounded-md p-2 text-sm outline-none transition duration-150 ease-in-out`}
            id="actuelPassword"/>
          {errors.actuelPassword?.type === "required" &&
            <span className='text-red-600 text-sm -mt-4'>Ce champ est Obligatoire</span>
          }
          {errors.actuelPassword?.type === "minLength" &&
            <span className='text-red-600 text-sm -mt-4'>Miminum 5 caractères</span>
          }
          {errors.actuelPassword?.type === "maxLength" &&
            <span className='text-red-600 text-sm -mt-4'>Maximum 20 caractères</span>
          }
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg">Nouveau mot de passe</label>
          <input
            {...register("nouveauPassword", {
              required: {value: true, message: "Champ Obligatoire"}, minLength: 5, maxLength: 20 
            })}
            type="password"
            className={`text-primary mb-4 w-full border-2 border-gray-700 rounded-md p-2 text-sm outline-none transition duration-150 ease-in-out`}
            id="newPassword"/>
          {errors.nouveauPassword?.type === "required" &&
            <span className='text-red-600 text-sm -mt-4'>Ce champ est Obligatoire</span>
          }
          {errors.nouveauPassword?.type === "minLength" &&
            <span className='text-red-600 text-sm -mt-4'>Miminum 5 caractères</span>
          }
          {errors.nouveauPassword?.type === "maxLength" &&
            <span className='text-red-600 text-sm -mt-4'>Maximum 20 caractères</span>
          }
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-lg">Confirmation mot de passe</label>
          <input
            {...register("confirmationPassword", {
              required: {value: true, message: "Champ Obligatoire"},
              validate: value=>password.current===value || "Les deux mots de passe ne correspondent pas"
            })}
            type="password"
            className={`text-primary mb-4 w-full rounded-md border-2 border-gray-700 p-2 text-sm outline-none transition duration-150 ease-in-out`}
            id="confirmPassword"/>
          {errors.confirmationPassword &&
            <span className='text-red-600 text-sm -mt-4'>{errors.confirmationPassword.message as string}</span>
          }
        </div>
        <div className="mt-4 mb-5 flex items-center justify-end">
          <button
            type="submit"
            className={`bg-emerald-100 text-dark hover:bg-emerald-600 hover:text-white rounded border py-2 px-4 -mt-2 m-2 text-md focus:outline-none`}>
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modification;