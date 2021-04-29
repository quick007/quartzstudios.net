import Navbar from "../../components/navbar";
import Footer from "../../components/footer";



export default function Home() {
    return (
        <>
            <div className="w-full bg-gray-700">
                <div className="flex flex-col">
                    <Navbar title="Rules" isRules={true} />
                        <div className=" flex flex-col items-center mx-auto max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-[78rem] h-full w-full text-gray-200">
                            <div className="flex flex-col items-center h-screen md:h-auto">
                                <h2 className="text-gray-100 text-4xl font-semibold prose-2xl mt-32">Rules</h2>
                                <hr className="mt-1 w-16 border-t-[3px] border-blue-600 mb-32" />
                            </div>
                            <div className="w-full bg-gray-900 p-4 mb-8">
                                <h3 className="uppercase my-2 tracking-wide font-semibold text-gray-200 text-center md:text-left">Inappropriate Chat Conduct</h3>
                                <ul className="text-gray-300 w-full flex flex-col justify-center space-y-4 md:ml-6">
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Spam, flood or excessive capital usage is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Posting a link not related to the ongoing chat. All Links posted should be <span className="rounded-md bg-gray-900 bg-opacity-50 p-1">https://</span> and not contain any viruses or otherwise malicious content.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">NSFW content (nudity, gore, etc) or excessively inappropriate behaviour is not allowed. </li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Disrespectful behaviour is not allowed. Swearing is allowed, however directed or excessive swearing is not.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Perverse behaviour and creating/continuing arguments for the sake of an argument is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Arguing with or publicly flaming staff members based on their administrative actions is not allowed. Staff members will always have the final say - any and all complaints should be directed to <span className="rounded-md bg-gray-900 bg-opacity-50 p-1">Levah#0001</span> and not public chat.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Using our platforms to advertise other content (whether via DM, public chat, or ingame messaging channel [like a party chat]) is not allowed unless otherwise specified.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Purposely misusing channels is not allowed. If you are unsure of a channel’s usage, ask.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Generally try and think about what you send before you send it.</li>
                                </ul>
                            </div>
                            <div className="w-full bg-gray-900 p-4 mb-8">
                                <h3 className="uppercase my-2 tracking-wide font-semibold text-gray-200 text-center md:text-left">Inappropriate Behavior</h3>
                                <ul className="text-gray-300 w-full flex flex-col justify-center space-y-4 md:ml-6">
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Irritating or disruptive behaviour is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Using and sharing the Quartz Studios assets are strictly forbidden, the resource pack is copyrighted content.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">DDOS'ing is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Don't exploit vanilla Minceaft exploits or unintentional "features" in our custom systems.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Scamming a user or causing someone loss of something that they didn't intent to happen.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Using hacked clients, autoclickers (yes, taping/weighting down a key counts), or anything that goes beyond purly cosmetic software or gives you a clear advantage over other players. Staff should use their best judgement when determienting when a client/software is allowed or not. </li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Building inappropriate buildings or symbols. This includes, but is not limited to swastikas and male/female genitalia.</li>
                                </ul>
                            </div>
                        </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
