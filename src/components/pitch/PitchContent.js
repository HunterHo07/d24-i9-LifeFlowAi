"use client";

import { BarChart4, Award, Landmark } from "lucide-react";

// Custom icons as components to avoid import issues
const TrendingUp = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const Target = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const Users = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const PieChart = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
  </svg>
);

export default function PitchContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">LifeFlowAi</span> Pitch Deck
          </h1>
          <p className="text-xl text-gray-300">
            Transforming productivity with AI-powered life management
          </p>
        </div>
        
        {/* Slides - Simplified for static export */}
        <div className="max-w-5xl mx-auto space-y-20">
          {/* Problem Slide */}
          <div className="slide">
            <div className="mb-2 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
              The Problem
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">Productivity Tools Haven't Evolved</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Time Wasted on Preparation</h3>
                <p className="text-gray-300 mb-4">
                  People spend up to 60% of their time preparing for tasks rather than executing them.
                </p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Fragmented Tools & Mental Load</h3>
                <p className="text-gray-300 mb-4">
                  Current productivity solutions create more problems.
                </p>
              </div>
            </div>
          </div>
          
          {/* Solution Slide */}
          <div className="slide">
            <div className="mb-2 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
              Our Solution
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">LifeFlowAi: The Proactive AI Life Assistant</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-blue-900/20 to-indigo-900/20 rounded-xl p-5 border border-blue-900/30">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 inline-block mb-3">
                  <TrendingUp size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Task Automation</h3>
                <p className="text-gray-300 text-sm">
                  Automatically prepares documents and materials for upcoming tasks
                </p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-900/20 to-indigo-900/20 rounded-xl p-5 border border-blue-900/30">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 inline-block mb-3">
                  <Target size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Smart Calendar</h3>
                <p className="text-gray-300 text-sm">
                  Tracks appointments and prepares everything you need before events
                </p>
              </div>
              
              <div className="bg-gradient-to-b from-blue-900/20 to-indigo-900/20 rounded-xl p-5 border border-blue-900/30">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 inline-block mb-3">
                  <Users size={20} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Life Management</h3>
                <p className="text-gray-300 text-sm">
                  Tracks personal events, bills, and coordinates your entire life
                </p>
              </div>
            </div>
          </div>
          
          {/* Market Opportunity */}
          <div className="slide">
            <div className="mb-2 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
              Market Opportunity
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">Massive & Growing TAM</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">Market Size</h3>
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <PieChart className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">Target Audience</h3>
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-8 border border-blue-900/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Journey?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're looking for visionary investors who understand the future of AI productivity tools.
            </p>
            <a 
              href="mailto:investors@lifeflowai.com" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
