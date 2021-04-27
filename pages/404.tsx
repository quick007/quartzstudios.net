import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link"

export default function Custom404() {
    return (
      <div className="flex flex-col h-screen">
        <Navbar title="404" />
        <div className="flex h-full justify-center items-center">
          <div className="p-6 bg-gray-900">
            <h1 className="tracking-wider text-2xl font-semibold uppercase text-white text-center">Seems you've escaped the map!</h1>
            <h2 className="text-center prose text-gray-300 pb-6">404 | Page not found</h2>
            <div className="flex">
              <Link href="/">
                <a className="bg-blue-600 hover:opacity-70 px-4 py-1 rounded-sm ml-3 text-gray-100 w-full text-center">Back to spawn</a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }