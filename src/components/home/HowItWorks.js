"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, Sparkles, Check } from "lucide-react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    {
      id: 1,
      title: "Connect Your Accounts",
      description: "Simply connect your calendars, task lists, and personal data. LifeFlowAi securely syncs everything in one place.",
      icon: Calendar,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-500/10 to-indigo-600/10",
      delay: 0.2,
    },
    {
      id: 2,
      title: "AI Analyzes & Prepares",
      description: "Our AI learns your patterns, identifies important events, and proactively prepares materials and information you'll need.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-500/10 to-pink-600/10",
      delay: 0.4,
    },
    {
      id: 3,
      title: "Stay Effortlessly Prepared",
      description: "Receive smart notifications with everything you need already prepared, just in time for your meetings, tasks, and events.",
      icon: Check,
      color: "from-green-500 to-teal-600",
      bgColor: "from-green-500/10 to-teal-600/10",
      delay: 0.6,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-indigo-950 to-gray-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="text-teal-400 font-medium text-sm uppercase tracking-wider"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-3xl md:text-4xl font-bold text-white"
          >
            Three simple steps to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">life automation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 max-w-2xl mx-auto text-gray-300"
          >
            LifeFlowAi makes managing your complex life simple. Here's how the system works to keep you prepared for everything.
          </motion.p>
        </div>

        {/* Steps with interactive visual timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Line connecting the steps on desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: step.delay }}
              className="relative z-10"
            >
              {/* Step number */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center border-2 border-white/10 mx-auto mb-8 shadow-lg">
                <span className="text-white font-bold">{step.id}</span>
              </div>

              {/* Card */}
              <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 h-full flex flex-col">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${step.bgColor} self-start mb-4`}>
                  <step.icon size={24} className={`text-gradient bg-gradient-to-r ${step.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 flex-grow">{step.description}</p>
                
                {/* Interactive element unique to each step */}
                {step.id === 1 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Google Calendar
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Outlook
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Todoist
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      Notion
                    </span>
                  </div>
                )}
                
                {step.id === 2 && (
                  <div className="mt-6 p-3 bg-gray-800/50 rounded-lg border border-purple-500/20 text-xs text-gray-300">
                    <div className="mb-2 flex justify-between">
                      <span>Pattern analysis</span>
                      <span className="text-purple-400">76% complete</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "76%" } : {}}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                      ></motion.div>
                    </div>
                  </div>
                )}
                
                {step.id === 3 && (
                  <div className="mt-6 bg-gray-800/50 rounded-lg p-3 border border-green-500/20">
                    <div className="flex items-start gap-2 text-xs">
                      <div className="p-1 rounded bg-green-500/20 text-green-400 mt-0.5">
                        <Check size={12} />
                      </div>
                      <div className="text-gray-300">
                        <p className="font-medium text-white text-sm">Meeting prep complete</p>
                        <p>Slides and agenda ready for client presentation</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105"
          >
            Try it yourself
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
