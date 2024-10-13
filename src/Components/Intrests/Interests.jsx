import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

export default function Interests() {
  return (
    <>
      <h1 className="text-6xl my-10 dark:text-[#ffffff]" id="Interests">
        INTERESTS
      </h1>
      <h1 className="text-4xl mt-4 ml-4 dark:text-[#ffffff]">Cyber Security</h1>

      <Splide hasTrack={false} aria-label="...">
        <SplideTrack>
          <SplideSlide>
            <h1 className="dark:text-[#ffffff]">Enit Got the Flag 1.0 (ENIT)</h1>
            <img
              src={require("../../assets/img/ctf1-fe5e0b6e.jpg")}
              alt="Image 2"
              style={{ borderRadius: "10px" }}
            />
          </SplideSlide>
          <SplideSlide>
            <h1 className="dark:text-[#ffffff]">HackFest 8.0 (SUP'COM)</h1>
            <img
              src={require("../../assets/img/hackfest8.jpg")}
              alt="Image 2"
              style={{ borderRadius: "10px" }}
            />
          </SplideSlide>
          <SplideSlide>
            <h1 className="dark:text-[#ffffff]">HackFest 7.0 (SUP'COM)</h1>
            <img
              src={require("../../assets/img/ctf4-925536ad.jpg")}
              alt="Image 2"
              style={{ borderRadius: "10px" }}
            />
          </SplideSlide>
        </SplideTrack>
      </Splide>

      <h1 className="text-4xl mt-4 ml-4 dark:text-[#ffffff]">Competetive programming</h1>

      <Splide hasTrack={false} aria-label="...">
        <SplideTrack>
          <SplideSlide>
            <h1 className="dark:text-[#ffffff]">Enit Got the Flag 1.0 (ENIT)</h1>
            <img
              src={require("../../assets/img/cpc2-6220cb0d.jpg")}
              alt="Image 2"
              style={{ borderRadius: "10px" }}
            />
          </SplideSlide>
          <SplideSlide>
            <h1 className="dark:text-[#ffffff]">HackFest 8.0 (SUP'COM)</h1>
            <img
              src={require("../../assets/img/epc2.0.jpg")}
              alt="Image 2"
              style={{ borderRadius: "10px" }}
            />
          </SplideSlide>
        </SplideTrack>
      </Splide>

      <h1 className="text-4xl mt-4 ml-4 dark:text-[#ffffff]">Hackathon</h1>

      <Splide hasTrack={false} aria-label="...">
        <SplideTrack>
          <SplideSlide>
            <h1 className="dark:text-[#ffffff]">Enit Got the Flag 1.0 (ENIT)</h1>
            <img
              src={require("../../assets/img/isamm.jpg")}
              alt="Image 2"
              style={{ borderRadius: "10px" }}
            />
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </>
  );
}
