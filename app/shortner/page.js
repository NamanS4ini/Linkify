"use client";
import React, { useState } from "react";

const Shortner = () => {
    const [URL, setURL] = useState("")
    const [Shrot, setShort] = useState("")
    const [Generated, setGenerated] = useState(false)
  return (
    <div className="bg-[#14122e] flex flex-col gap-4 items-center min-h-[calc(100vh-56px)]">
      <h1 className="text-3xl mt-52 font-bold">Generate short URLs</h1>
      <form className="w-full flex items-center flex-col" action="">
        <div className="sm:w-1/3 p-4 w-full">
          <input
            type="url"
            value={URL}
            onChange={(e)=>setURL(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your URL"
            required
          />
          <input
            type="text"
            value={Shrot}
            onChange={(e)=>setShort(e.target.value)}
            className="bg-gray-50 border mt-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Prefered short URL"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Create Link
        </button>
      </form>
      {Generated && (
        <div className="">
            <p className="text-white font-bold">Your short URL is: </p>
          </div>)}
    </div>
  );
};

export default Shortner;
