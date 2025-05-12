
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Mentor.Gammal.Tech</span>
            </div>
            <p className="text-gray-500 text-base">
              Empowering students with personalized programming education.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Courses
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/course/cpp" className="text-base text-gray-500 hover:text-gray-900">
                      C++_Programming
                    </Link>
                  </li>
                  <li>
                    <Link to="/course/c" className="text-base text-gray-500 hover:text-gray-900">
                      C_Programming
                    </Link>
                  </li>
                  <li>
                    <Link to="/course/python" className="text-base text-gray-500 hover:text-gray-900">
                      Python
                    </Link>
                  </li>
                  <li>
                    <Link to="/course/data-structures" className="text-base text-gray-500 hover:text-gray-900">
                      Data Structures
                    </Link>
                  </li>
                  <li>
                    <Link to="/course/html" className="text-base text-gray-500 hover:text-gray-900">
                      HTML
                    </Link>
                  </li>
                  <li>
                    <Link to="/course/css" className="text-base text-gray-500 hover:text-gray-900">
                      CSS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
                  Contact
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="https://wa.me/201033998844" target="_blank" rel="noopener noreferrer" className="text-base text-gray-500 hover:text-gray-900">
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Mentor.Gammal.Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
