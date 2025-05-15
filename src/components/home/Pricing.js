"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      id: "free",
      name: "Free",
      description: "Essential features for individuals getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Basic task management",
        "Calendar integration (1 account)",
        "5 AI task preparations per month",
        "Basic reminders",
        "7-day data retention",
      ],
      highlighted: false,
      delay: 0.2,
    },
    {
      id: "pro",
      name: "Professional",
      description: "Enhanced features for busy professionals",
      monthlyPrice: 9.99,
      annualPrice: 99,  // ~17% discount
      features: [
        "Advanced task automation",
        "Multi-calendar integration",
        "Unlimited AI task preparations",
        "Smart reminders with preparation",
        "Job application assistance",
        "Event tracking & coordination",
        "30-day data retention",
        "Priority support",
      ],
      highlighted: true,
      delay: 0.3,
    },
    {
      id: "premium",
      name: "Premium",
      description: "Complete life automation for families & power users",
      monthlyPrice: 19.99,
      annualPrice: 199,  // ~17% discount
      features: [
        "Everything in Professional",
        "Family account sharing (up to 5)",
        "Advanced AI personalization",
        "Location-based reminders",
        "Advanced analytics & insights",
        "Unlimited data retention",
        "Priority AI processing",
        "24/7 premium support",
      ],
      highlighted: false,
      delay: 0.4,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-indigo-950 to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-indigo-900/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-400 font-medium text-sm uppercase tracking-wider"
          >
            Pricing Plans
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl md:text-4xl font-bold text-white"
          >
            Simple, transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-gray-300"
          >
            Choose the plan that fits your needs. All plans include our core AI-powered life management features.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 inline-flex items-center bg-white/5 backdrop-blur-sm p-1 rounded-full border border-white/10"
          >
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual 
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                isAnnual 
                  ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Annual <span className="ml-1 text-xs px-2 py-0.5 bg-green-500/20 text-green-300 rounded-full">Save 17%</span>
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: plan.delay }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.highlighted 
                  ? "bg-gradient-to-b from-indigo-500/20 to-indigo-900/20 border-2 border-indigo-500/30 shadow-xl shadow-indigo-500/10" 
                  : "bg-gradient-to-b from-gray-800/80 to-gray-900/80 border border-white/10"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-bold px-4 py-1 uppercase tracking-wider transform rotate-0 origin-bottom-left">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.id !== "free" && (
                      <span className="text-gray-400 ml-2 mb-1">
                        /{isAnnual ? "year" : "month"}
                      </span>
                    )}
                  </div>
                  {plan.id === "free" && (
                    <span className="text-gray-400 text-sm">Forever free</span>
                  )}
                </div>
                
                <button
                  className={`w-full py-3 rounded-lg font-medium mb-8 transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg shadow-indigo-500/20"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
                  }`}
                >
                  {plan.id === "free" ? "Start Now" : "Try Free for 14 Days"}
                </button>
                
                <div className="space-y-4">
                  <p className="text-sm font-medium text-white">Plan includes:</p>
                  
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className={`p-1 rounded-full ${plan.highlighted ? "bg-indigo-500/20 text-indigo-400" : "bg-blue-500/20 text-blue-400"} mr-3 mt-0.5`}>
                        <Check size={14} />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial or guarantee banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/20 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Not sure if LifeFlowAi is right for you? Try any paid plan risk-free for 30 days. If you're not completely satisfied, we'll refund your payment.
          </p>
        </motion.div>

        {/* FAQ or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Need a custom plan for your team or organization?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline">
              Contact us
            </a>{" "}
            for enterprise pricing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
