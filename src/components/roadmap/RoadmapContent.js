"use client";

function Lightbulb(props) {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

function Rocket(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function Calendar(props) {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function Globe(props) {
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
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function Building2(props) {
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
      <path d="M6 22V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4" />
      <path d="M18 14v8" />
      <path d="M22 14v8" />
      <path d="M18 11V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v7" />
      <path d="M14 22V11a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v11" />
      <path d="M10 22V2" />
    </svg>
  );
}

export default function RoadmapContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Header - Simplified */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">LifeFlowAi</span> Roadmap
          </h1>
          <p className="text-xl text-gray-300">
            Our vision for the future of productivity and life management
          </p>
        </div>
        
        {/* Current Status - Simplified */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="mb-4 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
            Current Status
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">Where We Are Today</h2>
          
          <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 mb-6">
              LifeFlowAi is currently in MVP phase with core functionality operational.
            </p>
          </div>
        </div>
        
        {/* Timeline - Simplified */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="mb-4 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
            Development Timeline
          </div>
          <h2 className="text-3xl font-bold text-white mb-12">Our Product Journey</h2>
          
          {/* Simplified Timeline */}
          <div className="space-y-6">
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Q2 2025: Public Beta Launch</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                  <Rocket size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Q3 2025: Official Release</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                  <Building2 size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Q1 2026: Enterprise Edition</h3>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                  <Globe size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Q3 2026: Global Expansion</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA - Simplified */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Help Shape Our Future</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium transition-all transform hover:scale-105"
            >
              Join Our Beta Program
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
