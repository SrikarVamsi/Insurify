import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Camera, Upload, X, Check, AlertCircle } from 'lucide-react';

const NewAssessment = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'Front View', instruction: 'Capture the entire front of the vehicle' },
    { title: 'Side Views', instruction: 'Capture both left and right sides' },
    { title: 'Rear View', instruction: 'Capture the entire rear of the vehicle' },
    { title: 'Damage Close-ups', instruction: 'Take close-up shots of visible damage' }
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
      if (activeStep < steps.length - 1) {
        setActiveStep(activeStep + 1);
      }
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">New Assessment</h1>
          <p className="text-gray-600 mt-2">Follow the steps to capture vehicle damage</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="space-y-6">
                <div className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Camera className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      {steps[activeStep].title}
                    </h3>
                    <p className="text-gray-500 mb-4">{steps[activeStep].instruction}</p>
                    <div className="space-x-4">
                      <motion.label
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                      >
                        <Camera className="h-5 w-5 mr-2" />
                        <span>Take Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          capture="environment"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </motion.label>
                      <motion.label
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
                      >
                        <Upload className="h-5 w-5 mr-2" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </motion.label>
                    </div>
                  </div>
                </div>

                {images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                      >
                        <img
                          src={image}
                          alt={`Vehicle view ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Progress</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 ${
                      index === activeStep ? 'text-blue-600' : 'text-gray-500'
                    }`}
                  >
                    {index < activeStep ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : index === activeStep ? (
                      <AlertCircle className="h-5 w-5 text-blue-500" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
                    )}
                    <span>{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/damage-analysis')}
              disabled={images.length < 1}
              className={`w-full py-3 rounded-lg text-white ${
                images.length < 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              Analyze Damage
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewAssessment;