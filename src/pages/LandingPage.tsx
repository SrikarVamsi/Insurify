import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Shield, Zap } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <Car className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            VehicleCare AI
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Fast, Accurate Vehicle Damage Assessment
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/auth')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: <Zap className="h-8 w-8 text-blue-600" />,
              title: "Instant Analysis",
              description: "Get damage assessments in minutes, not hours"
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: "Accurate Results",
              description: "AI-powered damage detection with high precision"
            },
            {
              icon: <Car className="h-8 w-8 text-blue-600" />,
              title: "Complete Coverage",
              description: "Comprehensive vehicle inspection and reporting"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;