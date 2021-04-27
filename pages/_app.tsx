import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
