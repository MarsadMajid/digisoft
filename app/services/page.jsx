"use client";

import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom-built, responsive, and high-performance websites.",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your rankings and drive organic traffic to your site.",
    },
    {
      title: "Digital Marketing",
      description:
        "Grow your business with targeted ads and social media campaigns.",
    },
    {
      title: "Graphic Design",
      description: "Modern and eye-catching visuals for your brand.",
    },
    {
      title: "AI-Powered Solutions",
      description: "Automate tasks with cutting-edge AI technology.",
    },
    {
      title: "App Development",
      description:
        "High-quality mobile and web applications for all platforms.",
    },
    {
      title: "E-Commerce Solutions",
      description: "Build and scale your online store with advanced features.",
    },
    {
      title: "Cybersecurity Consulting",
      description:
        "Protect your business from online threats and security risks.",
    },
  ];

  return (
    <>
      <main className="bg-[#121212] text-white min-h-screen py-16 px-6">
        <h1 className="text-4xl font-bold text-[#0FF0FC] text-center mb-12 neon-text">
          Our Services
        </h1>

        {/* Service Cards */}
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg neon-border hover:neon-hover"
            >
              <h2 className="text-2xl font-semibold neon-text">
                {service.title}
              </h2>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <section className="mt-16 text-center  neon-text">
          <h2 className="text-3xl font-bold text-[#0FF0FC]">
            Ready to Grow Your Business?
          </h2>
          <p className="text-gray-300 mt-2">
            Contact us today and let's build something amazing together!
          </p>
          <Link href="/contact">
            <span className="mt-6 inline-block bg-[#0FF0FC] text-black px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer hover:bg-[#00D1D1] transition duration-300 shadow-lg hover:shadow-[#0FF0FC] hover:shadow-md">
              Get in Touch
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
