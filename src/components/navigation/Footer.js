"use client";

import Link from "next/link";
import Image from "next/image";
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Animated SVG Wave Separator */}
      <div className="w-full overflow-hidden leading-0 transform rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 text-gray-900 bg-white"
          fill="currentColor"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/logo.svg"
                alt="LifeFlowAi Logo"
                width={160}
                height={40}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 mb-4 text-sm">
              LifeFlowAi is your personal proactive AI assistant, helping you manage tasks and automate preparation for both your professional and personal life.
            </p>
            <div className="flex space-x-4 mt-auto">
              <a href="https://twitter.com/lifeflowai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="https://github.com/lifeflowai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/company/lifeflowai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:contact@lifeflowai.com" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <MailIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Home</Link>
              </li>
              <li>
                <Link href="/demo" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Demo</Link>
              </li>
              <li>
                <Link href="/why-us" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Why Us</Link>
              </li>
              <li>
                <Link href="/showcase" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Features</Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Roadmap</Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/demo#task-automation" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Task Automation</Link>
              </li>
              <li>
                <Link href="/demo#calendar" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Calendar Integration</Link>
              </li>
              <li>
                <Link href="/demo#job-assistance" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Job Application Assistance</Link>
              </li>
              <li>
                <Link href="/demo#event-tracking" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Event Tracking</Link>
              </li>
              <li>
                <Link href="/demo#preparation" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">Meeting Preparation</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for the latest updates and features.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
              <button
                type="button"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} LifeFlowAi. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-400 text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
