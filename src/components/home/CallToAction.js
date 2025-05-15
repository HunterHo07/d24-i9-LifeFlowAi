"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-indigo-950 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 right-1/4 w-80 h-80 rounded-full bg-indigo-600/10 blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-3xl p-10 md:p-16 border border-blue-500/20 shadow-xl shadow-blue-500/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to transform how you <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">manage your life</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join thousands of professionals who are saving time and reducing stress with LifeFlowAi's proactive life management.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/demo"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Try the demo <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#pricing"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-medium text-lg transition-all border border-white/30 flex items-center justify-center"
                >
                  View pricing
                </Link>
              </div>
            </motion.div>
            
            {/* Stats or trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">15,000+</h3>
                <p className="text-gray-400">Active Users</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">4.8/5</h3>
                <p className="text-gray-400">User Rating</p>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">93%</h3>
                <p className="text-gray-400">Productivity Increase</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
