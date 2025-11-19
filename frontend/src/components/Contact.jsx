import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); // "", "sending", "sent", "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z\s]{2,50}$/;
    if (!name.trim()) return "Name is required";
    if (!regex.test(name)) return "Name should only contain letters and spaces (2-50 chars)";
    return "";
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) return "Email is required";
    if (!regex.test(email)) return "Invalid email address";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 chars";
    if (message.length > 500) return "Message cannot exceed 500 chars";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      return;
    }

    try {
      setStatus("sending");

      // Use environment variable for API URL
      const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000/api/";

      const res = await axios.post(`${apiUrl}contact/submit/`, formData);

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      console.log(res.data);
    } catch (err) {
      setStatus("error");
      if (err.response?.data) setErrors(err.response.data);
      else alert("Something went wrong. Try again.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {status === "sent" && (
              <div className="mb-4 p-3 bg-green-100 text-green-800 rounded">
                Message sent successfully! ✅
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-white text-gray-900 rounded-xl border-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } focus:border-orange-500 focus:outline-none transition-all shadow-sm`}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-6 py-4 bg-white text-gray-900 rounded-xl border-2 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } focus:border-orange-500 focus:outline-none transition-all shadow-sm`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-6 py-4 bg-white text-gray-900 rounded-xl border-2 ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  } focus:border-orange-500 focus:outline-none transition-all resize-none shadow-sm`}
                  placeholder="Tell me about your project... (min 10 characters)"
                ></textarea>
                <div className="flex justify-between items-center mt-2">
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                  <p className="text-gray-500 text-sm ml-auto">{formData.message.length}/500</p>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-orange-300 transition-all"
              >
                {status === "sending" ? "Sending..." : "Send Message 🚀"}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div className="bg-white p-8 rounded-3xl border-2 border-orange-200 shadow-lg text-center max-w-md">
              <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-400 shadow-xl">
                  <img
                    src="/images/avater.jpg"
                    alt="Senait Agumasie"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <h3 className="text-3xl font-bold text-gray-900 mb-2">Senait Agumasie</h3>
              <p className="text-orange-500 text-xl font-semibold mb-4">Full Stack Developer</p>
              <p className="text-gray-600 leading-relaxed">
                I'd love to hear about your project! Fill out the form and I'll get back to you as soon as possible.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

