function Loginsignup() {
  return (
    <div className="py-40">
      <div className="border-2 p-8 border-[#ddd] rounded-lg  flex flex-col gap-5 max-w-[500px] mx-auto ">
        <h1 className="text-2xl lg:text-4xl font-semibold ">sign up</h1>

        <div className="flex flex-col">
          <input
            type="text"
            className="border-2 bordre-[#ddd] p-4 focus:placeholder:translate-x-4 focus:placeholder:duration-500  capitalize placeholder:text-black"
            placeholder="Your name"
          />
          <input
            type="email"
            className="border-2 bordre-[#ddd] p-4 focus:placeholder:translate-x-4 focus:placeholder:duration-500  capitalize placeholder:text-black"
            placeholder="Email"
          />
          <input
            type="password"
            className="border-2 bordre-[#ddd] p-4 focus:placeholder:translate-x-4 focus:placeholder:duration-500  capitalize placeholder:text-black"
            placeholder="Password"
          />
        </div>

        <button className="rounded-lg bg-red-600 duration-200 hover:bg-red-700 text-white capitalize py-4">
          continue
        </button>

        <p className="flex gap-1 text-sm lg:text-lg ">
          Already have an account ?
          <span className=" text-sm lg:text-lg font-semibold hover:text-red-600 duration-300">
            Login Here
          </span>
        </p>
        <div className="flex text-sm  items-center gap-2">
          <input type="checkbox" name="" id="" />
          <p>by continuing,i gree to the term of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
