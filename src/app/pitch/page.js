import { TrendingUp, Target, Users, PieChart, BarChart4, Award, Landmark } from "lucide-react";

export const metadata = {
  title: "Investor Pitch - LifeFlowAi",
  description: "LifeFlowAi's pitch deck for investors - market opportunity, business model, and growth strategy for our AI-powered life management assistant.",
};

export default function PitchPage() {
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
        
        {/* Slides */}
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
                  People spend up to 60% of their time preparing for tasks rather than executing them. This translates to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-2 mt-0.5">•</span>
                    <span>4-6 hours/week gathering materials for meetings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-2 mt-0.5">•</span>
                    <span>3-5 hours/week searching for information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-2 mt-0.5">•</span>
                    <span>10+ hours/month on admin tasks</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-4">Fragmented Tools & Mental Load</h3>
                <p className="text-gray-300 mb-4">
                  Current productivity solutions create more problems:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-2 mt-0.5">•</span>
                    <span>Average person uses 5-7 different apps to manage life</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-2 mt-0.5">•</span>
                    <span>Constant context switching reduces productivity by 40%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-red-500/20 text-red-400 mr-2 mt-0.5">•</span>
                    <span>Traditional tools increase "digital anxiety"</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Solution Slide */}
          <div className="slide">
            <div className="mb-2 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
              Our Solution
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">LifeFlowAi: The Proactive AI Life Assistant</h2>
            
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 mb-8">
              <p className="text-gray-300 text-lg">
                LifeFlowAi is an AI-native personal assistant that actively prepares for your tasks and events, automating preparation work and reducing mental load.
              </p>
            </div>
            
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
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Productivity Software Market:</span>
                    <span className="font-bold text-white">$102.98B</span>
                  </li>
                  <li className="flex justify-between">
                    <span>AI Assistant Market:</span>
                    <span className="font-bold text-white">$17.7B</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Personal Task Management:</span>
                    <span className="font-bold text-white">$4.8B</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-700 pt-3 mt-3">
                    <span>CAGR (2023-2030):</span>
                    <span className="font-bold text-green-400">19.6%</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">Target Audience</h3>
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Busy Professionals:</span>
                    <span className="font-bold text-white">89M+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Freelancers:</span>
                    <span className="font-bold text-white">70M+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Working Parents:</span>
                    <span className="font-bold text-white">41M+</span>
                  </li>
                  <li className="flex justify-between border-t border-gray-700 pt-3 mt-3">
                    <span>Total Addressable Users:</span>
                    <span className="font-bold text-blue-400">200M+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Business Model */}
          <div className="slide">
            <div className="mb-2 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
              Business Model
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">Tiered Subscription Model</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-2">Free Tier</h3>
                <div className="text-2xl font-bold text-white mb-4">$0</div>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Basic task management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>5 AI preparations per month</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Single calendar integration</span>
                  </li>
                </ul>
                <div className="text-gray-500 text-sm">
                  Acquisition & conversion focus
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-blue-900/20 to-indigo-900/20 rounded-xl p-6 border border-blue-500/30 transform scale-105 shadow-lg">
                <h3 className="text-lg font-bold text-white mb-2">Professional</h3>
                <div className="text-2xl font-bold text-white mb-4">$9.99<span className="text-sm font-normal text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Unlimited task automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Multi-calendar integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Job application assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <div className="text-blue-400 text-sm font-medium">
                  Primary revenue driver (80%)
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-bold text-white mb-2">Premium</h3>
                <div className="text-2xl font-bold text-white mb-4">$19.99<span className="text-sm font-normal text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 text-sm mb-6">
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Family account (up to 5)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Advanced AI personalization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                    <span>Priority AI processing</span>
                  </li>
                </ul>
                <div className="text-gray-500 text-sm">
                  High-value customers (20%)
                </div>
              </div>
            </div>
          </div>
          
          {/* Traction & Milestones */}
          <div className="slide">
            <div className="mb-2 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
              Traction & Roadmap
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">Our Journey & Vision</h2>
            
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 mb-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-lg font-bold text-white">Key Milestones</h3>
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <BarChart4 className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="p-2 rounded-full bg-green-500/20 text-green-400">
                      <Check size={16} />
                    </div>
                    <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 mb-1">Q1 2025</div>
                    <h4 className="text-white font-bold mb-1">MVP Launch</h4>
                    <p className="text-gray-400 text-sm">Core functionality with task automation and calendar integration</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <div className="h-4 w-4"></div>
                    </div>
                    <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 mb-1">Q3 2025</div>
                    <h4 className="text-white font-bold mb-1">Advanced Integration Phase</h4>
                    <p className="text-gray-400 text-sm">Connect with 20+ productivity tools and expand user base to 25,000</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <div className="h-4 w-4"></div>
                    </div>
                    <div className="w-0.5 h-full bg-gray-700 mt-2"></div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 mb-1">Q1 2026</div>
                    <h4 className="text-white font-bold mb-1">Enterprise Solution</h4>
                    <p className="text-gray-400 text-sm">Launch enterprise version with team collaboration features</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex flex-col items-center mr-4">
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <div className="h-4 w-4"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-blue-400 mb-1">Q4 2026</div>
                    <h4 className="text-white font-bold mb-1">Global Expansion</h4>
                    <p className="text-gray-400 text-sm">International markets and localization to 10+ languages</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">Key Metrics Target (Year 1)</h3>
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Award className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Active Users:</span>
                    <span className="font-bold text-white">50,000+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Conversion Rate:</span>
                    <span className="font-bold text-white">5-8%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Retention Rate:</span>
                    <span className="font-bold text-white">85%+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>ARR:</span>
                    <span className="font-bold text-white">$1.2M</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">Funding Requirements</h3>
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Landmark className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">
                  Seeking $1.5M seed funding to accelerate development and go-to-market:
                </p>
                
                <ul className="space-y-3 text-gray-300">
                  <li className="flex justify-between">
                    <span>Engineering (60%):</span>
                    <span className="font-bold text-white">$900K</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Marketing (25%):</span>
                    <span className="font-bold text-white">$375K</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Operations (15%):</span>
                    <span className="font-bold text-white">$225K</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Team & Contact */}
          <div className="slide mt-24">
            <div className="mb-2 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
              The Team
            </div>
            <h2 className="text-3xl font-bold text-white mb-8">Our Founding Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 mx-auto mb-4 border border-white/20 flex items-center justify-center text-white font-medium text-2xl">
                  JD
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Jane Doe</h3>
                <p className="text-blue-400 text-sm mb-3">CEO & Founder</p>
                <p className="text-gray-400 text-sm">
                  Former Product Lead at Google AI with 8+ years in productivity tools
                </p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 mx-auto mb-4 border border-white/20 flex items-center justify-center text-white font-medium text-2xl">
                  JS
                </div>
                <h3 className="text-lg font-bold text-white mb-1">John Smith</h3>
                <p className="text-blue-400 text-sm mb-3">CTO</p>
                <p className="text-gray-400 text-sm">
                  AI researcher with PhD in ML and ex-Meta Engineering Manager
                </p>
              </div>
              
              <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 mx-auto mb-4 border border-white/20 flex items-center justify-center text-white font-medium text-2xl">
                  AT
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Alex Turner</h3>
                <p className="text-blue-400 text-sm mb-3">Head of Product</p>
                <p className="text-gray-400 text-sm">
                  Product leader from Asana with expertise in productivity UX
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-8 border border-blue-900/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Journey?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're looking for visionary investors who understand the future of AI productivity tools and want to join us in transforming how people manage their lives.
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
    </div>
  );
}
