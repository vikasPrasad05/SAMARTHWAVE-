// "use client";

// import { motion } from "framer-motion";
// import { Card } from "@/components/ui/card";

// const currentClients = [
//   "SPIRACLE SERVICES",
//   "SANTES CREATION",
//   "KARAN AUTOMOBILES",
//   "APEX ADVERTISING",
//   "RASANA PUNJAB BAR & REST",
//   "MANISHA ENTERPRISES",
//   "TATA PROJECTS",
// ];

// const upcomingClients = [
//   "PODAR INT. SCHOOL",
//   "BANK OF MAHARASHTRA",
//   "HUNGAMA",
//   "EMKAY GLOBAL",
//   "MUNDRA PORT",
//   "PERCEPT ENTERTAINMENT",
//   "KONKAN RAILWAY",
// ];

// export default function Clients() {
//   return (
//     <section id="clients" className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Our Clients</h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] mx-auto"></div>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold mb-6 text-center">Current Clients</h3>
//             <div className="grid grid-cols-1 gap-4">
//               {currentClients.map((client, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Card className="p-4 text-center hover:shadow-lg transition-shadow">
//                     <p className="font-semibold text-gray-700">{client}</p>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-bold mb-6 text-center">Upcoming Projects</h3>
//             <div className="grid grid-cols-1 gap-4">
//               {upcomingClients.map((client, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <Card className="p-4 text-center hover:shadow-lg transition-shadow">
//                     <p className="font-semibold text-gray-700">{client}</p>
//                   </Card>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const currentClients = [
  { name: "SPIRACLE SERVICES", logo: "/img1.jpeg" },
  { name: "SANTES CREATION", logo: "/img2.jpg" },
  { name: "KARAN AUTOMOBILES", logo: "/logos/karan.png" },
  { name: "APEX ADVERTISING", logo: "/logos/apex.png" },
  { name: "RASANA PUNJAB BAR & REST", logo: "/logos/rasana.png" },
  { name: "MANISHA ENTERPRISES", logo: "/logos/manisha.png" },
  { name: "TATA PROJECTS", logo: "/logos/tata.png" },
];

const upcomingClients = [
  { name: "PODAR INT. SCHOOL", logo: "/logos/podar.png" },
  { name: "BANK OF MAHARASHTRA", logo: "/logos/bom.png" },
  { name: "HUNGAMA", logo: "/logos/hungama.png" },
  { name: "EMKAY GLOBAL", logo: "/logos/emkay.png" },
  { name: "MUNDRA PORT", logo: "/logos/mundra.png" },
  { name: "PERCEPT ENTERTAINMENT", logo: "/logos/percept.png" },
  { name: "KONKAN RAILWAY", logo: "/logos/konkan.png" },
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
          {/* === Current Clients === */}
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
                  <Card className="p-4 flex items-center justify-start gap-4 hover:shadow-lg transition-shadow">
                    {/* Logo on left */}
                    <div className="flex-shrink-0 left-1">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    {/* Text on right */}
                    <p className="font-semibold text-gray-700 text-left flex-1">
                      {client.name}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* === Upcoming Clients === */}
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
                  <Card className="p-4 flex items-center justify-start gap-4 hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <p className="font-semibold text-gray-700 text-left flex-1">
                      {client.name}
                    </p>
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
