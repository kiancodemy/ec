function Newsletter() {
  return (
    <div className="bg-gradient-to-b  from-[#f7bdc5] to-[#f5e3e5] lg:max-w-[800px] rounded-lg p-6 my-14 gap-5 flex flex-col justify-center mx-auto items-center">
      <h1 className="capitalize font-semibold text-2xl lg:text-4xl text-[#454545]">
        get exclusive offers on your email
      </h1>
      <p className="lg:text-md text-sm text-[#454545]">
        subscribe to your newsletter and stay updated
      </p>
      <div className="border-2border-[#bbb] outline-none  rounded-full lg:w-[420px] bg-white border-solid border-1 flex justify-center items-center ">
        <input
          type="email"
          className="placeholder:capitalize border-none rounded-full pl-3  focus:outline-none focus:placeholder:translate-x-2 focus:placeholder:text-black  focus:placeholder:duration-300 focus:border-none  "
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
