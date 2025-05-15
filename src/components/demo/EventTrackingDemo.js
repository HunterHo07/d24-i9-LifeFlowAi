"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bell, Calendar, Clock, AlertCircle, Check, CreditCard, DollarSign, School, HeartPulse, Users } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";

const EventTrackingDemo = () => {
  const [trackedEvents, setTrackedEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [storedEvents, setStoredEvents] = useLocalStorage("lifeflow-tracked-events", null);
  const [categoryFilter, setCategoryFilter] = useState("all");
  
  // Load tracked events from localStorage or dummy data
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        if (storedEvents) {
          setTrackedEvents(storedEvents);
        } else {
          // Simulate API call
          setIsLoading(true);
          setTimeout(() => {
            setTrackedEvents(dummyEvents);
            setStoredEvents(dummyEvents);
            setIsLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.error("Error loading events:", error);
        setTrackedEvents(dummyEvents);
        setStoredEvents(dummyEvents);
        setIsLoading(false);
      }
    };
    
    fetchEvents();
  }, [setStoredEvents, storedEvents]);
  
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    
    // Simulate preparing insights
    if (event.category === "bills") {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1200);
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  };
  
  const filteredEvents = categoryFilter === "all" 
    ? trackedEvents 
    : trackedEvents.filter(event => event.category === categoryFilter);

  // Category icons and colors
  const categoryConfig = {
    bills: { 
      icon: CreditCard, 
      color: "from-red-500 to-orange-600",
      bgColor: "bg-red-500/10"
    },
    family: { 
      icon: Users, 
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10"
    },
    education: { 
      icon: School, 
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-500/10"
    },
    health: { 
      icon: HeartPulse, 
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10"
    }
  };
  
  // Helper for category styling
  const getCategoryStyle = (category) => {
    return categoryConfig[category] || { 
      icon: Calendar, 
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-500/10"
    };
  };
  
  // Dummy events data
  const dummyEvents = [
    {
      id: "ev-1",
      title: "Monthly Bills Payment",
      category: "bills",
      dueDate: "2025-05-25",
      recurring: "monthly",
      important: true,
      details: "Review and pay all monthly bills",
      items: [
        {
          name: "Electricity Bill",
          amount: 142.65,
          dueDate: "2025-05-30",
          status: "upcoming",
          paymentMethod: "Credit Card"
        },
        {
          name: "Internet Service",
          amount: 89.99,
          dueDate: "2025-05-31",
          status: "upcoming",
          paymentMethod: "Bank Transfer"
        },
        {
          name: "Mortgage Payment",
          amount: 1850.00,
          dueDate: "2025-06-01",
          status: "upcoming",
          paymentMethod: "Automatic Payment"
        },
        {
          name: "Car Insurance",
          amount: 125.50,
          dueDate: "2025-05-29",
          status: "upcoming",
          paymentMethod: "Credit Card"
        }
      ],
      notes: "Set aside funds by the 25th of each month"
    },
    {
      id: "ev-2",
      title: "Sarah's Soccer Championship",
      category: "family",
      dueDate: "2025-05-17",
      recurring: null,
      important: true,
      details: "Final game of the season at Westfield Park",
      items: [
        {
          name: "Prepare Team Snacks",
          dueDate: "2025-05-17",
          status: "pending",
          details: "Orange slices and water bottles for 12 kids"
        },
        {
          name: "Confirm Carpool with Johnsons",
          dueDate: "2025-05-16",
          status: "pending",
          details: "Pick up their kids at 9:15 AM"
        },
        {
          name: "Charge Camera",
          dueDate: "2025-05-16",
          status: "pending",
          details: "Ensure camera and backup batteries are charged"
        }
      ],
      notes: "Game starts at 10:00 AM, arrive by 9:30 AM for warm-up"
    },
    {
      id: "ev-3",
      title: "Parent-Teacher Conference",
      category: "education",
      dueDate: "2025-05-22",
      recurring: null,
      important: true,
      details: "Meeting with Ms. Johnson to discuss semester progress",
      items: [
        {
          name: "Review Progress Report",
          dueDate: "2025-05-21",
          status: "pending",
          details: "Go through recent test scores and assignments"
        },
        {
          name: "Prepare Questions",
          dueDate: "2025-05-21",
          status: "pending",
          details: "List concerns about math progress and reading level"
        }
      ],
      location: "Westside Elementary School, Room 103",
      notes: "Meeting scheduled for 4:30 PM, leave work early"
    },
    {
      id: "ev-4",
      title: "Annual Health Checkups",
      category: "health",
      dueDate: "2025-05-30",
      recurring: "yearly",
      important: true,
      details: "Schedule annual checkups for the whole family",
      items: [
        {
          name: "Dr. Smith - Personal Checkup",
          dueDate: "2025-05-20",
          status: "scheduled",
          details: "9:30 AM, bring insurance card and ID"
        },
        {
          name: "Dr. Johnson - Kids Checkup",
          dueDate: "2025-06-05",
          status: "pending",
          details: "Need to schedule for after school"
        },
        {
          name: "Dr. Williams - Dental Checkup",
          dueDate: "2025-06-10",
          status: "pending",
          details: "Need to schedule for all family members"
        }
      ],
      notes: "All checkups should be completed by end of June"
    }
  ];

  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Event & Personal Life Tracking</h2>
        <p className="text-gray-400 mt-1">
          See how LifeFlowAi helps you track and prepare for important personal events
        </p>
      </div>
      
      {/* Category Filter Tabs */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <button 
            onClick={() => setCategoryFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              categoryFilter === "all" 
                ? "bg-white/10 text-white" 
                : "text-gray-400 hover:text-white"
            }`}
          >
            All
          </button>
          
          {Object.keys(categoryConfig).map(category => {
            const { icon: Icon, bgColor } = getCategoryStyle(category);
            return (
              <button 
                key={category}
                onClick={() => setCategoryFilter(category)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center ${
                  categoryFilter === category 
                    ? `${bgColor} text-white` 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 mr-1.5" />
                <span className="capitalize">{category}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Events List */}
        <div className="md:col-span-1 bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700">
          <h3 className="text-lg font-medium flex items-center mb-4">
            <Bell className="mr-2 h-5 w-5 text-blue-400" />
            Tracked Events
          </h3>
          
          {isLoading && filteredEvents.length === 0 ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredEvents.length > 0 ? (
            <div className="space-y-3">
              {filteredEvents.map((event) => {
                const { icon: Icon, color, bgColor } = getCategoryStyle(event.category);
                
                return (
                  <motion.div
                    key={event.id}
                    onClick={() => handleEventSelect(event)}
                    className={`p-3 rounded-lg border border-gray-700 hover:bg-gray-700/50 transition-colors cursor-pointer ${
                      selectedEvent?.id === event.id ? "bg-gray-700/50 border-blue-500/50" : ""
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{event.title}</h4>
                        <div className="flex items-center mt-1 text-sm text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{formatDate(event.dueDate)}</span>
                        </div>
                      </div>
                      <div className={`p-1.5 rounded-full ${bgColor}`}>
                        <Icon className={`h-4 w-4 text-gradient bg-gradient-to-r ${color}`} />
                      </div>
                    </div>
                    
                    {event.recurring && (
                      <div className="mt-2 flex items-center text-xs text-blue-400">
                        <Bell className="h-3 w-3 mr-1" />
                        <span className="capitalize">{event.recurring} recurring</span>
                      </div>
                    )}
                    
                    {event.important && (
                      <div className="mt-1 text-xs px-2 py-0.5 bg-red-500/10 text-red-400 rounded-full border border-red-500/20 inline-block">
                        Important
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="p-4 bg-gray-700/30 rounded-lg text-center">
              <p className="text-gray-400 text-sm">No events in this category</p>
            </div>
          )}
        </div>
        
        {/* Event Details */}
        <div className="md:col-span-2">
          {selectedEvent ? (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700 h-full">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center h-full py-12">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500 mb-4"></div>
                  <p className="text-blue-400">LifeFlowAi is analyzing your bills...</p>
                </div>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold flex items-center">
                        {selectedEvent.title}
                        {selectedEvent.important && (
                          <span className="ml-2 text-xs px-2 py-0.5 bg-red-500/10 text-red-400 rounded-full border border-red-500/20">
                            Important
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center mt-1 text-gray-300 text-sm">
                        <Clock className="h-4 w-4 mr-2 text-blue-400" />
                        <span>{formatDate(selectedEvent.dueDate)}</span>
                        {selectedEvent.recurring && (
                          <span className="ml-2 text-blue-400 flex items-center">
                            <Bell className="h-3 w-3 mr-1" />
                            <span className="capitalize">{selectedEvent.recurring}</span>
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {(() => {
                      const { icon: Icon, color, bgColor } = getCategoryStyle(selectedEvent.category);
                      return (
                        <div className={`p-2 rounded-lg ${bgColor} flex items-center`}>
                          <Icon className={`h-5 w-5 text-gradient bg-gradient-to-r ${color} mr-1.5`} />
                          <span className="text-sm font-medium capitalize">{selectedEvent.category}</span>
                        </div>
                      );
                    })()}
                  </div>
                  
                  <div className="mb-6">
                    <p className="p-3 bg-gray-700/30 rounded-lg text-sm border border-gray-700 text-gray-300">
                      {selectedEvent.details}
                    </p>
                  </div>
                  
                  {/* Bills List for Bills category */}
                  {selectedEvent.category === "bills" && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Bills to Pay</h4>
                      <div className="space-y-2">
                        {selectedEvent.items.map((bill, index) => (
                          <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-700 flex justify-between items-center">
                            <div>
                              <h5 className="font-medium text-white">{bill.name}</h5>
                              <div className="text-sm text-gray-400 mt-1">Due: {formatDate(bill.dueDate)}</div>
                              <div className="text-xs text-gray-500 mt-0.5">Payment: {bill.paymentMethod}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-medium text-white">${bill.amount.toFixed(2)}</div>
                              <div className="text-xs px-2 py-0.5 bg-yellow-500/10 text-yellow-400 rounded-full mt-1">
                                {bill.status}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Bills insights */}
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-900/30">
                          <h5 className="text-sm font-medium text-white flex items-center">
                            <DollarSign className="h-4 w-4 mr-1.5 text-blue-400" />
                            Monthly Summary
                          </h5>
                          <div className="mt-2 space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Total Bills:</span>
                              <span className="text-white">$2,208.14</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">vs. Last Month:</span>
                              <span className="text-green-400">-$32.45 (1.5%)</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Budget Status:</span>
                              <span className="text-green-400">Under budget</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-900/30">
                          <h5 className="text-sm font-medium text-white flex items-center">
                            <AlertCircle className="h-4 w-4 mr-1.5 text-blue-400" />
                            Recommendations
                          </h5>
                          <ul className="mt-2 space-y-1 text-sm text-gray-300">
                            <li className="flex items-start">
                              <Check className="h-3 w-3 text-green-400 mr-1.5 mt-0.5" />
                              <span>Schedule all payments in advance</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-3 w-3 text-green-400 mr-1.5 mt-0.5" />
                              <span>Internet bill increased 5% vs last month</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Task list for other categories */}
                  {selectedEvent.category !== "bills" && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Preparation Items</h4>
                      <div className="space-y-2">
                        {selectedEvent.items.map((item, index) => (
                          <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-700">
                            <div className="flex justify-between">
                              <h5 className="font-medium text-white">{item.name}</h5>
                              <div className="text-xs px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full">
                                {item.status}
                              </div>
                            </div>
                            <div className="text-sm text-gray-400 mt-1">Due: {formatDate(item.dueDate)}</div>
                            <p className="text-sm text-gray-300 mt-2">{item.details}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Notes & AI Assistant message */}
                  <div className="space-y-4">
                    {selectedEvent.notes && (
                      <div className="p-3 bg-gray-700/30 rounded-lg border border-gray-700">
                        <h5 className="text-sm font-medium text-gray-400 mb-1">Notes</h5>
                        <p className="text-sm text-gray-300">{selectedEvent.notes}</p>
                      </div>
                    )}
                    
                    <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-900/30">
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mr-2 mt-0.5">
                          <AlertCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-sm text-white">AI Assistant</h5>
                          <p className="text-sm text-gray-300 mt-1">
                            {selectedEvent.category === "bills" 
                              ? "I've scheduled all your bill payments to avoid late fees. Your electricity bill is higher than usual this month - would you like me to analyze your usage patterns?"
                              : selectedEvent.category === "family"
                              ? "I've added Sarah's soccer championship to your calendar and set reminders for preparations. Would you like me to create a shopping list for the team snacks?"
                              : selectedEvent.category === "education"
                              ? "I've prepared a list of your child's recent test scores and assignments for discussion. I've also scheduled a reminder for you to leave work early for the meeting."
                              : "I've organized all your family's health checkups. Would you like me to book appointments for the ones that haven't been scheduled yet?"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 h-full flex flex-col items-center justify-center">
              <div className="p-4 rounded-full bg-blue-500/10 mb-4">
                <Bell className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Personal Event Tracking</h3>
              <p className="text-gray-400 text-center max-w-md">
                Select an event to see how LifeFlowAi helps you stay on top of bills, family events, education, and health appointments in your personal life.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventTrackingDemo;
