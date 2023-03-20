import React from "react";
import "./Modification.css";
import { useForm } from "react-hook-form";

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
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div className="bg-gray-bg1 flex h-screen">
      <div className="border-primaryBorder shadow-default m-auto w-full max-w-md rounded-lg border bg-white py-10 px-16">
        <h1 className="text-primary mt-4 mb-12 text-center text-2xl font-medium ">
          Modfier le mot de passe
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="password">Actuel mot de passe</label>
            <input
              {...register("actuelPassword", { required: true, maxLength: 80 })}
              type="password"
              className={`text-primary mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out`}
              id="email"
              placeholder="actuel mot de passe"
            />
          </div>
          <div>
            <label htmlFor="password">Nouveau mot de passe</label>
            <input
              {...register("nouveauPassword", {
                required: true,
                maxLength: 80,
              })}
              type="password"
              className={`text-primary mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out`}
              id="password"
              placeholder="nouveau mot de passe"
            />
          </div>
          <div>
            <label htmlFor="password">Confirmation mot de passe</label>
            <input
              {...register("confirmationPassword", {
                required: true,
                maxLength: 80,
              })}
              type="password"
              className={`text-primary mb-4 w-full rounded-md border p-2 text-sm outline-none transition duration-150 ease-in-out`}
              id="password"
              placeholder="confirmation mot de passe"
            />
          </div>

          <div className="mt-6 flex items-center justify-center">
            <button
              type="submit"
              className={`bg-green border-green focus:border-green-dark rounded border py-2 px-4 text-sm text-black focus:outline-none`}
            >
              Modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modification;
/* 

Modification

*/
