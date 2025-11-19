import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
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
              Privacy <span className="text-orange-500">Policy</span>
            </h1>
            <p className="text-gray-500 mb-8">Last updated: November 2024</p>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="mb-4">
                  When you visit my portfolio or use the contact form, I may collect the following information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email)</li>
                  <li>Message content and correspondence</li>
                  <li>Website usage data and analytics</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">
                  I use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To respond to your inquiries and messages</li>
                  <li>To improve my portfolio website</li>
                  <li>To analyze website performance</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection</h2>
                <p>
                  I implement appropriate security measures to protect your personal information from 
                  unauthorized access, alteration, disclosure, or destruction. Your data is stored securely.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
                <p>
                  I may use third-party services for analytics, hosting (Render), and email delivery (Resend). 
                  These services have their own privacy policies.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact me at:
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

export default Privacy;