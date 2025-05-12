import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Database, FileCode, Palette, Terminal } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  
  icon: React.ReactNode;
}

const courses: Course[] = [
  {
    id: 'c',
    title: 'C programming',
    
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    id: 'cpp',
    title: 'C++',
  
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    id: 'python',
    title: 'Python',
  
    icon: <Terminal className="h-6 w-6" />,
  },
  {
    id: 'data-structures',
    title: 'Data Structures',
  
    icon: <Database className="h-6 w-6" />,
  },
  {
    id: 'html',
    title: 'HTML',
    
    icon: <FileCode className="h-6 w-6" />,
  },
  {
    id: 'css',
    title: 'CSS',
    icon: <Palette className="h-6 w-6" />,
  },
  
];

const CourseList = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Courses
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Start learning with our free resources or book a one-on-one session
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/course/${course.id}`}
            className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 bg-teal-500 text-white rounded-lg flex items-center justify-center">
                    {course.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600">
                    {course.title}
                  </h2>
                
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseList;