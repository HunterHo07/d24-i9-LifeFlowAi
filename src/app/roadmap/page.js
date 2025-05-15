import { Lightbulb, Rocket, Calendar, Globe, Building2, ChartBarSquare } from "lucide-react";

export const metadata = {
  title: "Product Roadmap - LifeFlowAi",
  description: "Explore LifeFlowAi's development roadmap and future features. See what's coming next for our AI-powered life management assistant.",
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-gray-900 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">LifeFlowAi</span> Roadmap
          </h1>
          <p className="text-xl text-gray-300">
            Our vision for the future of productivity and life management
          </p>
        </div>
        
        {/* Current Status */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="mb-4 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
            Current Status
          </div>
          <h2 className="text-3xl font-bold text-white mb-8">Where We Are Today</h2>
          
          <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-gray-300 mb-6">
              LifeFlowAi is currently in MVP phase with core functionality operational:
            </p>
            
            <ul className="space-y-4">
              {[
                "Core task automation and preparation features",
                "Smart calendar integration with proactive preparation",
                "Basic job application tracking system",
                "Personal event tracking and bill management",
                "Cross-platform web application",
                "User account management and data storage"
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
        
        {/* Development Timeline */}
        <div className="mb-24">
          <div className="mb-4 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
            Development Timeline
          </div>
          <h2 className="text-3xl font-bold text-white mb-12">Our Product Journey</h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/50 via-indigo-500/30 to-transparent"></div>
            
            {/* Timeline Items */}
            <div className="space-y-20">
              {/* Q2 2025 - Public Beta */}
              <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
                <div className="flex items-center mb-4 md:mb-0 md:w-[calc(50%-3rem)]">
                  <div className="z-10 w-12 h-12 rounded-full bg-blue-500 border-4 border-indigo-950 flex items-center justify-center mr-4 md:mr-0">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:hidden">
                    <div className="text-blue-400 text-sm font-semibold mb-1">Q2 2025</div>
                    <h3 className="text-xl font-bold text-white">Public Beta Launch</h3>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-[calc(50%-3rem)] text-right">
                  <div className="text-blue-400 text-sm font-semibold mb-1">Q2 2025</div>
                  <h3 className="text-xl font-bold text-white">Public Beta Launch</h3>
                  <p className="text-gray-400 mt-2">
                    Opening access to our early adopter community with core functionality
                  </p>
                </div>
                
                <div className="pl-16 md:pl-0 md:w-[calc(50%-3rem)]">
                  <div className="md:hidden text-gray-400 mb-4">
                    Opening access to our early adopter community with core functionality
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                        <span>Mobile application beta for iOS and Android</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                        <span>Integration with Google Workspace and Microsoft 365</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                        <span>Enhanced UI/UX with user testing refinements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">•</span>
                        <span>Early access to premium features for beta testers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Q3 2025 - Official Release */}
              <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center">
                <div className="flex items-center mb-4 md:mb-0 md:w-[calc(50%-3rem)]">
                  <div className="z-10 w-12 h-12 rounded-full bg-indigo-600 border-4 border-indigo-950 flex items-center justify-center mr-4 md:mr-0 md:ml-4">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:hidden">
                    <div className="text-indigo-400 text-sm font-semibold mb-1">Q3 2025</div>
                    <h3 className="text-xl font-bold text-white">Official Release</h3>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-[calc(50%-3rem)]">
                  <div className="text-indigo-400 text-sm font-semibold mb-1">Q3 2025</div>
                  <h3 className="text-xl font-bold text-white">Official Release</h3>
                  <p className="text-gray-400 mt-2">
                    Full public release with subscription tiers and enhanced features
                  </p>
                </div>
                
                <div className="pl-16 md:pl-0 md:w-[calc(50%-3rem)]">
                  <div className="md:hidden text-gray-400 mb-4">
                    Full public release with subscription tiers and enhanced features
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mr-2 mt-0.5">•</span>
                        <span>Complete native mobile apps for iOS and Android</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mr-2 mt-0.5">•</span>
                        <span>Browser extensions for Chrome, Firefox, and Safari</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mr-2 mt-0.5">•</span>
                        <span>Advanced task suggestion and prioritization AI</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mr-2 mt-0.5">•</span>
                        <span>Enhanced calendar features with intelligent scheduling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Q1 2026 - Enterprise Edition */}
              <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
                <div className="flex items-center mb-4 md:mb-0 md:w-[calc(50%-3rem)]">
                  <div className="z-10 w-12 h-12 rounded-full bg-purple-600 border-4 border-indigo-950 flex items-center justify-center mr-4 md:mr-0">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:hidden">
                    <div className="text-purple-400 text-sm font-semibold mb-1">Q1 2026</div>
                    <h3 className="text-xl font-bold text-white">Enterprise Edition</h3>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-[calc(50%-3rem)] text-right">
                  <div className="text-purple-400 text-sm font-semibold mb-1">Q1 2026</div>
                  <h3 className="text-xl font-bold text-white">Enterprise Edition</h3>
                  <p className="text-gray-400 mt-2">
                    Specialized solutions for teams and organizations
                  </p>
                </div>
                
                <div className="pl-16 md:pl-0 md:w-[calc(50%-3rem)]">
                  <div className="md:hidden text-gray-400 mb-4">
                    Specialized solutions for teams and organizations
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-purple-500/20 text-purple-400 mr-2 mt-0.5">•</span>
                        <span>Team collaboration features for shared tasks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-purple-500/20 text-purple-400 mr-2 mt-0.5">•</span>
                        <span>Advanced analytics and team productivity reporting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-purple-500/20 text-purple-400 mr-2 mt-0.5">•</span>
                        <span>Admin dashboard and user management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-purple-500/20 text-purple-400 mr-2 mt-0.5">•</span>
                        <span>Enterprise-grade security and compliance features</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Q3 2026 - Global Expansion */}
              <div className="relative flex flex-col md:flex-row-reverse md:justify-between items-start md:items-center">
                <div className="flex items-center mb-4 md:mb-0 md:w-[calc(50%-3rem)]">
                  <div className="z-10 w-12 h-12 rounded-full bg-pink-600 border-4 border-indigo-950 flex items-center justify-center mr-4 md:mr-0 md:ml-4">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:hidden">
                    <div className="text-pink-400 text-sm font-semibold mb-1">Q3 2026</div>
                    <h3 className="text-xl font-bold text-white">Global Expansion</h3>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-[calc(50%-3rem)]">
                  <div className="text-pink-400 text-sm font-semibold mb-1">Q3 2026</div>
                  <h3 className="text-xl font-bold text-white">Global Expansion</h3>
                  <p className="text-gray-400 mt-2">
                    International markets and localized experiences
                  </p>
                </div>
                
                <div className="pl-16 md:pl-0 md:w-[calc(50%-3rem)]">
                  <div className="md:hidden text-gray-400 mb-4">
                    International markets and localized experiences
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-pink-500/20 text-pink-400 mr-2 mt-0.5">•</span>
                        <span>Localization in 15+ languages</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-pink-500/20 text-pink-400 mr-2 mt-0.5">•</span>
                        <span>Region-specific features and integrations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-pink-500/20 text-pink-400 mr-2 mt-0.5">•</span>
                        <span>Cultural adaptation of AI assistant</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-pink-500/20 text-pink-400 mr-2 mt-0.5">•</span>
                        <span>Global support team and documentation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* 2027 - Advanced AI Platform */}
              <div className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
                <div className="flex items-center mb-4 md:mb-0 md:w-[calc(50%-3rem)]">
                  <div className="z-10 w-12 h-12 rounded-full bg-amber-500 border-4 border-indigo-950 flex items-center justify-center mr-4 md:mr-0">
                    <Lightbulb className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:hidden">
                    <div className="text-amber-400 text-sm font-semibold mb-1">2027</div>
                    <h3 className="text-xl font-bold text-white">Advanced AI Platform</h3>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-[calc(50%-3rem)] text-right">
                  <div className="text-amber-400 text-sm font-semibold mb-1">2027</div>
                  <h3 className="text-xl font-bold text-white">Advanced AI Platform</h3>
                  <p className="text-gray-400 mt-2">
                    Next-generation AI capabilities and intelligence
                  </p>
                </div>
                
                <div className="pl-16 md:pl-0 md:w-[calc(50%-3rem)]">
                  <div className="md:hidden text-gray-400 mb-4">
                    Next-generation AI capabilities and intelligence
                  </div>
                  
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700">
                    <ul className="space-y-3 text-gray-300 text-sm">
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-amber-500/20 text-amber-400 mr-2 mt-0.5">•</span>
                        <span>Autonomous task execution and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-amber-500/20 text-amber-400 mr-2 mt-0.5">•</span>
                        <span>Predictive life planning assistance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-amber-500/20 text-amber-400 mr-2 mt-0.5">•</span>
                        <span>Advanced natural language communication</span>
                      </li>
                      <li className="flex items-start">
                        <span className="p-1 rounded-full bg-amber-500/20 text-amber-400 mr-2 mt-0.5">•</span>
                        <span>Personal AI coach for productivity and well-being</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Future Features */}
        <div className="mb-24">
          <div className="mb-4 inline-block py-1 px-3 rounded-full bg-indigo-900/50 text-indigo-400 text-sm font-medium">
            Coming Soon
          </div>
          <h2 className="text-3xl font-bold text-white mb-12">Upcoming Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Document Preparation",
                description: "Automatically draft emails, reports, and presentations based on your upcoming tasks and available information.",
                icon: Lightbulb,
                timeframe: "Q2 2025"
              },
              {
                title: "Voice Assistant Integration",
                description: "Hands-free management of your LifeFlowAi through voice commands and conversational AI interface.",
                icon: Rocket,
                timeframe: "Q3 2025"
              },
              {
                title: "Learning Preferences",
                description: "Advanced AI that learns your work style and adapts to your preferences over time.",
                icon: ChartBarSquare,
                timeframe: "Q3 2025"
              },
              {
                title: "Smart Travel Assistant",
                description: "Travel planning, booking suggestions, and trip preparation assistance integrated with your calendar.",
                icon: Globe,
                timeframe: "Q4 2025"
              },
              {
                title: "Financial Planning Integration",
                description: "Connect with financial services to provide budget tracking and financial goal planning.",
                icon: ChartBarSquare,
                timeframe: "Q1 2026"
              },
              {
                title: "Multi-user Family Plans",
                description: "Coordinate schedules and tasks across family members with shared calendars and responsibilities.",
                icon: Users,
                timeframe: "Q1 2026"
              },
            ].map((feature, i) => (
              <div key={i} className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/30 transition-colors">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-600/20 text-blue-400 inline-block mb-4">
                  <feature.icon size={24} />
                </div>
                <div className="inline-block py-1 px-2 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-2">
                  {feature.timeframe}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Community Input Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Help Shape Our Future</h2>
          <p className="text-lg text-gray-300 mb-8">
            We believe in building with our community, not just for them. We regularly incorporate user feedback and suggestions into our roadmap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium transition-all transform hover:scale-105"
            >
              Join Our Beta Program
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/15 text-white rounded-full font-medium transition-all border border-white/20"
            >
              Suggest Features
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
