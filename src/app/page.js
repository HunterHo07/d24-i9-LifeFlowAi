import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import ProblemSolution from "@/components/home/ProblemSolution";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import CallToAction from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <ProblemSolution />
      <HowItWorks />
      <Testimonials />
      <div id="pricing">
        <Pricing />
      </div>
      <CallToAction />
    </div>
  );
}
