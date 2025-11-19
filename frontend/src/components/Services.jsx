import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      icon: "💻",
      title: "Full-Stack Development",
      description:
        "Building complete web apps using React and Django with modern architecture.",
      features: ["React", "Django", "PostgreSQL"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎨",
      title: "Frontend Development",
      description:
        "Creating responsive, interactive UIs with React, JavaScript, and CSS frameworks.",
      features: ["HTML", "CSS", "Bootstrap", "Material UI", "React", "Tailwind", "Framer Motion", "JavaScript"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description:
        "Developing robust APIs and server-side apps with Django REST Framework.",
      features: ["Python", "Django", "REST API", "Flask", "FastAPI", "Django REST Framework"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "🔌",
      title: "API Development",
      description:
        "Designing RESTful APIs with authentication, security, and documentation.",
      features: ["REST", "JWT", "Swagger"],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "🗄️",
      title: "Database Design",
      description:
        "Structuring databases with PostgreSQL and SQLite for scalability.",
      features: ["PostgreSQL", "SQLite", "Redis"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: "🔐",
      title: "Authentication Systems",
      description:
        "Implementing secure user authentication with JWT and role-based control.",
      features: ["JWT", "OAuth", "Security"],
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 via-purple-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            My <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            I offer professional web development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-orange-400 transition-all h-full shadow-lg hover:shadow-2xl hover:shadow-orange-200">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-50 text-orange-600 text-sm rounded-full border border-orange-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
       
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-orange-300 transition-all"
          >
            Let's Work Together! 🚀
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;