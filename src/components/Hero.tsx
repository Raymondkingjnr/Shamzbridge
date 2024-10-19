import React from "react";

const Hero = () => {
  return (
    <div className="herobg px-4 min-h-screen text-white pt-[13rem] md:pt-[16rem] ">
      <div className=" container mx-auto">
        <main className=" md:max-w-[700px]">
          <h3 className=" text-[26px] leading-[34px] md:text-[50px] md:leading-[60px]">
            From Concept Completion creating unforgettable experiences
          </h3>
          <p className=" md:max-w-[500px] pt-5">
            All-in-one place for Capacity Development | Consulting and Advisory
            | Programs Management | Event Management and Hosting Services
          </p>
          <div className=" flex flex-col md:flex-row gap-4 items-center mt-6">
            <input
              className=" h-[40px] px-2 rounded-md border-none text-black w-full focus:outline-none"
              placeholder="Email"
            />
            <button className=" w-full md:w-[200px]  rounded-md bg-orange-300 h-[40px]">
              Get early access
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Hero;
