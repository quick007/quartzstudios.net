import Navbar from "../components/navbar";
import ServerCard from "../components/servercard";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <>
        <Navbar title="Hello World" />
          <div className="bg-gray-700 flex-grow overflow-y-auto">
            
            <div className="grid-rows-3 grid-flow-col gap-4 lg:space-y-0 lg:flex lg:flex-row px-6 w-full">
              <ServerCard name="Dawn Horizens" desc=" G G G G G G G G G G G G G G G G G G G G G G G G G G G G G G G G G G G G G " img="main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
              <ServerCard name="ByteClub" desc=":amooooooooooooooooooongus: When the imposter is suusssy" img="main/demo2.png" logo="" ip="byteclub.minehut.gg" />
              
            </div>
            
          {/*footer here*/}
        </div>
    </>
  );
}


//'https://api.mcsrvstat.us/2/dev.baezor.com'
