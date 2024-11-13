import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Plus, FileText, Clock } from 'lucide-react';

const pastAssessments = [
  { id: 1, vehicle: 'Toyota Camry', date: '2024-03-10', status: 'Completed' },
  { id: 2, vehicle: 'Honda Civic', date: '2024-03-09', status: 'In Progress' },
  { id: 3, vehicle: 'Ford F-150', date: '2024-03-08', status: 'Completed' },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/new-assessment')}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
            <span>New Assessment</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Total Assessments', value: '24', icon: FileText },
            { title: 'In Progress', value: '3', icon: Clock },
            { title: 'Completed Today', value: '5', icon: FileText }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Assessments</h2>
            <div className="space-y-4">
              {pastAssessments.map((assessment, index) => (
                <motion.div
                  key={assessment.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                  onClick={() => navigate('/damage-analysis')}
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{assessment.vehicle}</h3>
                    <p className="text-sm text-gray-500">{assessment.date}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    assessment.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {assessment.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;