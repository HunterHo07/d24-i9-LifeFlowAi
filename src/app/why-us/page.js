import { Brain, Zap, Clock, Puzzle, Layers, Shield } from "lucide-react";

export const metadata = {
  title: "Why LifeFlowAi - Your Proactive AI Assistant",
  description: "Discover what makes LifeFlowAi different from traditional productivity tools and how our proactive AI approach transforms life management.",
};

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">LifeFlowAi</span>
          </h1>
          <p className="text-xl text-gray-300">
            We're reimagining productivity tools for the AI era. Here's what sets us apart from traditional task and calendar apps.
          </p>
        </div>
        
        {/* Comparison Section */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl bg-gradient-to-b from-red-900/20 to-red-950/20 border border-red-900/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="p-2 rounded-full bg-red-500/20 text-red-400 mr-3">
                  <Clock className="h-6 w-6" />
                </span>
                Traditional Tools
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                  <span className="text-gray-300">Just sends reminders with no preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                  <span className="text-gray-300">Requires manual entry and organization of tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                  <span className="text-gray-300">Treats work and personal life as separate systems</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                  <span className="text-gray-300">Focuses on logging tasks, not solving problems</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                  <span className="text-gray-300">Creates more work through endless notifications</span>
                </li>
              </ul>
            </div>
            
            <div className="rounded-2xl bg-gradient-to-b from-blue-900/20 to-indigo-900/20 border border-blue-900/30 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="p-2 rounded-full bg-blue-500/20 text-blue-400 mr-3">
                  <Brain className="h-6 w-6" />
                </span>
                LifeFlowAi
              </h2>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-300">Proactively prepares documents, information, and resources you need</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-300">AI automation reduces manual entry and organization</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-300">Unified system for both work and personal life management</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-300">Problem-solving approach with practical assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="text-gray-300">Reduces workload with meaningful, actionable insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Key Advantages */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Key Advantages</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "AI-Native Design",
                description: "Built from the ground up for the AI era, not just a traditional app with AI features added on."
              },
              {
                icon: Clock,
                title: "Time-Saving Focus",
                description: "We don't just track your time—we save it by eliminating preparation work and reducing mental load."
              },
              {
                icon: Puzzle,
                title: "Contextual Intelligence",
                description: "Understands the relationships between your tasks, events, and obligations to provide relevant assistance."
              },
              {
                icon: Layers,
                title: "Unified Experience",
                description: "One assistant for everything—work, personal, health, education, finances, and more."
              },
              {
                icon: Shield,
                title: "Privacy-First Approach",
                description: "Your data remains private and secure. We use AI to serve you, not to exploit your information."
              },
              {
                icon: Brain,
                title: "Continuous Learning",
                description: "LifeFlowAi gets more helpful over time as it learns your preferences and patterns."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-400 inline-block mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-blue-500/20">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-white/20 flex items-center justify-center text-white font-medium text-xl">
                M
              </div>
              <div>
                <p className="text-gray-300 italic text-lg mb-4">
                  "LifeFlowAi doesn't just remind me about my day—it actively prepares me for it. It's the difference between having a digital calendar and having a personal assistant who knows exactly what I need."
                </p>
                <div>
                  <h4 className="text-white font-bold">Michael Chen</h4>
                  <p className="text-gray-400">Product Manager & Busy Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to experience the difference?</h2>
          <a 
            href="/demo" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105"
          >
            Try the Demo
          </a>
          <p className="mt-4 text-gray-400">
            See how LifeFlowAi can transform your productivity today.
          </p>
        </div>
      </div>
    </div>
  );
}
