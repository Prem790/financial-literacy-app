import React from 'react';
import { motion } from 'framer-motion';

// Sample course data with YouTube links and thumbnails
const courses = [
  {
    title: 'Investing 101',
    duration: '2 hours',
    level: 'Beginner',
    youtubeLink: 'https://youtu.be/3UF0ymVdYLA?si=SQv0tOwAPSQzTzTv',
    thumbnail: 'https://media.istockphoto.com/id/471219895/photo/investing-class.jpg?s=612x612&w=0&k=20&c=SpMuXAJ7nyoHguYehqYm_vGbpq9g6WpBVSAiHwI8-WU='
  },
  {
    title: 'Understanding Stock Markets',
    duration: '3 hours',
    level: 'Intermediate',
    youtubeLink: 'https://youtu.be/Y3kzzE9Elns?si=nBsY0sWRsW3JZZCK',
    thumbnail: 'https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=612x612&w=0&k=20&c=wZ6vVmbm4BV2JOePSnNNz-0aFVOJZ0P9nhdeOMGUg5I='
  },
  {
    title: 'Advanced Trading Strategies',
    duration: '4 hours',
    level: 'Advanced',
    youtubeLink: 'https://youtu.be/lMlWvwWuSYk?si=zV0yc3N9hNjDsuvT3',
    thumbnail: 'https://tradeciety.com/hs-fs/hubfs/Open%20(2).png?width=2054&height=1093&name=Open%20(2).png'
  },
  {
    title: 'Personal Finance Basics',
    duration: '2 hours',
    level: 'Beginner',
    youtubeLink: 'https://youtu.be/WN9Mks1s4tM?si=rvRJzTPTVcjHonjm',
    thumbnail: 'https://media.istockphoto.com/id/1214054918/vector/budget-management-app-personal-financial-control-cash-flow-tiny-woman-manages-the-personal.jpg?s=612x612&w=0&k=20&c=kPffn0lXROiTyEdrzXRNSb5bsnatjJgldNC4NAcAeWo='
  }
];

function LearningCenter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-20 p-6"
    >
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Learning Center</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
          >
            <a href={course.youtubeLink} target="_blank" rel="noopener noreferrer">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-400 mb-2">{course.title}</h3>
              <p className="text-gray-400 mb-2">Duration: {course.duration}</p>
              <p className="text-gray-400 mb-2">Level: {course.level}</p>
              <p className="text-gray-300 mb-4">Learn more about this course and dive into the content to enhance your skills.</p>
              <button
                onClick={() => window.open(course.youtubeLink, '_blank')}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
              >
                Watch Now
              </button>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default LearningCenter;
