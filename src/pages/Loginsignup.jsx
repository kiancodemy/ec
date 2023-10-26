function Loginsignup() {
  return (
    <div className="py-40">
      <div className="border-2 p-8 border-[#ddd] rounded-lg  flex flex-col gap-5 max-w-[500px] mx-auto ">
        <h1 className="text-4xl font-semibold ">sign up</h1>

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

        <button className="bg-red-600 text-white capitalize py-4">
          continue
        </button>

        <p>
          Already have an account?
          <span className="font-semibold"> Login Here</span>
        </p>
        <div></div>
      </div>
    </div>
  );
}

export default Loginsignup;
