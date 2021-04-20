import Head from 'next/head';
import Navbar from "../components/navbar";
import ServerCard from "../components/servercard";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <>
      <Navbar title="Hello World" />
      <div className="flex flex-grow flex-col bg-gray-700 min-h-screen">
        t
        <div className="grid-rows-3 grid-flow-col gap-4 lg:space-y-0 lg:flex lg:flex-row px-6 w-full">
          <ServerCard title="Dawn Horizens" desc="foo" img="logos/main" ip="dev.baezor.com" />
          <ServerCard title="ByteClub" desc="foo" img="logos/embead" ip="byteclub.minehut.gg" />
          
        </div>
      </div>
      {/*footer here*/}
    </>
  )
}


//'https://api.mcsrvstat.us/2/dev.baezor.com'
