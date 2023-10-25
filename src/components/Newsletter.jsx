function Newsletter() {
  return (
    <div className="bg-gradient-to-b from-[#f7bdc5] to-[#f5e3e5] lg:max-w-[800px] rounded-lg p-6 my-14 gap-6 flex flex-col justify-center mx-auto items-center">
      <h1 className="capitalize font-semibold text-4xl text-[#454545]">
        get exclusive offers on your email
      </h1>
      <p className="text-md text-[#454545]">
        subscribe to your newsletter and stay updated
      </p>
      <div className="rounded-full   bg-white border-solid border-1 border-black flex   justify-between items-center ">
        <input
          type="email"
          className="border-none rounded-full pl-2  focus:outline-none focus:placeholder:translate-x-4  focus:placeholder:duration-300 focus:border-none  "
          placeholder="Your email id"
        />
        <button
          className="text-white hover:translate-x-3 duration-500 inline-block py-2 px-6 rounded-full bg-black "
          type="submit"
        >
          subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
