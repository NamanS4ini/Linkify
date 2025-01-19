import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-[#14122e] flex justify-center items-center min-h-[calc(100vh-56px)]">
        <div className="flex h-96 sm:flex-row flex-col justify-around items-center">
          <div className="flex flex-col justify-center items-center w-full p-2 sm:w-1/3">
            <h1 className="text-3xl font-bold">Linkify - Easy URL shortner</h1>
            <p className="text-center pt-10">This project streamlines link management by shortening long URLs. It provides a quick and convenient solution for sharing links.</p>
            <Link href={'/shortner'}>
            <button type="button" className="text-white font-bold bg-gradient-to-r mt-10 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg text-sm px-5 py-2.5 text-center me-2">Try Now</button>
            </Link>
          
          </div>
          <img src="Hero.png" alt="" />
        </div>
      </div>
    </>
  );
}