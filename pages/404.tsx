import Navbar from "../components/navbar";

export default function Custom404() {
    return (
      <div className="flex flex-col h-screen">
        <Navbar title="404" />
        <h1>404 - Page Not Found</h1>
      </div>
    );
  }