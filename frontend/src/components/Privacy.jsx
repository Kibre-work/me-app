import React from "react";
import { motion } from "framer-motion";

function Privacy() {
  return (
    <section id="privacy" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
                When you visit CodeWithSun or use our services, we may collect the following information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Project requirements and specifications</li>
                <li>Communication records and correspondence</li>
                <li>Website usage data and analytics</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and improve our web development services</li>
                <li>To communicate with you about projects and inquiries</li>
                <li>To send updates, newsletters, and promotional materials (with your consent)</li>
                <li>To analyze and improve our website performance</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Protection</h2>
              <p>
                We implement appropriate security measures to protect your personal information from 
                unauthorized access, alteration, disclosure, or destruction. Your data is stored securely 
                and is only accessible to authorized personnel.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
              <p>
                We may use third-party services for analytics, hosting, and communication purposes. 
                These services have their own privacy policies, and we encourage you to review them.
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
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize 
                content. You can control cookie preferences through your browser settings.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4 font-semibold text-orange-500">
                Email: senait@codewithsun.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Privacy;