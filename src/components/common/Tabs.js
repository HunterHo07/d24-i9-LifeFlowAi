"use client";

import { createContext, useState, useContext } from "react";
import { motion } from "framer-motion";

// Create context for the tabs
const TabsContext = createContext({
  activeTab: "",
  setActiveTab: () => {},
});

export const Tabs = ({ children, defaultValue, onValueChange, value, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue || "");
  
  // Use controlled or uncontrolled state
  const currentValue = value !== undefined ? value : activeTab;
  
  const handleTabChange = (newValue) => {
    if (value === undefined) {
      setActiveTab(newValue);
    }
    if (onValueChange) {
      onValueChange(newValue);
    }
  };
  
  return (
    <TabsContext.Provider value={{ activeTab: currentValue, setActiveTab: handleTabChange }}>
      <div className={`w-full ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className = "" }) => {
  return (
    <div className={`flex space-x-2 p-1 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 ${className}`}>
      {children}
    </div>
  );
};

export const TabsTrigger = ({ children, value, className = "" }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;
  
  return (
    <button
      className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all ${
        isActive 
          ? "text-white" 
          : "text-gray-400 hover:text-white hover:bg-white/5"
      } ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="tab-indicator"
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-md -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </button>
  );
};

export const TabsContent = ({ children, value, className = "" }) => {
  const { activeTab } = useContext(TabsContext);
  const isActive = activeTab === value;
  
  if (!isActive) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
