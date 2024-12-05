import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Kontaktai</h2>
          <p className="text-lg text-gray-400">Susisiekite gauti nemokama konsultacija</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Telefonas", content: "(555) 123-4567" },
                { icon: Mail, title: "El. paštas", content: "info@dentrepair.com" },
                {
                  icon: MapPin,
                  title: "Address",
                  content: "Rudens gatvė 8, Kluonaliai, 97193",
                },
                {
                  icon: Clock,
                  title: "Dsrbo valandos",
                  content: "I - V 8:00-18:00",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <item.icon className="w-6 h-6 text-blue-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-400">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14514.718116505033!2d21.259643575633756!3d55.88250181476811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e526a9228a8edf%3A0xfa184d98410425cd!2sRudens%20gatv%C4%97%208%2C%20Kluonaliai%2C%2097193%20Kretingos%20r.%20sav.!5e0!3m2!1sen!2slt!4v1733393673520!5m2!1sen!2slt"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
         
          </div>
        </div>
      </div>
    </section>
  );
}
