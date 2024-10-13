import React from "react";

export default function Education() {
  return (
    <>
      <h1 className="text-6xl  my-10 dark:text-[#ffffff]" id="Education">
        {" "}
        EDUCATION
      </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              className="h-5 w-5 "
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic ">
              <h1 className="text-black dark:text-[#ffffff]">2019</h1>
            </time>
            <div className="text-lg font-black">
              <h1 className="font-black dark:text-[#ffffff]">Bacalaureate in Mathematics</h1>
            </div>
            <h1 className="text-green">Soukrine Teboulba high school</h1>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">
              <h1 className="text-black dark:text-[#ffffff]">2019-2022</h1>
            </time>
            <div className="text-lg font-black">
              <h1 className="font-black dark:text-[#ffffff]">
                Preparatory Institute for Engineering Studies of Nabeul
              </h1>
            </div>
            <h1 className="text-green ">IPEIN</h1>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">
              <h1 className="text-black dark:text-[#ffffff]">2022 - Present</h1>
            </time>
            <div className="text-lg font-black">
              <h1 className="font-black dark:text-[#ffffff]">
                National School Of Computer Science
              </h1>
            </div>
            <h1 className="text-green">ENSI</h1>
          </div>
          <hr />
        </li>
      </ul>
    </>
  );
}
