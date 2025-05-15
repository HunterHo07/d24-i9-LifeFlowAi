"use client";

import { motion } from "framer-motion";
import { Zap, ThumbsUp, Clock, Brain } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      id: "scattered",
      icon: Clock,
      title: "Too many tools & platforms",
      description: "Most people use 5+ different apps to manage their professional and personal lives, leading to scattered information and missed details."
    },
    {
      id: "reminders",
      icon: Brain,
      title: "Reminders aren't enough",
      description: "Traditional apps only remind you that something's happening, but don't help you prepare or gather what you need."
    },
    {
      id: "context",
      icon: Zap,
      title: "No context awareness",
      description: "Current tools don't understand that your professional and personal tasks often affect each other and require coordination."
    }
  ];

  const solutions = [
    {
      id: "unified",
      icon: ThumbsUp,
      title: "One assistant for everything",
      description: "LifeFlowAi brings all your calendars, tasks, and events into a single interface that manages both work and personal life."
    },
    {
      id: "proactive",
      icon: Zap, 
      title: "Proactive preparation",
      description: "Instead of just reminders, LifeFlowAi prepares everything you need - from gathering documents to creating talking points."
    },
    {
      id: "smart",
      icon: Brain,
      title: "Intelligent connections",
      description: "Our AI understands how your schedule works together, prioritizing and preparing for what's most important right now."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-indigo-600/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 mx-auto max-w-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-indigo-400 font-medium text-sm uppercase tracking-wider"
          >
            Problem & Solution
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl md:text-4xl font-bold text-white"
          >
            Why traditional task managers <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">fall short</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-300"
          >
            Most productivity tools just track and remind, but LifeFlowAi actually prepares and organizes everything you need, when you need it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M10 16l2-8"></path>
                  <path d="M14 16L12 8"></path>
                  <path d="M8.5 14h7"></path>
                  <path d="M7 10.5h10"></path>
                </svg>
              </span>
              The Problem
            </h3>
            
            {problems.map((problem, index) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-300">
                    <problem.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{problem.title}</h4>
                    <p className="mt-1 text-gray-300">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M2.5 12a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0z"></path>
                  <path d="M10 8.52L14.5 12l-4.5 3.48"></path>
                  <path d="M15 8.55a7 7 0 1 1 0 6.9"></path>
                  <path d="M21 12h-2"></path>
                </svg>
              </span>
              Our Solution
            </h3>
            
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-teal-500/20 text-green-300">
                    <solution.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-lg">{solution.title}</h4>
                    <p className="mt-1 text-gray-300">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
