function Newsletter() {
  return (
    <div className="bg-gradient-to-b  from-[#f7bdc5] to-[#f5e3e5] max-w-[900px] rounded-lg p-6 my-14 gap-5 flex flex-col justify-center mx-auto items-center">
      <h1 className="capitalize text-center font-semibold text-2xl lg:text-4xl text-[#454545]">
        get exclusive offers on your email
      </h1>
      <p className="lg:text-md text-sm text-center text-[#454545]">
        subscribe to your newsletter and stay updated
      </p>
      <div className="pl-3 outline-none max-w-[500px] mx-auto bg-white border-solid rounded-full border-1 flex justify-between  ">
        <input
          type="email"
          className="placeholder:capitalize border-none rounded-full focus:outline-none focus:placeholder:translate-x-2 focus:placeholder:text-black  focus:placeholder:duration-300 focus:border-none  "
          placeholder="Your email id"
        />
        <button
          className="text-[#ddd] capitalize hover:text-white  duration-500 inline-block py-1 px-3 lg:py-2 lg:px-6 rounded-full bg-black "
          type="submit"
        >
          subscribe
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
