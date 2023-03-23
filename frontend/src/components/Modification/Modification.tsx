import "./Modification.css";
import { useForm } from "react-hook-form";
import { useRef } from "react";

const Modification = () => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    // let email = e.target.elements.email?.value;
    // let password = e.target.elements.password?.value;

    // console.log(password, password);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  const password = useRef({})
  password.current = watch("nouveauPassword", "")

  return (
    <div className="border-primaryBorder shadow-default m-auto w-full max-w-md rounded-lg border bg-white px-16">
      <h1 className="text-emerald-500 mt-4 mb-4 text-center text-2xl font-bold ">
        Modfier le mot de passe
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Actuel mot de passe</label>
          <input
            {...register("actuelPassword", { required: true, maxLength: 80 })}
            type="password"
            className={`text-primary mb-4 w-full border-2 border-gray-700 p-2 text-sm outline-none transition duration-150 ease-in-out`}
            id="actuelPassword"
            placeholder="actuel mot de passe"
          />
          {errors.actuelPassword?.type === "required" &&
            <span className='text-red-600'>Ce champ est Obligatoire</span>
          }
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Nouveau mot de passe</label>
          <input
            {...register("nouveauPassword", {
              required: { value: true, message: "Champ Obligatoire" },
              /*  validate: value=>password.current===value || "Les deux mots de passe ne correspondent pas" */
            })}
            type="password"
            className={`text-primary mb-4 w-full border-2 border-gray-700 rounded-md p-2 text-sm outline-none transition duration-150 ease-in-out`}
            id="newPassword"
            placeholder="nouveau mot de passe"
          />
          {errors.nouveauPassword?.type === "required" &&
            <span className='text-red-600'>Ce champ est Obligatoire</span>
          }
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Confirmation mot de passe</label>
          <input
            {...register("confirmationPassword", {
              required: { value: true, message: "Champ Obligatoire" },
              validate: value => password.current === value || "Les deux mots de passe ne correspondent pas"
            })}
            type="password"
            className={`text-primary mb-4 w-full rounded-md border-2 border-gray-700 p-2 text-sm outline-none transition duration-150 ease-in-out`}
            id="confirmPassword"
            placeholder="confirmation mot de passe"
          />
          {errors.confirmationPassword &&
            <span className='text-red-600'>{errors.confirmationPassword.message as string}</span>
          }
        </div>

        <div className="mt-4 mb-5 flex items-center justify-end">
          <button
            type="submit"
            className={`bg-emerald-100 text-dark focus:border-emerald-800 rounded border py-2 px-4 text-md focus:outline-none`}
          >
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modification;
/* 

Modification

*/
