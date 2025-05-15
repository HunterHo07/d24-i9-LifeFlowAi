"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Check, AlertCircle, File, User, Building, Mail, Phone, Calendar, ArrowRight, Plus } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";

const JobApplicationDemo = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApp, setSelectedApp] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [newApplication, setNewApplication] = useState(false);
  const [autoFill, setAutoFill] = useState(false);
  const [fillProgress, setFillProgress] = useState(0);
  const [storedApplications, setStoredApplications] = useLocalStorage("lifeflow-applications", null);
  
  // Load job applications from localStorage or dummy data
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        if (storedApplications) {
          setApplications(storedApplications);
        } else {
          // Simulate API call
          setIsLoading(true);
          
          // In a real app, this would fetch from an API
          setTimeout(() => {
            setApplications(dummyApplications);
            setStoredApplications(dummyApplications);
            setIsLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.error("Error loading applications:", error);
        setApplications(dummyApplications);
        setStoredApplications(dummyApplications);
        setIsLoading(false);
      }
    };
    
    fetchApplications();
  }, [setStoredApplications, storedApplications]);
  
  const handleAppSelect = (app) => {
    setSelectedApp(app);
    setNewApplication(false);
    setAutoFill(false);
    setFillProgress(0);
  };
  
  const startNewApplication = () => {
    setSelectedApp(null);
    setNewApplication(true);
    setAutoFill(false);
    setFillProgress(0);
  };
  
  const runAutoFill = () => {
    setAutoFill(true);
    
    // Simulate AI filling out the form
    const interval = setInterval(() => {
      setFillProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  
  // Dummy job applications data
  const dummyApplications = [
    {
      id: "app-1",
      company: "TechVision Inc.",
      position: "Senior Product Manager",
      status: "In Progress",
      dateApplied: "2025-05-10",
      deadline: "2025-05-20",
      progress: 70,
      description: "Leading technology company seeking a Senior Product Manager to oversee product development cycle and strategy.",
      requirements: [
        "5+ years of product management experience",
        "Proven track record of successful product launches",
        "Strong leadership and communication skills",
        "Technical background preferred"
      ],
      documents: [
        { name: "Resume", prepared: true },
        { name: "Cover Letter", prepared: true },
        { name: "Portfolio", prepared: true },
        { name: "References", prepared: false }
      ],
      notes: "Company values innovation and has a collaborative culture. Recent pivot to AI products."
    },
    {
      id: "app-2",
      company: "Global Finance Group",
      position: "Data Analyst",
      status: "Submitted",
      dateApplied: "2025-05-05",
      deadline: "2025-05-15",
      progress: 100,
      description: "Leading financial services firm seeking a Data Analyst to support decision-making through data insights.",
      requirements: [
        "3+ years experience with data analysis",
        "Proficiency in SQL, Python, and data visualization tools",
        "Experience in financial services preferred",
        "Strong analytical and problem-solving skills"
      ],
      documents: [
        { name: "Resume", prepared: true },
        { name: "Cover Letter", prepared: true },
        { name: "Skills Assessment", prepared: true },
        { name: "References", prepared: true }
      ],
      notes: "Phone screening scheduled for May 18. Research their recent market expansion."
    },
    {
      id: "app-3",
      company: "InnovateTech Solutions",
      position: "UX/UI Designer",
      status: "New Opportunity",
      dateApplied: null,
      deadline: "2025-05-25",
      progress: 0,
      description: "Fast-growing startup looking for a creative UX/UI Designer to help shape user experiences for their SaaS platform.",
      requirements: [
        "3+ years of experience in UX/UI design",
        "Strong portfolio demonstrating user-centered design",
        "Proficiency in Figma, Adobe XD",
        "Experience with design systems and component libraries"
      ],
      documents: [
        { name: "Resume", prepared: false },
        { name: "Cover Letter", prepared: false },
        { name: "Portfolio", prepared: false }
      ],
      notes: "Opportunity just identified. Company has good reviews on Glassdoor. Emphasis on work-life balance."
    }
  ];
  
  const statusColor = (status) => {
    switch(status) {
      case "In Progress":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
      case "Submitted":
        return "text-green-500 bg-green-500/10 border-green-500/30";
      case "New Opportunity":
        return "text-blue-500 bg-blue-500/10 border-blue-500/30";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/30";
    }
  };

  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Job Application Assistance</h2>
        <p className="text-gray-400 mt-1">
          See how LifeFlowAi helps you manage and prepare for job applications
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job Applications List */}
        <div className="md:col-span-1 bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium flex items-center">
              <Briefcase className="mr-2 h-5 w-5 text-blue-400" />
              Applications
            </h3>
            <button 
              onClick={startNewApplication}
              className="p-1.5 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          {isLoading && applications.length === 0 ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-3">
              {applications.map((app) => (
                <motion.div
                  key={app.id}
                  onClick={() => handleAppSelect(app)}
                  className={`p-3 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer ${
                    selectedApp?.id === app.id ? "bg-gray-700/50 border-blue-500/50" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{app.position}</h4>
                      <div className="flex items-center mt-1 text-sm text-gray-400">
                        <Building className="h-3 w-3 mr-1" />
                        <span>{app.company}</span>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs border ${statusColor(app.status)}`}>
                      {app.status}
                    </div>
                  </div>
                  
                  {app.dateApplied && (
                    <div className="mt-2 text-xs text-gray-500">
                      Applied: {formatDate(app.dateApplied)}
                    </div>
                  )}
                  
                  {app.progress > 0 && (
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-400">Application progress</span>
                        <span className="text-blue-400">{app.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                          style={{ width: `${app.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
        
        {/* Job Application Details */}
        <div className="md:col-span-2">
          {selectedApp ? (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700 h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">{selectedApp.position}</h3>
                  <div className="flex items-center mt-1 text-gray-300 text-sm">
                    <Building className="h-4 w-4 mr-2 text-blue-400" />
                    <span>{selectedApp.company}</span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs border ${statusColor(selectedApp.status)}`}>
                  {selectedApp.status}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {selectedApp.dateApplied && (
                  <div className="flex items-center text-sm text-gray-300">
                    <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                    <span>Applied: {formatDate(selectedApp.dateApplied)}</span>
                  </div>
                )}
                
                <div className="flex items-center text-sm text-gray-300">
                  <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                  <span>Deadline: {formatDate(selectedApp.deadline)}</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Job Description</h4>
                <p className="p-3 bg-gray-700/30 rounded-lg text-sm border border-gray-700">
                  {selectedApp.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Requirements</h4>
                  <ul className="space-y-2 p-3 bg-gray-700/30 rounded-lg border border-gray-700">
                    {selectedApp.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-2">Documents</h4>
                  <div className="space-y-2 p-3 bg-gray-700/30 rounded-lg border border-gray-700">
                    {selectedApp.documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2">
                            <File className="h-3 w-3" />
                          </div>
                          <span className="text-gray-300">{doc.name}</span>
                        </div>
                        {doc.prepared ? (
                          <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">
                            Prepared
                          </span>
                        ) : (
                          <span className="text-xs px-2 py-0.5 bg-yellow-500/20 text-yellow-400 rounded-full">
                            Pending
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Notes</h4>
                <p className="p-3 bg-gray-700/30 rounded-lg text-sm border border-gray-700 text-gray-300">
                  {selectedApp.notes}
                </p>
              </div>
              
              {/* AI Assistant message */}
              <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-900/30">
                <div className="flex items-start">
                  <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mr-2 mt-0.5">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h5 className="font-medium text-sm text-white">AI Assistant</h5>
                    <p className="text-sm text-gray-300 mt-1">
                      {selectedApp.status === "Submitted" 
                        ? "I've scheduled a reminder to follow up on this application if you don't hear back within a week. I've also prepared some common interview questions based on the job description."
                        : selectedApp.status === "In Progress"
                        ? "Would you like me to help complete the remaining sections of your application? I can customize your resume and cover letter to highlight relevant experience for this position."
                        : "This opportunity matches your profile at 85% relevance. Would you like me to prepare the required documents tailored to this position?"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : newApplication ? (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700 h-full">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-bold">New Application</h3>
                <div className="px-2 py-1 rounded-full text-xs border text-blue-500 bg-blue-500/10 border-blue-500/30">
                  New
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Company</label>
                    <div className={`p-2 bg-gray-700/50 rounded-lg border ${autoFill ? "border-green-500/30" : "border-gray-700"} flex items-center`}>
                      <Building className="h-4 w-4 mr-2 text-gray-400" />
                      <input 
                        type="text"
                        className="bg-transparent border-none outline-none w-full text-gray-300"
                        placeholder="Company name"
                        value={autoFill ? "Quantum Technologies" : ""}
                        readOnly={autoFill}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Position</label>
                    <div className={`p-2 bg-gray-700/50 rounded-lg border ${autoFill ? "border-green-500/30" : "border-gray-700"} flex items-center`}>
                      <Briefcase className="h-4 w-4 mr-2 text-gray-400" />
                      <input 
                        type="text"
                        className="bg-transparent border-none outline-none w-full text-gray-300"
                        placeholder="Job title"
                        value={autoFill ? "Full Stack Developer" : ""}
                        readOnly={autoFill}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                    <div className={`p-2 bg-gray-700/50 rounded-lg border ${autoFill ? "border-green-500/30" : "border-gray-700"} flex items-center`}>
                      <Mail className="h-4 w-4 mr-2 text-gray-400" />
                      <input 
                        type="email"
                        className="bg-transparent border-none outline-none w-full text-gray-300"
                        placeholder="Your email"
                        value={autoFill ? "john.doe@example.com" : ""}
                        readOnly={autoFill}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
                    <div className={`p-2 bg-gray-700/50 rounded-lg border ${autoFill ? "border-green-500/30" : "border-gray-700"} flex items-center`}>
                      <Phone className="h-4 w-4 mr-2 text-gray-400" />
                      <input 
                        type="tel"
                        className="bg-transparent border-none outline-none w-full text-gray-300"
                        placeholder="Your phone number"
                        value={autoFill ? "(555) 123-4567" : ""}
                        readOnly={autoFill}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1">Personal Information</label>
                  <div className={`p-3 bg-gray-700/50 rounded-lg border ${autoFill ? "border-green-500/30" : "border-gray-700"} grid grid-cols-1 md:grid-cols-2 gap-4`}>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-400" />
                      <input 
                        type="text"
                        className="bg-transparent border-none outline-none w-full text-gray-300"
                        placeholder="First name"
                        value={autoFill ? "John" : ""}
                        readOnly={autoFill}
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-gray-400" />
                      <input 
                        type="text"
                        className="bg-transparent border-none outline-none w-full text-gray-300"
                        placeholder="Last name"
                        value={autoFill ? "Doe" : ""}
                        readOnly={autoFill}
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <input 
                        type="text"
                        className="bg-transparent border-none outline-none w-full text-gray-300"
                        placeholder="Date of birth"
                        value={autoFill ? "01/15/1988" : ""}
                        readOnly={autoFill}
                      />
                    </div>
                    
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                      <input 
                        type="text"
                        className="bg-transparent border-none outline-none w-full text-gray-300"
                        placeholder="Location"
                        value={autoFill ? "San Francisco, CA" : ""}
                        readOnly={autoFill}
                      />
                    </div>
                  </div>
                </div>
                
                {autoFill && (
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Auto-filling application...</span>
                      <span className="text-sm text-blue-400">{fillProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${fillProgress}%` }}
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                      ></motion.div>
                    </div>
                  </div>
                )}
                
                {autoFill && fillProgress === 100 ? (
                  <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-900/30">
                    <div className="flex items-start">
                      <div className="p-1 rounded-full bg-green-500/20 text-green-400 mr-2 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <h5 className="font-medium text-sm text-white">AI Assistant</h5>
                        <p className="text-sm text-gray-300 mt-1">
                          I've auto-filled your application using your profile data. I've also customized your resume to highlight relevant skills and experience for this position. Would you like to review and submit the application now?
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <button
                      onClick={runAutoFill}
                      disabled={autoFill}
                      className={`px-4 py-2 rounded-lg text-white font-medium text-sm flex items-center ${
                        autoFill ? "bg-gray-700 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                      }`}
                    >
                      {autoFill ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Auto-filling...
                        </>
                      ) : (
                        <>
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Auto-fill from my profile
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 h-full flex flex-col items-center justify-center">
              <div className="p-4 rounded-full bg-blue-500/10 mb-4">
                <Briefcase className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Job Application Assistance</h3>
              <p className="text-gray-400 text-center max-w-md mb-4">
                Select an application to manage or start a new one. LifeFlowAi automatically fills out forms and tailors your documents for each job.
              </p>
              <button
                onClick={startNewApplication}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors flex items-center"
              >
                <Plus className="mr-2 h-4 w-4" />
                Create New Application
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobApplicationDemo;
