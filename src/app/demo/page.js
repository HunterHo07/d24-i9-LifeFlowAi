import DemoInterface from "@/components/demo/DemoInterface";

export const metadata = {
  title: "Demo - LifeFlowAi",
  description: "Experience how LifeFlowAi helps manage tasks, calendar, job applications, and personal events with our interactive demo.",
};

export default function DemoPage() {
  return (
    <div className="py-20 min-h-screen bg-gradient-to-b from-indigo-950 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">LifeFlowAi</span> in Action
          </h1>
          <p className="text-xl text-gray-300 mx-auto max-w-2xl">
            Try our interactive demo to see how LifeFlowAi proactively prepares for your tasks, events, and deadlines.
          </p>
        </div>
        
        <DemoInterface />
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to Transform How You Manage Your Life?</h2>
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium text-lg transition-all transform hover:scale-105"
          >
            Get Started for Free
          </a>
          <p className="mt-4 text-gray-400">
            No credit card required. Start with our free tier today.
          </p>
        </div>
      </div>
    </div>
  );
}
