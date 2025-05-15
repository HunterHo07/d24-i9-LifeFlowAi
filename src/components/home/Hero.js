"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Calendar, Briefcase, Clock, CalendarCheck } from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const phrases = [
    "morning meeting with clients",
    "upcoming job application",
    "daughter's soccer game",
    "annual doctor appointment",
    "quarterly budget review"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showDemonstration, setShowDemonstration] = useState(false);
  const demoRef = useRef(null);
  
  // Typing animation effect
  useEffect(() => {
    if (isTyping) {
      if (currentCharIndex < phrases[currentPhraseIndex].length) {
        const timeout = setTimeout(() => {
          setTypedText(prev => prev + phrases[currentPhraseIndex][currentCharIndex]);
          setCurrentCharIndex(prevCharIndex => prevCharIndex + 1);
        }, 100);
        
        return () => clearTimeout(timeout);
      } else {
        // Pause at the end of the phrase
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting animation
      if (currentCharIndex > 0) {
        const timeout = setTimeout(() => {
          setTypedText(prev => prev.slice(0, -1));
          setCurrentCharIndex(prevCharIndex => prevCharIndex - 1);
        }, 50);
        
        return () => clearTimeout(timeout);
      } else {
        // Move to the next phrase
        const nextPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        setCurrentPhraseIndex(nextPhraseIndex);
        setIsTyping(true);
      }
    }
  }, [currentCharIndex, currentPhraseIndex, isTyping, phrases]);

  // Animation to demonstrate LifeFlowAi
  useEffect(() => {
    if (showDemonstration && demoRef.current) {
      const timeoutId = setTimeout(() => {
        demoRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 500);
      
      return () => clearTimeout(timeoutId);
    }
  }, [showDemonstration]);

  const demonstrateAI = () => {
    setShowDemonstration(true);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-indigo-900 via-blue-900 to-blue-800 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Particle effect */}
        <div className="absolute inset-0 opacity-20">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-blue-400"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                opacity: [0, 0.7, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Glowing orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-500 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-indigo-600 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Content */}
          <div className="space-y-8">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Your proactive AI assistant for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">life management</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              LifeFlowAi doesn't just remind you about tasks - it actively prepares for your {" "}
              <span className="inline-block min-w-48 border-b-2 border-blue-400">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={demonstrateAI}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  See it in action <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <Link
                  href="/demo"
                  className="px-8 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-medium text-lg transition-all border border-white/30 flex items-center justify-center"
                >
                  Try the demo
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Right: Interactive Demo */}
          <motion.div
            className="rounded-xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Today's Schedule</h3>
                <span className="bg-green-400/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                  All prepared
                </span>
              </div>
              
              {/* Interactive Task List */}
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    time: "09:00 AM",
                    title: "Team Weekly Sync",
                    location: "Conference Room B",
                    icon: Calendar,
                    prepared: true
                  },
                  {
                    id: 2,
                    time: "11:30 AM",
                    title: "Client Presentation",
                    location: "XYZ Corp HQ",
                    icon: Briefcase,
                    prepared: true
                  },
                  {
                    id: 3,
                    time: "02:00 PM",
                    title: "Job Application Deadline",
                    location: "Tech Innovators Inc",
                    icon: Clock,
                    prepared: true
                  },
                  {
                    id: 4,
                    time: "05:30 PM",
                    title: "Daughter's Soccer Game",
                    location: "Westfield Park",
                    icon: CalendarCheck,
                    prepared: true
                  }
                ].map(task => (
                  <motion.div
                    key={task.id}
                    className="p-4 rounded-lg flex items-start gap-4 hover:bg-white/10 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="rounded-full p-3 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-300">
                      <task.icon size={20} />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <h4 className="font-medium">{task.title}</h4>
                        <span className="text-blue-200 text-sm">{task.time}</span>
                      </div>
                      <p className="text-blue-200 text-sm">{task.location}</p>
                      <div className="mt-2 flex items-center gap-2 text-green-300 text-xs">
                        <Check size={14} />
                        <span>Preparation complete</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* AI Assistant message */}
              <div className="mt-6 p-4 rounded-lg bg-indigo-600/30 border border-indigo-500/30">
                <p className="text-sm">
                  <span className="font-semibold">LifeFlowAi:</span> Your presentation slides for XYZ Corp are ready. I've added the latest Q2 numbers and created talking points based on their recent press release.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-sm mb-2">Scroll to explore</p>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
      
      {/* Reference for smooth scrolling when "See it in action" is clicked */}
      <div ref={demoRef}></div>
    </section>
  );
};

export default Hero;
