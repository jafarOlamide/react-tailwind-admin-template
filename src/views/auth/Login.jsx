import React, { useState } from "react";
import { useForm } from "react-hook-form";
import reactLogo from "../../assets/react.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    const user = data;
    localStorage.setItem("user", user);
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="m-auto w-3/4 p-4 md:p-6 2xl:p-10">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex flex-wrap items-center">
              <div className="hidden w-full xl:block xl:w-1/2">
                <div className="py-17.5 px-26 text-center">
                  <a className="mb-5.5 inline-block" href="index.html">
                    <img src={reactLogo} alt="Logo" />
                  </a>
                  <p className="font-medium 2xl:px-20">React Tailwind Admin</p>
                </div>
              </div>
              <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
                <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                  <h2 className="mb-9 text-2xl font-bold text-blue sm:text-title-xl text-center">
                    Login
                  </h2>
                  <form
                    onSubmit={handleSubmit((data) => handleFormSubmit(data))}
                  >
                    <div className="mb-4">
                      {errors.email && (
                        <p className="text-red-500">Email is required</p>
                      )}
                      <label className="mb-2.5 block font-medium text-black">
                        Email
                      </label>
                      <div className="relative">
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      {errors.password && (
                        <p className="text-red-500">Password is required</p>
                      )}
                      <label className="mb-2.5 block font-medium text-black">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          {...register("password", { required: true })}
                          type="password"
                          className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <button
                        disabled={!isValid}
                        type="submit"
                        className="w-full text-center cursor-pointer flex justify-center rounded-lg border border-primary bg-sky-600 text-white font-bold p-4 disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
