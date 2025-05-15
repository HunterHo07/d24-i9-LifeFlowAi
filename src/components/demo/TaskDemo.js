"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Check, AlertCircle, File, Briefcase, Calendar, ArrowRight } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";

const TaskDemo = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [preparationVisible, setPreparationVisible] = useState(false);
  const [storedTasks, setStoredTasks] = useLocalStorage("lifeflow-tasks", null);
  
  // Load tasks from dummy data or localStorage
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (storedTasks) {
          setTasks(storedTasks);
        } else {
          // Simulate API call
          setIsLoading(true);
          
          // Fetch from our dummy data
          const response = await fetch("/api/tasks");
          const data = await response.json();
          
          // Fallback to hardcoded data if fetch fails
          const taskData = response.ok ? data.tasks : dummyTasks;
          
          setTasks(taskData);
          setStoredTasks(taskData);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error loading tasks:", error);
        setTasks(dummyTasks);
        setStoredTasks(dummyTasks);
        setIsLoading(false);
      }
    };
    
    fetchTasks();
  }, [setStoredTasks, storedTasks]);
  
  const handleTaskSelect = (task) => {
    setSelectedTask(task);
    setPreparationVisible(false);
    
    // Show preparation after a delay to simulate AI preparing
    setTimeout(() => {
      setIsLoading(true);
      
      setTimeout(() => {
        setIsLoading(false);
        setPreparationVisible(true);
      }, 1500);
    }, 500);
  };
  
  const priorityColor = (priority) => {
    switch(priority) {
      case "high":
        return "text-red-500 bg-red-500/10 border-red-500/30";
      case "medium":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
      case "low":
        return "text-green-500 bg-green-500/10 border-green-500/30";
      default:
        return "text-blue-500 bg-blue-500/10 border-blue-500/30";
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  };
  
  const dummyTasks = [
    {
      id: "task-1",
      title: "Client Presentation for XYZ Corp",
      dueDate: "2025-05-18T14:00:00",
      priority: "high",
      status: "pending",
      category: "work",
      attachments: ["presentation.pptx", "project-brief.pdf"],
      notes: "Need to highlight Q2 results and new product roadmap",
      preparation: [
        "Review last quarter's metrics",
        "Update slides with new product features",
        "Prepare talking points for Q&A session",
        "Sync with dev team for technical specifics"
      ]
    },
    {
      id: "task-2",
      title: "Team Weekly Sync",
      dueDate: "2025-05-16T10:00:00",
      priority: "medium",
      status: "pending",
      category: "work",
      attachments: ["weekly-agenda.docx", "previous-minutes.pdf"],
      notes: "Focus on sprint planning and roadblocks",
      preparation: [
        "Review previous action items",
        "Prepare sprint backlog overview",
        "Highlight key metrics and goals",
        "List any help needed from other teams"
      ]
    },
    {
      id: "task-3",
      title: "Dentist Appointment",
      dueDate: "2025-05-20T09:30:00",
      priority: "medium",
      status: "pending",
      category: "personal",
      attachments: ["insurance-card.pdf"],
      notes: "Annual checkup and cleaning",
      preparation: [
        "Bring insurance card and ID",
        "Complete health questionnaire online",
        "Arrive 15 minutes early for paperwork",
        "Ask about that sensitive tooth"
      ]
    }
  ];
  
  const getCategoryIcon = (category) => {
    switch(category) {
      case "work":
        return <Briefcase className="h-4 w-4" />;
      case "personal":
        return <Calendar className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Task Automation Demo</h2>
        <p className="text-gray-400 mt-1">
          See how LifeFlowAi proactively prepares for your upcoming tasks
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Task List */}
        <div className="md:col-span-1 bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-blue-400" />
            Upcoming Tasks
          </h3>
          
          {isLoading && !selectedTask ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <div className="space-y-3">
              {tasks.map((task) => (
                <motion.div
                  key={task.id}
                  onClick={() => handleTaskSelect(task)}
                  className={`p-3 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer ${
                    selectedTask?.id === task.id ? "bg-gray-700/50 border-blue-500/50" : ""
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{task.title}</h4>
                      <div className="flex items-center mt-1 text-sm text-gray-400">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{formatDate(task.dueDate)}</span>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs border ${priorityColor(task.priority)}`}>
                      {task.priority}
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-2 text-xs">
                    <div className={`p-1 rounded-full mr-2 ${
                      task.category === "work" ? "bg-blue-500/20" : "bg-purple-500/20"
                    }`}>
                      {getCategoryIcon(task.category)}
                    </div>
                    <span className="capitalize">{task.category}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
        
        {/* Task Details and Preparation */}
        <div className="md:col-span-2">
          {selectedTask ? (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700 h-full">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold">{selectedTask.title}</h3>
                <div className={`px-2 py-1 rounded-full text-xs border ${priorityColor(selectedTask.priority)}`}>
                  {selectedTask.priority}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-300">
                  <Clock className="h-4 w-4 mr-2 text-blue-400" />
                  <span>Due: {formatDate(selectedTask.dueDate)}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-300">
                  <div className={`p-1 rounded-full mr-2 ${
                    selectedTask.category === "work" ? "bg-blue-500/20" : "bg-purple-500/20"
                  }`}>
                    {getCategoryIcon(selectedTask.category)}
                  </div>
                  <span className="capitalize">{selectedTask.category}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Notes</h4>
                <p className="p-3 bg-gray-700/30 rounded-lg text-sm border border-gray-700">
                  {selectedTask.notes}
                </p>
              </div>
              
              {isLoading ? (
                <div className="mt-6 flex flex-col items-center justify-center py-8 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-3"></div>
                  <p className="text-blue-400">LifeFlowAi is preparing your task...</p>
                </div>
              ) : preparationVisible ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-sm font-medium text-white flex items-center">
                      <Check className="h-4 w-4 mr-2 text-green-400" />
                      Preparation Complete
                    </h4>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                      AI Generated
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Task steps */}
                    <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                      <h5 className="font-medium mb-2 text-sm text-blue-300">Action Items</h5>
                      <ul className="space-y-2">
                        {selectedTask.preparation.map((step, index) => (
                          <li key={index} className="flex items-start">
                            <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-sm text-gray-300">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Attachments */}
                    <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                      <h5 className="font-medium mb-2 text-sm text-blue-300">Attachments</h5>
                      <div className="space-y-2">
                        {selectedTask.attachments.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-gray-800/80 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer">
                            <div className="flex items-center">
                              <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2">
                                <File className="h-4 w-4" />
                              </div>
                              <span className="text-sm">{file}</span>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-500" />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* AI Assistant message */}
                    <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-900/30">
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mr-2 mt-0.5">
                          <AlertCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-sm text-white">AI Assistant</h5>
                          <p className="text-sm text-gray-300 mt-1">
                            I've prepared everything you need for {selectedTask.title.toLowerCase()}. All materials are ready, and I've added reminders to your calendar. Would you like me to share this with the relevant team members?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="mt-6 p-6 bg-gray-900/50 rounded-lg border border-gray-800 flex flex-col items-center justify-center">
                  <p className="text-gray-400 text-center">
                    Select a task to see how LifeFlowAi prepares everything you need
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 h-full flex flex-col items-center justify-center">
              <div className="p-4 rounded-full bg-blue-500/10 mb-4">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Select a Task</h3>
              <p className="text-gray-400 text-center max-w-md">
                Choose any task from the list to see how LifeFlowAi proactively prepares all the materials and information you need.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDemo;
