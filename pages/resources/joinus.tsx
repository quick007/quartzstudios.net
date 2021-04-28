import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Link from "next/link"

export default function Join() {
    return (
      <div className="flex flex-col h-screen">
        <Navbar title="404" />
        <div className="flex h-full justify-center items-center">
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
        </div>
        <Footer />
      </div>
    );
  }