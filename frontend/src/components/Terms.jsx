import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Terms() {
  return (
    <section id="terms" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
                By accessing and using CodeWithSun's services, you accept and agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Provided</h2>
              <p className="mb-4">
                CodeWithSun provides web development services including but not limited to:
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Project Agreement</h2>
              <p>
                All projects require a written agreement outlining the scope, timeline, deliverables, 
                and payment terms. Changes to the project scope may result in additional fees and 
                extended timelines.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>A deposit may be required before work begins</li>
                <li>Payment schedules will be outlined in the project agreement</li>
                <li>Final payment is due upon project completion</li>
                <li>Late payments may incur additional fees</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p>
                Upon full payment, the client receives ownership of the deliverables created specifically 
                for their project. CodeWithSun retains the right to use project screenshots and descriptions 
                in our portfolio unless otherwise agreed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Client Responsibilities</h2>
              <p className="mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Providing necessary content, materials, and information in a timely manner</li>
                <li>Responding to requests and approvals within reasonable timeframes</li>
                <li>Ensuring all provided content is legally compliant and authorized</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Warranties and Limitations</h2>
              <p>
                While we strive for excellence, CodeWithSun makes no warranties regarding uninterrupted 
                or error-free operation of delivered products. We provide reasonable support to address 
                any issues that arise post-delivery within the agreed support period.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p>
                Either party may terminate the agreement with written notice. In case of termination, 
                the client is responsible for payment of work completed up to the termination date.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Confidentiality</h2>
              <p>
                We respect the confidentiality of all client information and will not disclose sensitive 
                information to third parties without explicit permission.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p>
                For questions regarding these Terms of Service, please contact us at:
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

export default Terms;