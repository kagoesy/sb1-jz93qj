import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to LearnQuiz</h1>
      <p className="text-xl mb-8">Enhance your knowledge and test your skills</p>
      <div className="flex justify-center space-x-4">
        <Link to="/courses" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <BookOpen className="mr-2" />
          Browse Courses
        </Link>
        <Link to="/quiz" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
          <Award className="mr-2" />
          Take a Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;