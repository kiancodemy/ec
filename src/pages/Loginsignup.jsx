import { useForm } from "react-hook-form";

import { DevTool } from "@hookform/devtools";
import { useState, useEffect } from "react";
function Loginsignup() {
  const [datas, setdata] = useState();
  const { register, handleSubmit, formState, watch, control, reset } =
    useForm();
  const { errors, isValid, isDirty, isSubmitting, isSubmitSuccessful } =
    formState;

  const submit = (data) => {
    console.log("sent");
    setdata(data);
    console.log(data);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="py-40">
      <div className="border-2 p-8 border-[#ddd] rounded-lg  flex flex-col gap-6 max-w-[500px] mx-auto ">
        <h1 className="text-2xl lg:text-4xl font-semibold ">sign up</h1>

        <form onSubmit={handleSubmit(submit)} className="flex gap-2  flex-col">
          <input
            type="text"
            {...register("name", {
              required: { value: true, message: "fill the field" },
            })}
            className="border-2 bordre-[#ddd] p-4 focus:placeholder:translate-x-4 focus:placeholder:duration-500  capitalize placeholder:text-black"
            placeholder="Your name"
          />
          <p className="text-red-500 capitalize animate-bounce py-1">
            {errors?.name?.message}
          </p>
          <input
            type="email"
            {...register("email", {
              required: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "fill the field",
              },
            })}
            className="border-2 bordre-[#ddd] p-4 focus:placeholder:translate-x-4 focus:placeholder:duration-500  capitalize placeholder:text-black"
            placeholder="Email"
          />
          <p className="text-red-500 animate-bounce capitalize py-1">
            {errors?.email?.message}
          </p>
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "fill the password section" },
            })}
            className="border-2 bordre-[#ddd] p-4 focus:placeholder:translate-x-4 focus:placeholder:duration-500  capitalize placeholder:text-black"
            placeholder="Password"
          />
          <p className="text-red-500 animate-bounce capitalize py-1">
            {errors?.password?.message}
          </p>
          <button
            disabled={!isDirty && !isValid && isSubmitting}
            type="submit"
            className="rounded-lg mt-7 bg-red-600 duration-200 hover:bg-red-700 text-white capitalize py-4"
          >
            continue
          </button>
        </form>
        <DevTool control={control}></DevTool>

        <p className="flex gap-2 text-sm lg:text-lg ">
          Already have an account ?
          <span className=" text-sm lg:text-lg font-semibold hover:text-red-600 duration-300">
            Login here
          </span>
        </p>
        <div className="flex  items-center gap-2">
          <input type="checkbox" name="" id="" />
          <p className="text-sm ">
            by continuing,i gree to the term of use & privacy policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
