import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-700">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
