
import Navbar from "../components/navbar";
import ServerCard from "../components/servercard";
import Carousel from 'react-elastic-carousel';


export default function Home() {
  return (
    <>
        <Navbar title="Creating Next-Generation Minecraft Experiences" />
          <div className="bg-gray-700 flex-grow overflow-y-auto max-width-2xl">
            <div className="relative">
              <img src="main/demo3.png" className="w-full h-[calc(100vh-200px)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-gray-700 h-[calc(100vh-200px)]" />
            
          {/*<Carousel itemsToShow={1} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000} isRTL={true}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </Carousel>*/}
              <div className="flex items-center justify-center">
                <div className="absolute top-[15vh] flex flex-col items-center justify-center">
                  <img src="/logos/dh.png" className="w-96 pb-5" />
                  <div className="rounded-full select-none px-2 prose text-gray-200 font-semibold inline-flex bg-green-500 mb-2">110 Players Online</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText("dev.baezor.com")} 
                    className="group inline-flex text-gray-200 rounded-full px-2 bg-gray-800 hover:bg-gray-700 focus:bg-green-600 cursor-pointer font-roboto focus:outline-none"
                  >
                    <div className="relative items-center justify-center select-none">
                      <span className="group-hover:invisible group-focus:invisible">dev.baezor.com</span>
                      <span className="text-center hidden group-hover:block group-focus:hidden absolute top-0 ">Click to copy</span>
                      <span className="hidden group-focus:block absolute top-0 ">Copied!</span>
                    </div>
                  </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 absolute top-[calc(100vh-250px)]"> {/*lg:absolute lg:bottom-[-600px]*/}
                  <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                  <ServerCard name="ByteClub" desc=":amoooooooooooongus: When the imposter is suusssy" img="/main/demo2.png" logo="" ip="byteclub.minehut.gg" />
                  <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                  <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                  <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                  <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                  <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                  <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                </div>
              </div>
            </div>
          {/*footer here*/}
        </div>
    </>
  );
}



//'https://api.mcsrvstat.us/2/dev.baezor.com'
