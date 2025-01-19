"use client";
import React, { useState } from "react";
import Link from "next/link";

const Shortner = () => {
  const [URL, setURL] = useState("");
  const [Short, setShort] = useState("");
  const [Generated, setGenerated] = useState(false);
  const generateURL = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: URL,
      shortUrl: Short,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `/api/generate`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {alert(result.message)
        if (result.success) {
            setGenerated(true);
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-[#14122e] flex flex-col gap-4 items-center min-h-[calc(100vh-56px)]">
      <h1 className="text-3xl mt-52 font-bold">Generate short URLs</h1>
      <div className="sm:w-1/3 p-4 w-full">
        <input
          type="url"
          value={URL}
          onChange={(e) => setURL((e.target.value))}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your URL"
          required
        />
        <input
          type="text"
          value={Short}
          onChange={(e) => setShort((e.target.value).replace(/\s+/g, ""))}
          className="bg-gray-50 border mt-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Prefered short URL"
          required
        />
      </div>
      <button
        onClick={generateURL}
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none disabled:opacity-65 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" {...((URL.startsWith("https://") || URL.startsWith("http://") || URL.startsWith("www.") )&& Short ? {} : { disabled: true })}
      >
        Create Link
      </button>
      {Generated && (
        <div className="">
          <p className="text-white font-bold">Your short URL is:
            <Link className="text-blue-500 underline" target="_blank" href={process.env.NEXT_PUBLIC_PAGE_URL+'/' + Short}>
            {
                process.env.NEXT_PUBLIC_PAGE_URL+'/' + Short
            } 
            </Link>
            </p>
        </div>
      )}
    </div>
  );
};

export default Shortner;
