"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/common/Tabs";
import TaskDemo from "./TaskDemo";
import CalendarDemo from "./CalendarDemo";
import JobApplicationDemo from "./JobApplicationDemo";
import EventTrackingDemo from "./EventTrackingDemo";

const DemoInterface = () => {
  const [activeTab, setActiveTab] = useState("tasks");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[800px] bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
      {loading ? (
        <div className="flex items-center justify-center min-h-[800px]">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              {/* Brain loading animation */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 opacity-70"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              />
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-300 to-indigo-400 opacity-90"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              />
            </div>
            <p className="mt-4 text-blue-300 font-medium">Loading LifeFlowAi...</p>
          </div>
        </div>
      ) : (
        <div className="p-6">
          {/* Demo Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">LifeFlowAi Demo</h2>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-green-400 text-sm">Live Demo</span>
            </div>
          </div>

          {/* Tabs Navigation */}
          <Tabs defaultValue="tasks" className="w-full" onValueChange={setActiveTab} value={activeTab}>
            <TabsList>
              <TabsTrigger value="tasks">Task Automation</TabsTrigger>
              <TabsTrigger value="calendar">Calendar Integration</TabsTrigger>
              <TabsTrigger value="job">Job Applications</TabsTrigger>
              <TabsTrigger value="events">Event Tracking</TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <div className="mt-6 bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <TabsContent value="tasks">
                <TaskDemo />
              </TabsContent>
              
              <TabsContent value="calendar">
                <CalendarDemo />
              </TabsContent>
              
              <TabsContent value="job">
                <JobApplicationDemo />
              </TabsContent>
              
              <TabsContent value="events">
                <EventTrackingDemo />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default DemoInterface;
