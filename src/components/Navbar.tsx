import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const showNav = location.pathname !== '/';

  if (!showNav) return null;

  return (
    <motion.nav 
      className="bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">VehicleCare AI</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/profile">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <User className="h-6 w-6 text-gray-600" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;