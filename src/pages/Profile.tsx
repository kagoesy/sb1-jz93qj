import React from 'react';
import { User, Book, Award } from 'lucide-react';

const Profile: React.FC = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    coursesCompleted: 5,
    quizzesTaken: 10,
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-6">
        <User size={64} className="text-blue-500 mr-4" />
        <div>
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <Book className="text-blue-500 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Courses Completed</p>
            <p className="text-xl font-bold">{user.coursesCompleted}</p>
          </div>
        </div>
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <Award className="text-green-500 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Quizzes Taken</p>
            <p className="text-xl font-bold">{user.quizzesTaken}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;