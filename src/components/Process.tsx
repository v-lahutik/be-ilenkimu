import React from 'react';
import { Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Apžiūra",
    description: "Įvertinama įlenkimo žala ir nustatomas remonto laikas."
  },
  {
    icon: Wrench,
    title: "Taisymas",
    description: "Atliekamas ilenkimo tiesinimas su specialiais irankiais"
  },
  {
    icon: CheckCircle,
    title: "Baigimas",
    description: "Automobilis kruopščiai patikrinamas, jog remontas atliktas kokybiškai."
  }
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Remonto Eiga</h2>
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-700 transform translate-x-1/2" />
              )}
              <div className="relative bg-gray-800 p-6 rounded-xl shadow-lg z-10 border border-gray-700">
                <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <step.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}