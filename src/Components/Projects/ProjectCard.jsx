import { floor } from "@splidejs/splide/src/js/utils";
import * as React from "react";

export default function ProjectCard(props) {
  const x = floor(Math.random() * 1000);
  return (
    <>
      {/* <h1 className="text-4xl my-10">{props.name}</h1>      */}
{/* 
      <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/img/building.jpg" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div> */}


      <a className="group flex flex-col items-center border rounded-lg shadow md:flex-row relative mb-4 dark:text-[#ffffff]">
        <img
          className="object-cover w-full rounded-lg  md:h-auto md:w-48 md:rounded-none md:rounded-lg"
          src={props.imgPath}
          alt=""
        />

        <div className="flex flex-col justify-between ml-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#343A40] dark:text-[#ffffff]">
            {props.title}
          </h5>

          <p className="font-black mb-3 text-[#343A40] dark:text-[#ffffff]">{props.name}</p>

          <div className="flex flex-row ">
            <button
              className="btn  mr-4"
              onClick={() =>
                document.getElementById("my_modal_" + x).showModal()
              }
            >
              description
            </button>

            <button className="btn w-40">Source Code</button>
          </div>
        </div>
      </a>

      <dialog id={"my_modal_" + x} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Desciption : </h3>
          <br />
          <p>{props.description}</p>
          <p className="py-4">Video:</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
