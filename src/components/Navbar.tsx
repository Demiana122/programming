import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Home Link */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="https://school.gammal.tech/gt_logo.png" alt="Gammal Tech Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-teal-600">Gammal Tech</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/courses" className="text-gray-700 hover:text-teal-600">Courses</Link>

            {/* Ask Question Button */}
            <Link 
              to="/ask-question" 
              className="text-gray-700 hover:text-teal-600"
            >
              Ask Question
            </Link>

            <a 
              href="https://wa.me/201033998844" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
            >
              Apply for Free Session
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1">
          <Link to="/courses" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-100">
            Courses
          </Link>

          {/* Ask Question in Mobile */}
          <Link to="/ask-question" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-gray-100">
            Ask Question
          </Link>

          <a 
            href="https://wa.me/201033998844" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-teal-600 hover:bg-teal-700"
          >
            Apply for Free Session
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
