import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Home, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center">
          <BookOpen className="mr-2" />
          LearnQuiz
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="flex items-center hover:text-blue-200">
              <Home className="mr-1" size={18} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="flex items-center hover:text-blue-200">
              <BookOpen className="mr-1" size={18} />
              Courses
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="flex items-center hover:text-blue-200">
              <BookOpen className="mr-1" size={18} />
              Quiz
            </Link>
          </li>
          <li>
            <Link to="/profile" className="flex items-center hover:text-blue-200">
              <User className="mr-1" size={18} />
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;