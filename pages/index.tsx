import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServerCard from "../components/servercard";
import StaffCard from "../components/staffcard";
import useSWR from "swr";
import fetch from 'node-fetch';

export async function fetcher(...args) {
  const res = await fetch(...args)
  return res.json()
}

export default function Home() {
  const loadFailed = "Failed to load!"
  var playercount;
  const { data, error } = useSWR('https://api.mcsrvstat.us/2/dev.baezor.com', fetcher);
  if (error) playercount = loadFailed;
  if (!data) playercount = "Loading!";
  else if (!data.online) playercount = loadFailed;
  else playercount = data.players.online
  return (
    <>
        {/*Header image and stuffz*/}
        <div className="flex-grow overflow-x-hidden">
          <Navbar title="Next-Generation Minecraft Experiences" />
            <div className="relative">
              <div className="flex justify-center">
                <img src="main/main.jpg" className="w-full bg-cover min-w-[1280px] h-[calc(100vh-200px)] " alt="Background main page img" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0)] to-gray-700 h-[calc(100vh-200px)]" />
              <div className="flex items-center justify-center">
                <div className="absolute top-[15vh] flex flex-col items-center justify-center">
                  <img src="/logos/dh.jpg" width="600px" className="w-96 2xl:w-8/12 pb-5 px-2" alt="Featured server logo" />
                  <div className={"rounded-full select-none px-2 prose text-gray-200 font-semibold inline-flex mb-2 >>> bg-gray-800 bg-opacity-90 <<< " + (playercount !== loadFailed ? "bg-green-600t " : "bg-red-700t ")}>{/*{playercount} Players Online*/}Coming Soon!</div>
                  <button 
                    onClick={() => navigator.clipboard.writeText("dev.baezor.com")} 
                    className=">>> hidden <<< group inline-flex text-gray-200 rounded-full px-2 bg-gray-800 hover:bg-gray-700 focus:bg-green-600 cursor-pointer font-roboto focus:outline-none"
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
                        <ServerCard name="Dawn Horizons" desc="Experience an enhanced Survival gamemode, explore distant lands and create whatever you desire on your own personal island." img="/main/dawn-horizons.jpg" logo="logos/dh.jpg" ip="dev.baezor.com" open={false} />
                        <ServerCard name="Quartz Games" desc="Enjoy a library of unique and custom Minigames made by Quartz Studios." img="/main/quartz-games.jpg" logo="logos/qg.jpg" ip="" open={false} />
                        <ServerCard name="Coming soon..." desc="An MCMMO-style adventure game with an emphasis on questing, looting and pve. These elements combined with our high standard will deliver a Minecraft experience like no other." img="/main/demo1.jpg" logo="logos/coming-soon.jpg" ip="pls work !!!! :flushed:" open={false} />
                      </div>
                    </li>
                    <li>
                        {/*Staff List*/}
                          <ul className="flex flex-col bg-gray-900 py-4">
                            <li className="flex justify-center">
                              <h2 className=" tracking-wider text-3xl font-semibold uppercase text-gray-200">Development Team</h2>
                            </li>
                            <li className="flex justify-center mb-8">
                              <h3 className="prose-lg text-gray-200">The people that made this all possible</h3>
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
                                <StaffCard ign="drizcraft" uuid="a9c3d17765394130bb09131c792c3420" roleName="Events / Team" roleColor="bg-[#b5186c]" />
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
                        <li className="flex flex-col sm:flex-row justify-center items-center">
                          <img src="logos/discord.jpg" alt="Wumpus from discord. Made with ♥ by @drawwithkristi on pinterest" className="w-16 xs:w-64 md:w-96" />
                          <div className="md:ml-10 ml-2 sm:ml-0 mr-2 pt-4">
                            <h2 className="tracking-wider text-xl xs:text-3xl mb-4 xs:mb-0 font-semibold uppercase text-gray-200 text-center sm:text-left">Want to chat?</h2>
                            <p className="hidden xs:block sm:w-64 md:w-96 text-gray-200 font-roboto my-6 pl-2 text-center sm:text-left">
                              At Quartz Studios, communication key to a great community. Whether you want to chat with people or get support, our discord is the place. We value our discord community a lot as it's the backbone of our server, so join us!
                            </p>
                            <Link href="/discord">
                              <button className="w-full sm:w-auto  text-white text-lg font-semibold shadow bg-[#7289DA] hover:bg-[#5e75c4] border-b-4 border-blue-500 hover:border-blue-600 px-4 py-2 select-none focus:outline-none">Join our discord!</button>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
            </div>
          <Footer />
        </div>
    </>
  );
}

//'https://api.mcsrvstat.us/2/dev.baezor.com'

