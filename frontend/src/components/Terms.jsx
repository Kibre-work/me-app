import React from "react";
import { Link } from "react-router-dom";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Back to Home Button */}
      <div className="max-w-4xl mx-auto px-8 pt-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold mb-8"
        >
          ← Back to Home
        </Link>
      </div>

      <section className="py-12 pb-20">
        <div className="max-w-4xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Terms of <span className="text-orange-500">Service</span>
            </h1>
            <p className="text-gray-500 mb-8">Last updated: November 2024</p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using this portfolio website, you accept and agree to be bound by these 
                  Terms of Service. If you do not agree to these terms, please do not use this website.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
                <p className="mb-4">
                  I provide web development services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full-stack web application development</li>
                  <li>Frontend and backend development</li>
                  <li>API development and integration</li>
                  <li>Database design and optimization</li>
                  <li>Website maintenance and support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use License</h2>
                <p>
                  Permission is granted to temporarily view the materials on this website for personal, 
                  non-commercial use only. This is the grant of a license, not a transfer of title.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property 
                  of Senait Agumasie and is protected by copyright laws.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclaimer</h2>
                <p>
                  The materials on this website are provided on an 'as is' basis. I make no warranties, 
                  expressed or implied, and hereby disclaim all other warranties.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitations</h2>
                <p>
                  In no event shall I be liable for any damages arising out of the use or inability 
                  to use the materials on this website.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                <p>
                  For questions regarding these Terms of Service, please contact me at:
                </p>
                <p className="mt-4 font-semibold text-orange-500">
                  Email: senaitagumasie1@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Terms;