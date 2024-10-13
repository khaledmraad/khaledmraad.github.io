import React from "react";

export default function ItsMe() {
  return (
    <>
      <div>
        <div class="grid grid-cols-3 gap-4  mt-20">
          <div class="">
            <img
              src={require("../../assets/img/khaled.jpeg")}
              alt=""
              class="w-60 h-60 rounded-full"
            />
          </div>
          <div class="col-span-2 mt-4 ml-4">
            <h1 className="text-xl dark:text-[#ffffff]">HI, MY NAME IS</h1>
            <h1 className="h1 font-Meutas text-7xl ml-2 mt-2  dark:text-[#ffffff]  ">
              KHALED
              <br />
              MRAD
            </h1>
            <h1 className="text-2xl mt-2 dark:text-[#ffffff]">Into everything FOSS</h1>
          </div>
        </div>
        <div className="text-[#343A40] mt-10 Roboto text-xl leading-8 dark:text-[#ffffff]  ">
          I’m a final year computer science engineering student at ENSI, driven
          by a passion for applying my knowledge to tackle real-world
          challenges. I thrive on the dynamic nature of this field and am
          committed to continuously honing my skills to make meaningful
          contributions to the world of technology.
        </div>
      </div>
    </>
  );
}
