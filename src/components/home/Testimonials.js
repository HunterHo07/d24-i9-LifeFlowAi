"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director",
      quote: "LifeFlowAi has transformed how I balance work meetings with family obligations. It's like having an EA who knows my life inside out!",
      avatar: "/images/avatar-1.jpg",
      stars: 5,
      delay: 0.2,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer & Dad",
      quote: "No more forgetting soccer games or showing up unprepared for client meetings. LifeFlowAi gives me back hours every week.",
      avatar: "/images/avatar-2.jpg",
      stars: 5,
      delay: 0.4,
    },
    {
      id: 3,
      name: "Priya Sharma",
      role: "Freelance Designer",
      quote: "As someone juggling multiple clients and projects, LifeFlowAi has been a game-changer. The job application assistance alone saved me so much time!",
      avatar: "/images/avatar-3.jpg",
      stars: 5,
      delay: 0.6,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-indigo-950 relative overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-1/3 bg-indigo-600/5 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-purple-400 font-medium text-sm uppercase tracking-wider"
          >
            What People Say
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl md:text-4xl font-bold text-white"
          >
            Life-changing <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">results</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: testimonial.delay }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 relative h-full"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-6 right-6 text-gray-700 opacity-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 11C10 12.66 8.66 14 7 14C5.34 14 4 12.66 4 11C4 9.34 5.34 8 7 8C8.66 8 10 9.34 10 11Z" fill="currentColor"/>
                  <path d="M20 11C20 12.66 18.66 14 17 14C15.34 14 14 12.66 14 11C14 9.34 15.34 8 17 8C18.66 8 20 9.34 20 11Z" fill="currentColor"/>
                </svg>
              </div>
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
              
              {/* User info */}
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-white/20 flex items-center justify-center text-white font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-white/10 text-center"
        >
          <p className="text-lg text-white mb-8">Trusted by professionals from leading companies</p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {/* Company logos would typically go here - using text placeholders for now */}
            <div className="text-gray-400 font-bold text-xl">ACME Corp</div>
            <div className="text-gray-400 font-bold text-xl">TechGiant</div>
            <div className="text-gray-400 font-bold text-xl">InnovateCo</div>
            <div className="text-gray-400 font-bold text-xl">FutureSoft</div>
            <div className="text-gray-400 font-bold text-xl">GlobalTech</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
