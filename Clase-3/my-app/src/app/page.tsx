import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-90 p-10 rounded-lg shadow-2xl">
        <div className="flex flex-col items-center bg-gray-800 bg-opacity-80 p-12 rounded-lg shadow-lg max-w-xl w-full">
          <h1 className="text-5xl font-bold mb-6 text-center text-white">Welcome to Movie Explorer</h1>
          <p className="text-xl mb-8 text-center text-gray-300">
          Discover the year your favorite movies were created
          </p>
          <Link href="/interactive" legacyBehavior>
            <a className="bg-blue-600 text-white py-4 px-10 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Go to Movie Search
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
