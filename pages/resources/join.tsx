import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link"

export default function Join() {
    return (
      <div className="flex flex-col h-screen">
        <Navbar title="Join the Team!" />
        <div className="flex h-full justify-center items-center bg-gray-700 py-8">
          <div className="p-6 bg-gray-900">
            <h1 className="tracking-wider text-2xl font-semibold uppercase text-white text-center">Staff Applications are open! ✨</h1>
            <Link href="/discord">
              <h2 className="text-center prose text-gray-300 pb-6 hover:cursor-pointer hover:underline">Join our discord for updates</h2>
            </Link>
            <h3 className="uppercase my-2 tracking-wide font-semibold text-gray-200 text-center md:text-left">Requirements</h3>
            <ul className="list-disc list-inside p-4 max-w-lg text-gray-300 space-y-4">
              <li className="w-full md:w-[95%] mx-auto px-3 py-2 bg-gray-800 rounded">You must have both Discord and Minecraft and be able to contribute some time to each per week.</li>
              <li className="w-full md:w-[95%] mx-auto px-3 py-2 bg-gray-800 rounded">You should preferably be 15 or older.</li>
              <li className="w-full md:w-[95%] mx-auto px-3 py-2 bg-gray-800 rounded">You should have some activity on our platforms before applying.</li>
              <li className="w-full md:w-[95%] mx-auto px-3 py-2 bg-gray-800 rounded">Creating fake applications may lead to a ban on some/all of our platforms.</li>
              <li className="w-full md:w-[95%] mx-auto px-3 py-2 bg-gray-800 rounded">The length of your response doesn’t particularly matter, we're looking for creatively and critically thought out responses (which may require some detail).</li>
              <li className="w-full md:w-[95%] mx-auto px-3 py-2 bg-gray-800 rounded">Asking a staff member to review your application will result in instant denial (with the exception of the following point).</li>
            </ul>
            <div className="flex flex-col space-y-4">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnJKjsM3Kc1MXC6nMBvk58vJ8ajKeYGkSNQCEqO4kZB7nPKg/viewform" target="blank" className="main-btn w-full font-medium">Get started!</a>
              <Link href="/">
                <a className="sec-btn w-full">Back to spawn</a>
              </Link>
            </div>
          </div>
        </div>
        {/*<div className="flex h-full justify-center items-center">
          <div className="p-6 bg-gray-900">
            <h1 className="tracking-wider text-2xl font-semibold uppercase text-white text-center">Staff Applications are currently closed</h1>
            <Link href="/discord">
              <h2 className="text-center prose text-gray-300 pb-6 hover:cursor-pointer hover:underline">Join our discord for updates</h2>
            </Link>
            <div className="flex">
              <Link href="/">
                <a className="main-btn w-full">Back to spawn</a>
              </Link>
            </div>
          </div>
        </div>*/}
        <Footer />
      </div>
    );
  }