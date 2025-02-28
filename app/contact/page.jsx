"use client"

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <main className="bg-[#121212] text-white min-h-screen py-16 px-6">
        <h1 className="text-4xl font-bold text-[#0FF0FC] text-center mb-8 neon-text">
          Contact Us
        </h1>

        <div className="max-w-2xl mx-auto bg-[#1F1F1F] p-8 rounded-lg shadow-lg border neon-border">
          {submitted ? (
            <p className="text-green-400 text-center text-lg">Message Sent Successfully! ✅</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 bg-[#222] text-white rounded border border-[#0FF0FC] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 bg-[#222] text-white rounded border border-[#0FF0FC] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 bg-[#222] text-white rounded border border-[#0FF0FC] focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0FF0FC] text-black p-3 rounded-lg font-semibold cursor-pointer hover:bg-[#00D1D1] transition duration-300 shadow-lg hover:shadow-[#0FF0FC] hover:shadow-md"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12">
          <p className="text-gray-300">
            📧 Email: <a href="mailto:info@youragency.com" className="text-[#0FF0FC]">info@youragency.com</a>
          </p>
          <p className="text-gray-300">
            📞 Phone: <a href="tel:+1234567890" className="text-[#0FF0FC]">+1 (234) 567-890</a>
          </p>
        </div>
      </main>
    </>
  );
}
