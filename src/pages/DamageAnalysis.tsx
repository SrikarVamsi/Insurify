import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Send } from 'lucide-react';

const DamageAnalysis = () => {
  const damageReport = {
    vehicle: 'Toyota Camry 2020',
    damages: [
      { part: 'Front Bumper', severity: 'Moderate', cost: 850 },
      { part: 'Hood', severity: 'Minor', cost: 450 },
      { part: 'Left Headlight', severity: 'Severe', cost: 600 }
    ],
    totalCost: 1900
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Damage Analysis</h1>
            <p className="text-gray-600 mt-2">{damageReport.vehicle}</p>
          </div>
          <div className="space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
            >
              <Download className="h-5 w-5 mr-2" />
              Export PDF
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <Send className="h-5 w-5 mr-2" />
              Submit Report
            </motion.button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Damage Details</h2>
                <div className="space-y-6">
                  {damageReport.damages.map((damage, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <h3 className="font-medium text-gray-900">{damage.part}</h3>
                        <span className={`inline-block px-2 py-1 rounded-full text-sm ${
                          damage.severity === 'Severe' 
                            ? 'bg-red-100 text-red-800'
                            : damage.severity === 'Moderate'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {damage.severity}
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-gray-900">
                          ${damage.cost}
                        </p>
                        <p className="text-sm text-gray-500">Estimated repair cost</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Images</h2>
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800"
                    alt="Vehicle damage 1"
                    className="rounded-lg object-cover h-48 w-full"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=800"
                    alt="Vehicle damage 2"
                    className="rounded-lg object-cover h-48 w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Total Parts Affected</span>
                    <span className="font-semibold">{damageReport.damages.length}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Labor Hours</span>
                    <span className="font-semibold">8.5 hours</span>
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-lg font-semibold">Total Estimate</span>
                    <span className="text-2xl font-bold text-blue-600">
                      ${damageReport.totalCost}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0  }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-white rounded-xl shadow-md"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Notes</h2>
                <textarea
                  className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Add additional notes about the damage assessment..."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DamageAnalysis;