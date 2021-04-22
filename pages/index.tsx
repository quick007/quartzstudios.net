
import Navbar from "../components/navbar";
import ServerCard from "../components/servercard";
import Carousel from 'react-elastic-carousel';


export default function Home() {
  return (
    <>
        <Navbar title="Hello World" />
          <div className="bg-gray-700 flex-grow overflow-y-auto">
          {/*<Carousel itemsToShow={1} showArrows={false} enableAutoPlay={true} autoPlaySpeed={5000} isRTL={true}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
          </Carousel>*/}
            <div className="grid-rows-3 grid-flow-col lg:flex lg:flex-row px-6 w-full">
              <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
              <ServerCard name="ByteClub" desc=":amooooooooooooooooooongus: When the imposter is suusssy" img="/main/demo2.png" logo="" ip="byteclub.minehut.gg" />
              
            </div>
            
          {/*footer here*/}
        </div>
    </>
  );
}



//'https://api.mcsrvstat.us/2/dev.baezor.com'
