
import Navbar from "../components/navbar";
import ServerCard from "../components/servercard";
import Carousel from 'react-elastic-carousel';


export default function Home() {
  return (
    <>
        <Navbar title="Hello World" />
          <div className="bg-gray-700 flex-grow overflow-y-auto max-width-2xl">
            <div className="relative">
              <img src="main/demo3.png" className="w-full h-[calc(100vh+100px)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-gray-700 h-[calc(100vh+100px)]" />
            
          {/*<Carousel itemsToShow={1} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000} isRTL={true}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </Carousel>*/}
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10"> {/*lg:absolute lg:bottom-[-600px]*/}
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
