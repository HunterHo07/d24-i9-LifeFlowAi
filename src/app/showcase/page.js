import Image from 'next/image';
import { Award, Star, TrendingUp, Users, Zap } from 'lucide-react';

export const metadata = {
  title: "Showcase - LifeFlowAi",
  description: "Explore LifeFlowAi's features and success stories. See how our AI-powered assistant is transforming productivity and life management.",
};

const statCards = [
  { number: "87%", label: "Reduction in preparation time", icon: Clock },
  { number: "12k+", label: "Early access sign-ups", icon: Users },
  { number: "4.8", label: "Average user rating", icon: Star },
  { number: "92%", label: "User retention rate", icon: TrendingUp },
];

function Clock(props) {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">LifeFlowAi</span> Showcase
          </h1>
          <p className="text-xl text-gray-300">
            Discover how our AI assistant is transforming productivity for thousands of users
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statCards.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 flex flex-col items-center text-center"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-400 inline-block mb-4">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Feature Showcase Sections */}
        <div className="space-y-32 mb-20">
          {/* Task Automation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
                Task Automation
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Never Start from Zero Again</h2>
              
              <p className="text-gray-300 mb-6">
                LifeFlowAi proactively prepares everything you need for upcoming tasks, giving you a significant head start on every project.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Automatically gathers relevant documents and files",
                  "Prepares draft emails and messages for your review",
                  "Collects information from multiple sources into a single workspace",
                  "Generates summaries of key information for quick reference"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 lg:order-2 bg-gradient-to-b from-blue-500/5 to-indigo-500/5 rounded-2xl p-2 border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <div className="aspect-video rounded-xl bg-gray-800 flex items-center justify-center text-gray-700">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <Zap size={48} className="text-blue-400 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">Task Automation Demo Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Smart Calendar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-b from-blue-500/5 to-indigo-500/5 rounded-2xl p-2 border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <div className="aspect-video rounded-xl bg-gray-800 flex items-center justify-center text-gray-700">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mx-auto mb-4 relative w-10 h-10">
                      <svg
                        className="text-blue-400 w-10 h-10"
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
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">Smart Calendar Demo Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-4 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
                Smart Calendar
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Beyond Simple Reminders</h2>
              
              <p className="text-gray-300 mb-6">
                LifeFlowAi transforms your calendar from a simple time-tracking tool into a proactive preparation system that ensures you're always ready.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Prepares meeting briefs with relevant background information",
                  "Sends smart reminders with prep materials at optimal times",
                  "Arranges transportation and location details for events",
                  "Adjusts schedules intelligently based on changes and priorities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Job Application Tracking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
                Job Application Assistant
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Land Your Dream Job</h2>
              
              <p className="text-gray-300 mb-6">
                LifeFlowAi streamlines your job hunt by organizing applications, preparing for interviews, and tracking follow-ups.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Organizes job listings and application statuses in one place",
                  "Creates personalized application materials based on job descriptions",
                  "Prepares interview talking points and research on companies",
                  "Schedules follow-ups and reminds you of important deadlines"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="order-1 lg:order-2 bg-gradient-to-b from-blue-500/5 to-indigo-500/5 rounded-2xl p-2 border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <div className="aspect-video rounded-xl bg-gray-800 flex items-center justify-center text-gray-700">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mx-auto mb-4 relative w-10 h-10">
                      <svg
                        className="text-blue-400 w-10 h-10"
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
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">Job Application Demo Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Event Tracking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-b from-blue-500/5 to-indigo-500/5 rounded-2xl p-2 border border-blue-500/20 shadow-lg shadow-blue-500/5">
              <div className="aspect-video rounded-xl bg-gray-800 flex items-center justify-center text-gray-700">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mx-auto mb-4 relative w-10 h-10">
                      <svg
                        className="text-blue-400 w-10 h-10"
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
                        <path d="m8 6 4-4 4 4" />
                        <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
                        <path d="m20 22-5-5" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-lg">Event Tracking Demo Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-4 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
                Life Event Management
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Never Miss What Matters</h2>
              
              <p className="text-gray-300 mb-6">
                From birthdays to bills, LifeFlowAi tracks important personal events and ensures you're prepared for everything life throws your way.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Monitors bill due dates and prepares payment summaries",
                  "Reminds you of birthdays with gift suggestions based on interests",
                  "Tracks contract renewals and important document deadlines",
                  "Manages health appointments with preparation instructions"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="p-1 rounded-full bg-green-500/20 text-green-400 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* User Success Stories */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah J.",
                role: "Marketing Director",
                image: "S",
                quote: "LifeFlowAi cut my meeting prep time by 75%. I'm now the most prepared person in every meeting without the usual late nights of work."
              },
              {
                name: "David L.",
                role: "Freelance Designer",
                image: "D",
                quote: "Managing multiple clients used to be chaos. Now I have everything prepared for each project automatically, and I never miss a deadline."
              },
              {
                name: "Priya M.",
                role: "Medical Resident",
                image: "P",
                quote: "Between shifts and studying, I was dropping the ball on life admin. LifeFlowAi handles it all seamlessly so I can focus on patient care."
              }
            ].map((story, i) => (
              <div key={i} className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-indigo-500/30 mr-3 flex items-center justify-center text-white font-medium">
                    {story.image}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{story.name}</h4>
                    <p className="text-gray-400 text-sm">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{story.quote}"</p>
                <div className="mt-4 flex">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Industry Recognition */}
        <div className="my-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/20 to-amber-600/20 text-yellow-400 mr-3">
                  <Award size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">Productivity Innovation Award 2025</h3>
              </div>
              <p className="text-gray-300">
                Recognized for "Most Innovative Use of AI in Personal Productivity" by the Global Tech Summit.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-400 mr-3">
                  <Users size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">Top 10 AI Startups to Watch</h3>
              </div>
              <p className="text-gray-300">
                Featured in TechCrunch's annual list of most promising AI startups transforming everyday life.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl p-10 border border-blue-900/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Experience the Future of Productivity</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are transforming how they manage work and life with LifeFlowAi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/demo" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105"
            >
              Try the Demo
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/15 text-white rounded-full font-medium text-lg transition-all border border-white/20"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
