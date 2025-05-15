"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, AlertCircle, FileText, Clock, Bell } from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      id: 0,
      title: "Proactive Task Automation",
      description: "LifeFlowAi automatically prepares research documents, client requests, and relevant details for upcoming tasks so you're always prepared.",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-600",
      textColor: "text-blue-500",
    },
    {
      id: 1,
      title: "Smart Calendar Management",
      description: "Sync with multiple calendars to track meetings and deadlines. Receive reminders with preparation checklists and suggested departure times.",
      icon: Calendar,
      color: "from-purple-500 to-pink-600",
      textColor: "text-purple-500",
    },
    {
      id: 2,
      title: "Event & Personal Life Tracking",
      description: "Never miss important personal events or obligations. LifeFlowAi tracks bills, service orders, and important events like school activities.",
      icon: AlertCircle,
      color: "from-amber-500 to-red-600",
      textColor: "text-amber-500",
    },
    {
      id: 3,
      title: "Job Application Assistance",
      description: "Pre-fill job application forms with data from your CV. Track application status and deadlines to streamline your job search process.",
      icon: FileText,
      color: "from-emerald-500 to-teal-600",
      textColor: "text-emerald-500",
    },
  ];

  const renderFeatureContent = (feature) => {
    if (feature.id === 0) {
      return (
        <div className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-md rounded-2xl p-6 border border-blue-700/30 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-blue-800/40 rounded-xl">
              <Clock size={20} className="text-blue-300" />
              <div>
                <h3 className="font-medium text-white">Team Meeting Preparation</h3>
                <p className="text-sm text-blue-200">Added previous action items for review</p>
              </div>
              <span className="ml-auto text-xs font-medium px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">10:00 AM</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-blue-800/40 rounded-xl">
              <FileText size={20} className="text-blue-300" />
              <div>
                <h3 className="font-medium text-white">Budget Report</h3>
                <p className="text-sm text-blue-200">Compiled Q2 financial data and prepared justification notes</p>
              </div>
              <span className="ml-auto text-xs font-medium px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">06:30 PM</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-blue-800/40 rounded-xl">
              <Bell size={20} className="text-blue-300" />
              <div>
                <h3 className="font-medium text-white">Client Presentation</h3>
                <p className="text-sm text-blue-200">Generated slide deck with recent metrics and talking points</p>
              </div>
              <span className="ml-auto text-xs font-medium px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">Tomorrow</span>
            </div>
          </div>
        </div>
      );
    } else if (feature.id === 1) {
      return (
        <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-2xl p-6 border border-purple-700/30 shadow-lg">
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-white">Today, May 15</h3>
              <span className="text-purple-300 text-sm">3 events</span>
            </div>
            
            <div className="mt-4 space-y-3">
              <div className="relative pl-4 border-l-2 border-purple-500 py-2">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-3"></div>
                <span className="text-purple-300 text-sm">9:00 AM - 9:30 AM</span>
                <h4 className="font-medium text-white">Daily Standup</h4>
                <p className="text-xs text-purple-200">Zoom Meeting · 5 participants</p>
                <div className="mt-1 text-xs flex items-center gap-1 text-green-300">
                  <span>✓</span> Agenda prepared
                </div>
              </div>
              
              <div className="relative pl-4 border-l-2 border-purple-500 py-2">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-3"></div>
                <span className="text-purple-300 text-sm">11:00 AM - 12:00 PM</span>
                <h4 className="font-medium text-white">Product Review</h4>
                <p className="text-xs text-purple-200">Conference Room A · 8 participants</p>
                <div className="mt-1 text-xs flex items-center gap-1 text-yellow-300">
                  <span>⚠</span> Leave in 30 minutes
                </div>
              </div>
              
              <div className="relative pl-4 border-l-2 border-purple-500 py-2">
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-3"></div>
                <span className="text-purple-300 text-sm">3:30 PM - 4:30 PM</span>
                <h4 className="font-medium text-white">Client Call: XYZ Corp</h4>
                <p className="text-xs text-purple-200">Zoom Meeting · 4 participants</p>
                <div className="mt-1 text-xs flex items-center gap-1 text-green-300">
                  <span>✓</span> Materials ready
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (feature.id === 2) {
      return (
        <div className="bg-gradient-to-br from-amber-900/50 to-red-900/50 backdrop-blur-md rounded-2xl p-6 border border-amber-700/30 shadow-lg">
          <div className="divide-y divide-amber-700/30 space-y-4">
            <div className="pb-4">
              <h3 className="text-lg font-medium text-white">Family Events</h3>
              
              <div className="mt-3 space-y-3">
                <div className="flex items-center gap-3 p-2 bg-amber-800/30 rounded-lg">
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300">
                    17
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Soccer Championship</h4>
                    <p className="text-xs text-amber-200">10:00 AM · Westfield Park</p>
                  </div>
                  <div className="ml-auto text-xs text-amber-300">
                    <span className="block">Reminder</span>
                    <span className="block">2 days</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-2 bg-amber-800/30 rounded-lg">
                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300">
                    22
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Parent-Teacher Meeting</h4>
                    <p className="text-xs text-amber-200">4:30 PM · Room 103</p>
                  </div>
                  <div className="ml-auto text-xs text-amber-300">
                    <span className="block">Reminder</span>
                    <span className="block">1 week</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-medium text-white">Bills & Services</h3>
              
              <div className="mt-3 space-y-3">
                <div className="flex items-center justify-between p-2 bg-red-800/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bell size={16} className="text-red-300" />
                    <span className="text-white font-medium">Electricity Bill</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-red-200">$142.65</span>
                    <span className="block text-xs text-red-300">Due: May 30</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-2 bg-red-800/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bell size={16} className="text-red-300" />
                    <span className="text-white font-medium">Internet Service</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-red-200">$89.99</span>
                    <span className="block text-xs text-red-300">Due: May 31</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (feature.id === 3) {
      return (
        <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 backdrop-blur-md rounded-2xl p-6 border border-emerald-700/30 shadow-lg">
          <div className="space-y-4">
            <div className="bg-emerald-800/30 rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="font-medium text-white">ABC Tech - Senior Developer</h3>
                <span className="text-xs font-medium px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full">In Progress</span>
              </div>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 text-xs">
                    ✓
                  </div>
                  <span className="text-sm text-emerald-200">Resume customized</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 text-xs">
                    ✓
                  </div>
                  <span className="text-sm text-emerald-200">Cover letter generated</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 text-xs">
                    ⟳
                  </div>
                  <span className="text-sm text-emerald-200">Application form (70% complete)</span>
                </div>
              </div>
              
              <div className="mt-3 text-xs text-emerald-300">
                <span>Due: May 19, 2025</span>
              </div>
            </div>
            
            <div className="bg-emerald-800/30 rounded-lg p-4">
              <div className="flex justify-between">
                <h3 className="font-medium text-white">Tech Innovators - Product Manager</h3>
                <span className="text-xs font-medium px-2 py-1 bg-green-500/20 text-green-300 rounded-full">Submitted</span>
              </div>
              
              <div className="mt-3 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 text-xs">
                    ✓
                  </div>
                  <span className="text-sm text-emerald-200">Application submitted on May 10</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300 text-xs">
                    ✓
                  </div>
                  <span className="text-sm text-emerald-200">Interview preparation materials ready</span>
                </div>
              </div>
              
              <div className="mt-3 text-xs text-emerald-300">
                <span>Expected response: May 24, 2025</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-800 via-indigo-900 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-400 font-medium text-sm uppercase tracking-wider"
          >
            Key Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl md:text-4xl font-bold text-white"
          >
            Your personal AI assistant that actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">prepares for you</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-blue-200"
          >
            LifeFlowAi doesn't just remind you about events and tasks - it actively prepares everything you need so you're always ready for what's next.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`p-6 rounded-xl transition-all cursor-pointer border ${
                  activeFeature === feature.id
                    ? `bg-gradient-to-r ${feature.color} border-transparent text-white`
                    : "bg-white/5 border-white/10 text-white hover:bg-white/10"
                }`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${activeFeature === feature.id ? "bg-white/20" : `bg-gradient-to-br ${feature.color}`}`}>
                    <feature.icon size={24} className={activeFeature === feature.id ? "text-white" : "text-white"} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className={`mt-1 ${activeFeature === feature.id ? "text-white/90" : "text-blue-200"}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Feature Visual Representation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              {renderFeatureContent(features[activeFeature])}
            </div>
            
            {/* Background decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
