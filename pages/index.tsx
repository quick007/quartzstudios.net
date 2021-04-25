
import Navbar from "../components/navbar";
import ServerCard from "../components/servercard";
import StaffCard from "../components/staffcard";


export default function Home() {
  return (
    <>
        <Navbar title="Next-Generation Minecraft Experiences" />
          <div className="bg-gray-700 flex-grow overflow-y-auto max-width-2xl">
            <div className="relative">
              <div className="flex justify-center">
                <img src="main/demo3.png" className="w-full h-[calc(100vh-200px)] min-w-[1280px] max-w-[1928px]" />
              </div>
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
                  <img src="/logos/dh.png" className="w-96 pb-5 px-2" />
                  <div className="rounded-full select-none px-2 prose text-gray-200 font-semibold inline-flex bg-green-600 mb-2">110 Players Online</div>
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
              </div>
                
                <div className="flex justify-center mx-5 mb-4">
                  <ul className="space-y-5">
                    <li className="flex justify-center">
                      {/*Servercards*/}
                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                        <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                        <ServerCard name="ByteClub" desc=":amoooooooooooongus: When the imposter is suusssy" img="/main/demo2.png" logo="" ip="byteclub.minehut.gg" />
                        <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                        <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                        <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                        <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                        <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                        <ServerCard name="Dawn Horizons" desc="poggersrow" img="/main/demo1.png" logo="logos/dh.png" ip="dev.baezor.com" />
                      </div>
                    </li>
                    <li>
                        {/*Staff List*/}
                          <ul className="flex flex-col bg-gray-900 py-4">
                            <li className="flex justify-center">
                              <h2 className=" tracking-wider text-3xl font-semibold uppercase text-gray-200">Development Team</h2>
                            </li>
                            <li className="flex justify-center mb-8">
                              <h4 className="prose-lg text-gray-200">The people that made this all possible</h4>
                            </li>
                            <li className="mx-4 flex justify-center">
                              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                                <StaffCard ign="Levah" uuid="e3d2c72ac20047979f4dec3f0f0f42c3" roleName="Director" roleColor="bg-[#ff5151]" />
                                <StaffCard ign="Blight_Phoenixx" uuid="c5a7eb3577024bedb8e98bf713fe9ed6" roleName="Director" roleColor="bg-[#ff5151]" />
                                <StaffCard ign="Ankoki" uuid="8a7c6a68edfc435daa32df915193891e" roleName="Admin" roleColor="bg-[#43ae30]" />
                                <StaffCard ign="Migins" uuid="2326c5b7f21d466c8b85909b359b54e7" roleName="Admin" roleColor="bg-[#43ae30]" />
                                <StaffCard ign="Baezor" uuid="93eb06cd0a1e4d04affe81a59b632815" roleName="Admin" roleColor="bg-[#43ae30]" />
                                <StaffCard ign="B1llyMarsh" uuid="4f28d53ccdf241b985f2cf40439f449c" roleName="Admin" roleColor="bg-[#43ae30]" />
                                <StaffCard ign="quick_007" uuid="b597aac0011f41d0bab1edc1b809016e" roleName="Web Dev" roleColor="bg-[#cc8b0a]" />
                                <StaffCard ign="drizcraft" uuid="a9c3d17765394130bb09131c792c3420" roleName="Events/Team" roleColor="bg-[#b5186c]" />
                                <StaffCard ign="dinomite" uuid="569f5d0903ad4b29ae2039d833bff3a5" roleName="Team" roleColor="bg-[#407cea]" />
                                <StaffCard ign="TrueFusion" uuid="82ce07bce885485e9596f45ecac16681" roleName="Team" roleColor="bg-[#407cea]" />
                                <StaffCard ign="pesekjan" uuid="d9b0d8f17bff48c7b34a673db8a6c072" roleName="Team" roleColor="bg-[#407cea]" />
                                <StaffCard ign="_iGalaxy" uuid="1648064bd42343fd933a18ec907fd893" roleName="Team" roleColor="bg-[#407cea]" />
                                <StaffCard ign="Death_Source" uuid="b46023a13ed043c48345f2cec57d079b" roleName="Team" roleColor="bg-[#407cea]" />
                                <StaffCard ign="cheekyrotter" uuid="bef26ef9e25c4e43a8a10187fe16f99c" roleName="Team" roleColor="bg-[#407cea]" />
                                <StaffCard ign="backlist" uuid="2fc9547016e04afb8a05fe25c24c4f25" roleName="Team" roleColor="bg-[#407cea]" />
                              </div>
                            </li>
                          </ul>
                    </li>
                    <li>
                      {/*Join our discord*/}
                      <ul className="flex flex-col bg-gray-900 py-4">
                        <li className="flex justify-center">
                          <div>
                            <h2 className=" tracking-wider text-3xl font-semibold uppercase text-gray-200">Lets be social!</h2>
                          </div>
                          <div>
                            t
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
            </div>
          {/*footer here*/}
        </div>
    </>
  );
}



//'https://api.mcsrvstat.us/2/dev.baezor.com'
