"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const currentClients = [
  "SPIRACLE SERVICES",
  "SANTES CREATION",
  "KARAN AUTOMOBILES",
  "APEX ADVERTISING",
  "RASANA PUNJAB BAR & REST",
  "MANISHA ENTERPRISES",
  "TATA PROJECTS",
];

const upcomingClients = [
  "PODAR INT. SCHOOL",
  "BANK OF MAHARASHTRA",
  "HUNGAMA",
  "EMKAY GLOBAL",
  "MUNDRA PORT",
  "PERCEPT ENTERTAINMENT",
  "KONKAN RAILWAY",
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Clients</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Current Clients</h3>
            <div className="grid grid-cols-1 gap-4">
              {currentClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                    <p className="font-semibold text-gray-700">{client}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Upcoming Projects</h3>
            <div className="grid grid-cols-1 gap-4">
              {upcomingClients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                    <p className="font-semibold text-gray-700">{client}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
