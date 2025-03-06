
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check } from 'lucide-react';
import { modalAnimation, overlayAnimation } from '../utils/animations';
import { toast } from "sonner";

const projectTypes = [
  'Website Redesign',
  'Mobile App',
  'E-commerce',
  'Branding',
  'UI/UX Design',
  'Other'
];

const budgetRanges = [
  '$5,000 - $10,000',
  '$10,000 - $25,000',
  '$25,000 - $50,000',
  '$50,000 - $100,000',
  '$100,000+'
];

const ProjectModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  
  const steps = 3;
  
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsOpen(false);
    setStep(1);
    document.body.style.overflow = 'auto';
  };
  
  const nextStep = () => {
    if (step < steps) {
      setStep(step + 1);
    }
  };
  
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success("Project inquiry submitted successfully! We'll be in touch soon.");
    
    // Close the modal
    closeModal();
  };
  
  const handleProjectTypeSelect = (type: string) => {
    setFormData({ ...formData, projectType: type });
  };
  
  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget: budget });
  };
  
  return (
    <>
      <button 
        id="project-modal" 
        className="hidden" 
        onClick={openModal}
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayAnimation}
            onClick={closeModal}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-xl w-full max-w-3xl overflow-hidden"
              variants={modalAnimation}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center px-6 py-4 border-b">
                <h3 className="text-lg font-semibold">Start Your Project</h3>
                <button 
                  onClick={closeModal}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="px-6 py-2 border-b">
                <div className="flex items-center">
                  {[...Array(steps)].map((_, index) => (
                    <React.Fragment key={index}>
                      <div className="flex flex-col items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step > index + 1 
                              ? 'bg-primary text-white' 
                              : step === index + 1 
                                ? 'bg-primary/10 text-primary border border-primary' 
                                : 'bg-secondary text-foreground/50 border border-border'
                          }`}
                        >
                          {step > index + 1 ? <Check size={16} /> : index + 1}
                        </div>
                        <span className="text-xs mt-1 text-foreground/70">
                          {index === 0 ? 'Basic Info' : index === 1 ? 'Project Details' : 'Review'}
                        </span>
                      </div>
                      
                      {index < steps - 1 && (
                        <div 
                          className={`flex-1 h-0.5 mx-2 ${
                            step > index + 1 ? 'bg-primary' : 'bg-border'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Your Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="john@example.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                            placeholder="Your Company"
                          />
                        </div>
                      </motion.div>
                    )}
                    
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <div>
                          <label className="block text-sm font-medium mb-3">
                            Project Type <span className="text-red-500">*</span>
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {projectTypes.map((type) => (
                              <motion.button
                                key={type}
                                type="button"
                                className={`px-4 py-3 border rounded-lg text-left transition-all ${
                                  formData.projectType === type 
                                    ? 'border-primary bg-primary/5 text-primary' 
                                    : 'border-border hover:border-primary/30'
                                }`}
                                onClick={() => handleProjectTypeSelect(type)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {type}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium mb-3">
                            Budget Range
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {budgetRanges.map((budget) => (
                              <motion.button
                                key={budget}
                                type="button"
                                className={`px-4 py-3 border rounded-lg text-left transition-all ${
                                  formData.budget === budget 
                                    ? 'border-primary bg-primary/5 text-primary' 
                                    : 'border-border hover:border-primary/30'
                                }`}
                                onClick={() => handleBudgetSelect(budget)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                {budget}
                              </motion.button>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                          >
                            <option value="">Select a timeline</option>
                            <option value="1-2 months">1-2 months</option>
                            <option value="3-6 months">3-6 months</option>
                            <option value="6+ months">6+ months</option>
                          </select>
                        </div>
                      </motion.div>
                    )}
                    
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-5"
                      >
                        <div>
                          <label htmlFor="description" className="block text-sm font-medium mb-2">
                            Project Description <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                            placeholder="Tell us about your project goals, challenges, and vision..."
                          ></textarea>
                        </div>
                        
                        <div className="bg-secondary/30 rounded-lg p-4">
                          <h4 className="font-medium mb-3">Project Summary</h4>
                          <div className="space-y-2 text-sm">
                            <p><span className="font-medium">Name:</span> {formData.name}</p>
                            <p><span className="font-medium">Email:</span> {formData.email}</p>
                            <p><span className="font-medium">Company:</span> {formData.company || 'N/A'}</p>
                            <p><span className="font-medium">Project Type:</span> {formData.projectType || 'N/A'}</p>
                            <p><span className="font-medium">Budget:</span> {formData.budget || 'N/A'}</p>
                            <p><span className="font-medium">Timeline:</span> {formData.timeline || 'N/A'}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </div>
              
              <div className="px-6 py-4 border-t bg-secondary/10 flex justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-4 py-2 text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}
                
                {step < steps ? (
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-2 bg-primary text-white font-medium rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={step === 1 && (!formData.name || !formData.email)}
                  >
                    Next
                    <ArrowRight size={18} />
                  </motion.button>
                ) : (
                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-2 bg-primary text-white font-medium rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={!formData.description}
                  >
                    Submit
                    <Check size={18} />
                  </motion.button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectModal;
