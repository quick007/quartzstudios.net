import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Custom404() {
    return (
      <div className="flex flex-col h-screen">
        <Navbar title="404" />
        <div className="flex h-full justify-center items-center">
          <div className="p-6 bg-gray-900">
            t
          </div>
        </div>
        <Footer />
      </div>
    );
  }