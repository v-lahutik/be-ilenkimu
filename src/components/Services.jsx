import React from 'react';
import { Hammer, Car, Shield, Wrench } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    // title: "Pigiau",
    title: "Kaina",
    description: "Remontas kainuoja žymiai mažiau nei dažymas."
  },
  {
    icon: Car,
    // title: "Greičiau",
    title: "Laikas",
    description: "Tiesinimo darbai užtrunka gerokai trumpiau nei dažymas."
  },
  {
    icon: Shield,
    title: "Kokybė",
    description: "Išsaugoma orginali detalės spalva ir lakas."
  },
  {
    icon: Wrench,
    title: "Vertės Išsaugojimas",
    description: "Išlaikoma automobilio rinkos vertė, neprarandant originalumo."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Kodel pasirinkti ilenkimu lyginima?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition border border-gray-700">
              <service.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}