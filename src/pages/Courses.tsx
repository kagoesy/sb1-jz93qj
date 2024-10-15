import React from 'react';

const Courses: React.FC = () => {
  const courses = [
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript concepts' },
    { id: 3, title: 'Web Design Fundamentals', description: 'Master the principles of web design' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600">{course.description}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;