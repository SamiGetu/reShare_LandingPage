/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

function Cards(props: any) {
  return (
    <>
      <div className="max-w-sm p-6 bg-white">
        <div className={props.icon}></div>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h5>

        <p className="mb-3 w-[90%] font-normal text-gray-500 dark:text-gray-400">
          {props.disc}
        </p>
      </div>
    </>
  );
}

export default Cards;
