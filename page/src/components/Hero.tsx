// import ParticlesDesign from "./ParticleDesign";
import Button from "./Button";
import ParticlesDesign from "./ParticleDesign";

// xs: , sm, md, lg , xl

// text-center sm:text-left md:text-right
function Hero() {
  return (
    <>
      <div className="flex  justify-between flex-col lg:flex-row space-y-5 lg:space-y-0  pt-5 xl:h-screen bg-green-100 ">
        <ParticlesDesign />

        <div className="pt-32 flex flex-col justify-center items-center text-center lg:text-left md:p-20">
          <h1 className="mb-4 font-bold lg:text-black-300  text-2xl lg:text-6xl sm:text-5xl  relative z-10  ">
            Access and <br /> Share Collage <br /> Resources with <br /> RES
            SHARE
          </h1>

          <p className="text-lg font-normal text-gray-500 lg:text-2xl dark:text-gray-400  relative z-10">
            Empowering Students with Colaberative Platform
          </p>
          <div className="w-[300px] h-[300px] bg-green-400 rounded-full absolute z-1 top-[55%] left-[45%] translate-x-[-50%] translate-y-[-50%] blur-[250px]"></div>
          <div className="mt-5">
            <Button className="py-3 lg:py-5 px-20 mr-2 mb-2 text-lg font-medium text-black focus:outline-none bg-green-400 border rounded-md  hover:bg-green-500 hover:text-white hover:border-hidden focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Get started
            </Button>
          </div>
        </div>

        <img
          className="rounded-lg relative z-10 "
          src="/images/heroimg.png"
          alt=""
        />
      </div>
    </>
  );
}

export default Hero;
