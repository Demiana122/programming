
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
              <span className="block mb-2">Learn Programming</span>
              <span className="block text-teal-600">One-on-One with Experts</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
              Get personalized programming education with our expert mentors. First session is completely free!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-center">
              <a
                href="https://wa.me/201033998844"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Session
              </a>

              <Link
                to="/courses"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-teal-600 text-base font-medium rounded-lg text-teal-700 bg-transparent hover:bg-teal-50 transition-colors duration-200"
              >
                View Courses
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
