import { aboutImg } from "@/assest/images";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className=" container mx-auto  px-4 mb-[8rem] min-h-screen pt-[6rem] ">
      <main className=" flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        <div className=" md:w-[500px]">
          <span className=" flex items-center gap-2">
            <div className=" w-[120px] h-[2px] bg-black" />
            <h1 className=" font-medium text-lg">What we do</h1>
          </span>
          <p className=" font-normal leading-8 text-sm pt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            debitis quae, quisquam nesciunt eos aut similique. Culpa dolores,
            doloremque aliquid reprehenderit inventore in unde sapiente sed
            fugit sequi ex magnam?
          </p>
        </div>
        <Image
          src={aboutImg}
          alt=""
          width={500}
          height={500}
          className=" object-contain rounded-md"
        />
      </main>
      <main className=" mt-[10rem]">
        <div className=" grid place-content-center">
          <h2 className=" text-center md:w-[500px] font-semibold text-xl md:text-2xl leading-8">
            Our mission is to make business better by providing the best
            services through innovating technology
          </h2>
        </div>
        <article className=" grid md:grid-cols-2 xl:grid-cols-3 gap-[3rem] mt-12 place-content-center items-center lg:items-start">
          <div className=" lg:w-[400px] shadow-lg rounded-sm p-[15px]">
            <h1 className=" font-medium text-lg">Capacity development</h1>
            <p className=" font-normal leading-8 text-sm pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis mollitia quis atque quasi, facere reprehenderit fugit
              amet ab nemo tempore odit sed modi fugiat nostrum quae accusantium
              debitis incidunt suscipit consectetur ad dolorum repudiandae autem
              doloribus. Nam qui similique ad?
            </p>
          </div>
          <div className=" lg:w-[400px] shadow-lg rounded-sm p-[15px]">
            <h1 className=" font-medium text-lg">Consulting and Advisory</h1>
            <p className=" font-normal leading-8 text-sm pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis mollitia quis atque quasi, facere reprehenderit fugit
              amet ab nemo tempore odit sed modi fugiat nostrum quae accusantium
              debitis incidunt suscipit consectetur ad dolorum repudiandae autem
              doloribus. Nam qui similique ad?
            </p>
          </div>
          <div className=" lg:w-[400px] shadow-lg rounded-sm p-[15px]">
            <h1 className=" font-medium text-lg">Programs Management</h1>
            <p className=" font-normal leading-8 text-sm pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis mollitia quis atque quasi, facere reprehenderit fugit
              amet ab nemo tempore odit sed modi fugiat nostrum quae accusantium
              debitis incidunt suscipit consectetur ad dolorum repudiandae autem
              doloribus. Nam qui similique ad?
            </p>
          </div>
          <div className=" lg:w-[400px] shadow-lg rounded-sm p-[15px]">
            <h1 className=" font-medium text-lg">Event Management</h1>
            <p className=" font-normal leading-8 text-sm pt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis mollitia quis atque quasi, facere reprehenderit fugit
              amet ab nemo tempore odit sed modi fugiat nostrum quae accusantium
              debitis incidunt suscipit consectetur ad dolorum repudiandae autem
              doloribus. Nam qui similique ad?
            </p>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Services;
