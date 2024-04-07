/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

function Card({ reverse = false, ...props }) {
  return (
    <section>
      <div
        className={`flex  justify-center  px-5 py-24 gap-40   ${
          reverse
            ? "flex-col-reverse lg:flex-row-reverse "
            : "flex-col lg:flex-row"
        } items-center`}
      >
        <div className="lg:max-w-lg xl:w-full lg:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded relative z-10"
            alt="hero"
            src="https://dummyimage.com/720x600/edf2f7/a5afbd"
          />
        </div>
        <div className="lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center md:w-[40%] ">
          <h1 className="title-font md:text-4xl text-1xl mb-4 font-medium text-gray-900    ">
            {props.content.subtitle}
          </h1>

          <h2 className="title-font sm:text-7xl text-2xl mb-4 font-medium text-gray-900 relative z-10 ">
            {props.content.title}
          </h2>

          <p className="mb-8 text-sm text-gray-500 relative z-10 w-full">
            {props.content.desc}
          </p>

          <li className="pb-3 text-gray-500">
            students pracrice thier own pace first
          </li>
          <li className="pb-3 text-gray-500">
            students pracrice thier own pace first
          </li>
          <li className="pb-3 text-gray-500">
            students pracrice thier own pace first
          </li>
          <div className=" w-[400px] h-[400px] bg-purple-500 rounded-full absolute z-1 right-0   translate-y-[-80%] blur-[250px]"></div>
        </div>
      </div>
    </section>
  );
}

export default Card;
