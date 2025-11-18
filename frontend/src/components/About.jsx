import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <section id="about" className="min-h-screen bg-[#2D1B69] text-white px-6 py-40">
            <div className="max-w-7xl mx-auto">
                
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Content on Left */}
                    <div className="lg:w-2/3">
                        {/* Header */}
                        <motion.div 
                            className="mb-12"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl font-bold mb-6">
                                About <span className="text-orange-400">Me</span>
                            </h1>
                            <motion.div 
                                className="w-32 h-1.5 bg-orange-400 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: 128 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            ></motion.div>
                        </motion.div>

                        {/* Attractive Paragraph */}
                        <motion.div 
                            className="bg-white/5 backdrop-blur-lg rounded-3xl p-10 border border-orange-400/20 shadow-2xl"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            whileHover={{ scale: 1.01 }}
                        >
                            <p className="text-lg text-gray-100 leading-relaxed mb-6">
                                I'm a <span className="text-orange-400 font-semibold">Full-Stack Developer</span> with IT experience, passionate about creating innovative web solutions. I hold a <span className="font-semibold">Master's degree</span> and <span className="font-semibold">Bachelor's degree in Computer Science</span> with very great distinction. I previously worked in insurance systems and as a Computer Science Lecturer in Ethiopia. Today, I build modern web applications using <span className="text-orange-400 font-semibold">React</span> and <span className="text-orange-400 font-semibold">Django</span>, focusing on clean code, performance optimization, and user-friendly interfaces. My background in teaching and IT systems gives me a unique perspective on creating solutions that are both technically sound and easy to understand.
                            </p>

                            {/* Skills in 3 Columns */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <h3 className="text-orange-400 font-bold mb-2">Frontend</h3>
                                    <p className="text-gray-200 text-sm">React, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap, Framer Motion, Vite, Responsive Design</p>
                                </div>
                                <div>
                                    <h3 className="text-orange-400 font-bold mb-2">Backend</h3>
                                    <p className="text-gray-200 text-sm">Python, Django, Django REST Framework, RESTful APIs, JWT Authentication, OAuth</p>
                                    <h3 className="text-orange-400 font-bold mb-2 mt-4">Database</h3>
                                    <p className="text-gray-200 text-sm">PostgreSQL, MySQL, SQLite, SQL</p>
                                </div>
                                <div>
                                    <h3 className="text-orange-400 font-bold mb-2">Tools & Deployment</h3>
                                    <p className="text-gray-200 text-sm">Git, GitHub, VS Code, PyCharm, Postman, Figma, Microsoft Teams, Agile/Scrum, Testing (Jest, Pytest), CI/CD, Heroku, Vercel, Netlify, Docker</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image on Right */}
                    <motion.div
                        className="lg:w-1/3"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img 
                            src="/images/abo.jpg" 
                            alt="modern female developer avatar" 
                            className="w-full h-[600px] object-cover rounded-3xl shadow-2xl shadow-orange-500/30 border-4 border-orange-400/50 hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default About;