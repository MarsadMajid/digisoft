import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
<main className="bg-[#121212] text-white min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold text-[#0FF0FC] mb-4 animate-glow">
          Elevate Your Digital Presence 
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl animate-fadeIn">
          We offer top-tier Web Development, SEO, and Digital Marketing services to help your business thrive.
        </p>
        <Link href="/services">
          <span className="mt-6 inline-block bg-[#0FF0FC] text-black px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer hover:bg-[#00D1D1] transition duration-300 shadow-lg hover:shadow-[#0FF0FC] hover:shadow-md">
            Explore Services
          </span>
        </Link>
      </main>
  );
}
