"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, Users, ChevronLeft, ChevronRight, AlertCircle, Check } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";

const CalendarDemo = () => {
  const [selectedDate, setSelectedDate] = useState(new Date("2025-05-15"));
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [preparationVisible, setPreparationVisible] = useState(false);
  const [storedEvents, setStoredEvents] = useLocalStorage("lifeflow-events", null);
  
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  // Get events for the selected date
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        if (storedEvents) {
          const filtered = filterEventsForDate(storedEvents, selectedDate);
          setEvents(filtered);
        } else {
          // Simulate API call
          setIsLoading(true);
          
          // In a real app, this would fetch from an API
          setTimeout(() => {
            const filtered = filterEventsForDate(dummyEvents, selectedDate);
            setEvents(filtered);
            setStoredEvents(dummyEvents);
            setIsLoading(false);
          }, 1000);
        }
      } catch (error) {
        console.error("Error loading events:", error);
        const filtered = filterEventsForDate(dummyEvents, selectedDate);
        setEvents(filtered);
        setStoredEvents(dummyEvents);
        setIsLoading(false);
      }
    };
    
    fetchEvents();
  }, [selectedDate, setStoredEvents, storedEvents]);
  
  const filterEventsForDate = (events, date) => {
    return events.filter(event => {
      const eventDate = new Date(event.startDate);
      return eventDate.getDate() === date.getDate() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear();
    });
  };
  
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
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
  
  const changeMonth = (increment) => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + increment);
    setSelectedDate(newDate);
  };
  
  const selectDate = (date) => {
    setSelectedDate(date);
    setSelectedEvent(null);
    setPreparationVisible(false);
  };
  
  const getCalendarDays = () => {
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    
    // Create array for the days in the month
    const days = [];
    
    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: null, hasEvents: false });
    }
    
    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
      const hasEvents = dummyEvents.some(event => {
        const eventDate = new Date(event.startDate);
        return eventDate.getDate() === i &&
               eventDate.getMonth() === selectedDate.getMonth() &&
               eventDate.getFullYear() === selectedDate.getFullYear();
      });
      
      days.push({
        day: i,
        date: currentDate,
        hasEvents,
        isToday: i === selectedDate.getDate()
      });
    }
    
    return days;
  };
  
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };
  
  // Dummy events data
  const dummyEvents = [
    {
      id: "event-1",
      title: "Quarterly Board Meeting",
      startDate: "2025-05-15T09:00:00",
      endDate: "2025-05-15T11:30:00",
      location: "Conference Room A, HQ Building",
      attendees: ["CEO", "CFO", "CTO", "Board Members"],
      category: "work",
      recurring: false,
      reminders: [
        {
          type: "prepare",
          timeBeforeInMinutes: 1440,
          message: "Prepare quarterly report and presentation slides"
        },
        {
          type: "reminder",
          timeBeforeInMinutes: 60,
          message: "Quarterly board meeting in 1 hour"
        }
      ],
      materials: [
        "Q2 Financial Report",
        "Product Roadmap Slides",
        "Strategic Initiatives Document"
      ]
    },
    {
      id: "event-2",
      title: "Weekly Team Standup",
      startDate: "2025-05-15T14:00:00",
      endDate: "2025-05-15T14:30:00",
      location: "Zoom Meeting Room",
      attendees: ["Development Team", "Product Manager", "Design Lead"],
      category: "work",
      recurring: true,
      recurrencePattern: "WEEKLY",
      reminders: [
        {
          type: "prepare",
          timeBeforeInMinutes: 60,
          message: "Prepare weekly progress report and blockers list"
        },
        {
          type: "reminder",
          timeBeforeInMinutes: 10,
          message: "Team standup starts in 10 minutes"
        }
      ],
      materials: [
        "Sprint Board Access",
        "Progress Report"
      ]
    },
    {
      id: "event-3",
      title: "Dentist Appointment",
      startDate: "2025-05-16T11:00:00",
      endDate: "2025-05-16T12:00:00",
      location: "Dr. Smith's Office, Medical Plaza",
      category: "personal",
      recurring: false,
      reminders: [
        {
          type: "prepare",
          timeBeforeInMinutes: 1440,
          message: "Fast for 12 hours before blood test"
        },
        {
          type: "document",
          timeBeforeInMinutes: 720,
          message: "Bring insurance card and ID"
        },
        {
          type: "travel",
          timeBeforeInMinutes: 45,
          message: "Leave for doctor's appointment in 15 minutes"
        }
      ],
      materials: [
        "Insurance Card",
        "Medical History",
        "List of Current Medications",
        "Recent Test Results"
      ]
    },
    {
      id: "event-4",
      title: "Project Alpha Kickoff Meeting",
      startDate: "2025-05-17T13:00:00",
      endDate: "2025-05-17T15:00:00",
      location: "Conference Room B, HQ Building",
      attendees: ["Project Team", "Stakeholders", "Client Representatives"],
      category: "work",
      recurring: false,
      reminders: [
        {
          type: "prepare",
          timeBeforeInMinutes: 1440,
          message: "Review project brief and prepare kickoff presentation"
        },
        {
          type: "reminder",
          timeBeforeInMinutes: 120,
          message: "Project kickoff meeting in 2 hours, finalize slides"
        }
      ],
      materials: [
        "Project Brief",
        "Timeline Document",
        "Budget Overview",
        "Resource Allocation Plan"
      ]
    }
  ];

  return (
    <div className="text-white">
      <div className="mb-6">
        <h2 className="text-xl font-bold">Calendar Integration Demo</h2>
        <p className="text-gray-400 mt-1">
          See how LifeFlowAi prepares you for meetings, appointments, and events
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="md:col-span-1 bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5 text-blue-400" />
              Calendar
            </h3>
            <div className="flex items-center">
              <button 
                onClick={() => changeMonth(-1)}
                className="p-1 rounded-full hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="mx-2 text-sm">
                {`${months[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}
              </span>
              <button 
                onClick={() => changeMonth(1)}
                className="p-1 rounded-full hover:bg-gray-700 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {days.map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-400 py-1">
                {day}
              </div>
            ))}
            
            {getCalendarDays().map((item, i) => (
              <div 
                key={i}
                onClick={() => item.day && selectDate(item.date)}
                className={`relative h-9 text-center rounded flex items-center justify-center cursor-pointer ${
                  item.day 
                    ? item.isToday
                      ? "bg-blue-500/30 text-white" 
                      : "hover:bg-gray-700 text-white"
                    : "text-gray-700 cursor-default"
                }`}
              >
                {item.day}
                {item.hasEvents && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Events for selected date */}
          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-300 mb-3">
              Events for {selectedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </h4>
            
            {isLoading && events.length === 0 ? (
              <div className="flex justify-center py-6">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            ) : events.length > 0 ? (
              <div className="space-y-2">
                {events.map((event) => (
                  <motion.div
                    key={event.id}
                    onClick={() => handleEventSelect(event)}
                    className={`p-3 rounded-lg border hover:bg-gray-700/50 transition-colors cursor-pointer ${
                      selectedEvent?.id === event.id 
                        ? "bg-gray-700/50 border-blue-500/50" 
                        : "border-gray-700"
                    } ${
                      event.category === "work" ? "border-l-4 border-l-blue-500" : "border-l-4 border-l-purple-500"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <h4 className="font-medium">{event.title}</h4>
                    <div className="flex items-center mt-1 text-sm text-gray-400">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{`${formatTime(event.startDate)} - ${formatTime(event.endDate)}`}</span>
                    </div>
                    
                    <div className="flex items-center mt-2 text-xs">
                      <div className={`p-1 rounded-full mr-2 ${
                        event.category === "work" ? "bg-blue-500/20" : "bg-purple-500/20"
                      }`}>
                        <MapPin className="h-3 w-3 text-gray-300" />
                      </div>
                      <span className="truncate text-gray-300">{event.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-4 bg-gray-700/30 rounded-lg text-center">
                <p className="text-gray-400 text-sm">No events scheduled for this date</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Event Details and Preparation */}
        <div className="md:col-span-2">
          {selectedEvent ? (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-4 border border-gray-700 h-full">
              <div className="mb-4">
                <h3 className="text-lg font-bold">{selectedEvent.title}</h3>
                <div className="flex items-center mt-1 text-gray-300 text-sm">
                  <Clock className="h-4 w-4 mr-2 text-blue-400" />
                  <span>{`${formatTime(selectedEvent.startDate)} - ${formatTime(selectedEvent.endDate)}`}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-sm text-gray-300">
                  <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                  <span>{selectedEvent.location}</span>
                </div>
                
                <div className="flex items-center text-sm text-gray-300">
                  <Users className="h-4 w-4 mr-2 text-blue-400" />
                  <span>{selectedEvent.attendees.join(", ")}</span>
                </div>
              </div>
              
              {isLoading ? (
                <div className="mt-6 flex flex-col items-center justify-center py-8 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-3"></div>
                  <p className="text-blue-400">LifeFlowAi is preparing for your event...</p>
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
                      Event Preparation
                    </h4>
                    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                      4 Hours Before
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    {/* Preparation reminders */}
                    <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                      <h5 className="font-medium mb-2 text-sm text-blue-300">Smart Reminders</h5>
                      <ul className="space-y-2">
                        {selectedEvent.reminders.map((reminder, index) => (
                          <li key={index} className="flex items-start">
                            <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">
                              <Check className="h-3 w-3" />
                            </div>
                            <div>
                              <span className="text-sm text-gray-300">{reminder.message}</span>
                              <div className="mt-1 text-xs text-gray-500">
                                {Math.floor(reminder.timeBeforeInMinutes / 60) > 0 
                                  ? `${Math.floor(reminder.timeBeforeInMinutes / 60)} hours before` 
                                  : `${reminder.timeBeforeInMinutes} minutes before`}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Required materials */}
                    <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                      <h5 className="font-medium mb-2 text-sm text-blue-300">Materials</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedEvent.materials.map((material, index) => (
                          <div key={index} className="flex items-center p-2 bg-gray-800/80 rounded-lg">
                            <div className="p-1 rounded-full bg-green-500/20 text-green-400 mr-2">
                              <Check className="h-3 w-3" />
                            </div>
                            <span className="text-sm text-gray-300">{material}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Travel info if location is not virtual */}
                    {!selectedEvent.location.toLowerCase().includes("zoom") && (
                      <div className="p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h5 className="font-medium mb-2 text-sm text-blue-300">Travel Information</h5>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">
                              <MapPin className="h-3 w-3" />
                            </div>
                            <div>
                              <span className="text-sm text-gray-300">20 minutes drive time (current traffic)</span>
                              <div className="mt-1 text-xs text-green-400">Leave by 8:40 AM to arrive on time</div>
                            </div>
                          </div>
                          
                          <div className="flex items-start">
                            <div className="p-1 rounded-full bg-blue-500/20 text-blue-400 mr-2 mt-0.5">
                              <AlertCircle className="h-3 w-3" />
                            </div>
                            <span className="text-sm text-gray-300">Parking available in Garage B</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* AI Assistant message */}
                    <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-900/30">
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-indigo-500/20 text-indigo-400 mr-2 mt-0.5">
                          <AlertCircle className="h-4 w-4" />
                        </div>
                        <div>
                          <h5 className="font-medium text-sm text-white">AI Assistant</h5>
                          <p className="text-sm text-gray-300 mt-1">
                            {selectedEvent.category === "work" 
                              ? "I've prepared all necessary materials for this meeting. Based on your calendar, you have 30 minutes free before this meeting to review the materials. Would you like me to block this time for preparation?"
                              : "I've added your medical information and insurance details to your preparation. Traffic to the medical plaza is typically heavy at this time - I've suggested an earlier departure time to ensure you arrive with time to complete any paperwork."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="mt-6 p-6 bg-gray-900/50 rounded-lg border border-gray-800 flex flex-col items-center justify-center">
                  <p className="text-gray-400 text-center">
                    Click "Prepare" to see how LifeFlowAi gets you ready for this event
                  </p>
                  <button
                    onClick={() => {
                      setIsLoading(true);
                      setTimeout(() => {
                        setIsLoading(false);
                        setPreparationVisible(true);
                      }, 1500);
                    }}
                    className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    Prepare
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700 h-full flex flex-col items-center justify-center">
              <div className="p-4 rounded-full bg-blue-500/10 mb-4">
                <CalendarIcon className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Select an Event</h3>
              <p className="text-gray-400 text-center max-w-md">
                Choose any event from the calendar to see how LifeFlowAi prepares you with all the information, materials, and reminders you need.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalendarDemo;
