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
                                <h3 className="uppercase my-2 tracking-wide font-semibold text-gray-200 text-center md:text-left">Chat Based Rules</h3>
                                <ol className="text-gray-300 w-full flex flex-col justify-center space-y-4 md:ml-6 list-inside list-decimal">
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Spam, flood, or excessive capital usage is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Posting a link not related to the ongoing chat is not allowed. All Links posted should begin with <span className="rounded-md bg-gray-900 bg-opacity-50 p-1">https://</span> and not contain any malicious content.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">NSFW content (nudity, gore, etc) or excessively inappropriate behavior is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Disrespectful behavior is not allowed. Swearing is allowed, however directed or excessive swearing is not.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Perverse behavior and creating/continuing arguments for the sake of an argument are not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Arguing with or publicly flaming staff members based on their administrative actions is not allowed. Staff members will always have the final say - any complaints should be directed to <span className="rounded-md bg-gray-900 bg-opacity-50 p-1">Levah#0001</span> and not public chat.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Using our platforms to advertise other content (whether via DM, public chat, or ingame messaging channel [like a party chat]) is not allowed unless otherwise specified.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Purposely misusing channels on the Discord is not allowed. If you are unsure of a channel’s usage, ask.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Generally, try and think about what you send before you send it.</li>
                                </ol>
                            </div>
                            <div className="w-full bg-gray-900 p-4 mb-8">
                                <h3 className="uppercase my-2 tracking-wide font-semibold text-gray-200 text-center md:text-left">Behavior Based Rules</h3>
                                <ol className="text-gray-300 w-full flex flex-col justify-center space-y-4 md:ml-6 list-inside list-decimal">
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Irritating or disruptive behavior is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Using and sharing the Quartz Studios assets are strictly forbidden, the resource pack is copyrighted content.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Threatening to DDoS, DoS, dox, kill or otherwise harm someone with malicious intent is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Wishing harm on another user, whether by encouraging self-harm or by other means, is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Exploiting vanilla Mincraft exploits or unintentional "features" in our custom systems is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Scamming users through trading or conversing is not allowed.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Using hacked clients, auto clickers (yes, taping/weighting down a key counts), or anything that goes beyond purely cosmetic software or gives you a clear advantage over other players is not allowed. Staff should use their best judgment when determining when a client/software is allowed or not.</li>
                                    <li className="w-full md:w-[95%] px-3 py-4 bg-gray-800 rounded">Building inappropriate buildings or symbols is not allowed. This includes, but is not limited to swastikas and male/female genitalia.</li>
                                </ol>
                            </div>
                        </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}
