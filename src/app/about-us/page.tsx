import React from "react";
import { aboutImg, missionImg, visionimg } from "@/assest/images";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className=" container px-4 mb-[8rem] min-h-screen mx-auto pt-[6rem] ">
      <section className="flex flex-col md:flex-row gap-11 justify-between">
        <main className=" md:w-[500px]">
          <span>
            <h1 className=" font-medium text-lg pb-4">About Us</h1>
          </span>
          <h2 className=" font-medium text-[30px] leading-[45px]">
            Our designs solve problems
          </h2>
          <p className=" text-sm leading-[27px] font-normal pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </main>
        <Image
          src={aboutImg}
          alt=""
          className=" rounded-md object-contain "
          width={500}
          height={500}
        />
      </section>

      <section className=" mt-[10rem] bg-gray-100 rounded-md ">
        <h2 className=" font-semibold text-lg py-6 px-4 ">Who we are</h2>
        <main className=" flex flex-col lg:flex-row justify-between gap-9 px-4">
          <div>
            <h2 className=" py-4 text-lg font-medium">Goal focused</h2>

            <p className=" text-sm leading-[27px] font-normal md:w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <h2 className=" py-4 text-lg font-medium">
              Continuous improvement
            </h2>
            <p className=" text-sm leading-[27px] font-normal md:w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </main>
        <div className=" aboutImg2 mt-6 w-full " />
      </section>

      <section className=" flex flex-col gap-y-24 mt-[7rem] md:mt-[10rem] p-3  md:p-[30px] bg-gray-100">
        <main className=" flex justify-between flex-col md:flex-row gap-8">
          <div className=" md:w-[500px]">
            <h2 className=" font-semibold text-lg">Our Mission</h2>
            <h2 className=" text-base font-medium py-4">
              Inspire, Innovate, Share
            </h2>
            <p className=" text-sm leading-[30px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Image
            src={missionImg}
            alt=""
            width={400}
            height={400}
            className=" rounded-md object-contain"
          />
        </main>
        <main className=" flex justify-between flex-col md:flex-row gap-8">
          <Image
            src={visionimg}
            alt=""
            width={400}
            height={400}
            className=" rounded-md object-contain"
          />
          <div className=" md:w-[500px]">
            <h2 className=" font-semibold text-lg">Our Vision</h2>
            <h2 className=" text-base font-medium py-4">
              Inspire, Innovate, Share
            </h2>
            <p className=" text-sm leading-[30px] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Aboutus;
