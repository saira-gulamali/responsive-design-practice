const HeroSection = () => {
  return (
    <div className="flex h-screen justify-center">
      <div className="w-full max-w-5xl border-2 border-red-400 flex flex-col-reverse md:flex-row gap-8 justify-center items-center p-4">
        <div>
          <h1 className="max-w-[480px] font-primary  text-violet-800 text-3xl md:text-5xl font-bold">
            Something <span className="text-yellow-500">Catchy</span> and{" "}
            <span className="text-pink-600"> Technological</span>
          </h1>
          <button className="border-4 border-violet-800 text-xl font-bold text-violet-800 px-10 py-4 my-8 ">
            Learn More
          </button>
        </div>
        <img
          className=" md:max-w-[600px] border-4 border-blue-400"
          src="https://static-task-assets.react-formula.com/963190.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
