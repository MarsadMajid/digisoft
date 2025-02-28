"use client";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully functional online store with secure payments.",
      image: "/projects/ecommerce.jpg",
    },
    {
      title: "AI Chatbot",
      description: "An intelligent chatbot built using OpenAI's GPT models.",
      image: "/projects/chatbot.jpg",
    },
    {
      title: "Business Website",
      description: "A sleek and modern website for a corporate client.",
      image: "/projects/business.jpg",
    },
    {
      title: "Mobile App",
      description: "A cross-platform mobile app with React Native.",
      image: "/projects/mobile-app.jpg",
    },
  ];

  return (
    <>
      <main className="bg-[#121212] text-white min-h-screen py-16 px-6 neon-text">
        <h1 className="text-4xl font-bold text-[#0FF0FC] text-center mb-12 neon-text">
          Our Portfolio
        </h1>

        {/* Portfolio Grid */}
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] p-6 rounded-lg shadow-lg neon-border hover:neon-hover"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-md w-full h-40 object-cover"
              />
              <h2 className="text-2xl font-semibold neon-text mt-4">
                {project.title}
              </h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
