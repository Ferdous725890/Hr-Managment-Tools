"use client";

import NavbarPage from "@/components/Navbar";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Typewriter from "typewriter-effect";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fake login state
  const [user, setUser] = useState(null);

  const handleLogin = () => setUser({ name: "Alam" });
  const handleLogout = () => setUser(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow relative">
        <h1 className="text-2xl font-bold text-purple-700">
          {user?.name || "Mahabub Alam"}
        </h1>

        {/* Desktop Nav */}

        {/* <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-purple-700">
            Home
          </a>
          <a href="#" className="hover:text-purple-700">
            About
          </a>
          <a href="#" className="hover:text-purple-700">
            Services
          </a>
          <a href="#" className="hover:text-purple-700">
            Process
          </a>
          <a href="#" className="hover:text-purple-700">
            Portfolio
          </a>
          <Link href="/blog" className="hover:text-purple-700">
            Blog
          </Link>
        </nav> */}

        {/* Right side (Login / Logout button) */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="font-medium text-gray-700">
                Hi, <span className="text-purple-600">{user.name}</span>
              </span>
              <button
                onClick={handleLogout}
                className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <button className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              Login
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-purple-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-6 md:hidden">
            <Link href="/" className="hover:text-purple-700">
              Home
            </Link>
            <Link href="/about" className="hover:text-purple-700">
              About
            </Link>
            <Link href="/services" className="hover:text-purple-700">
              Services
            </Link>
            <Link href="/process" className="hover:text-purple-700">
              Process
            </Link>
            <Link href="/portfolio" className="hover:text-purple-700">
              Portfolio
            </Link>
            <Link href="/blog" className="hover:text-purple-700">
              Blog
            </Link>

            {/* Login / Logout for mobile */}
            {user ? (
              <>
                <span className="font-medium text-gray-700">
                  Hi, <span className="text-purple-600">{user?.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={handleLogin}
                className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Login
              </button>
            )}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 lg:px-16 py-16 container mx-auto">
        {/* Left Side */}
        <div className="w-full max-w-lg text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
            <Typewriter
              options={{
                strings: ["Hello, this is Mahabub Alam"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
            Programmer{" "}
            <span className="font-semibold text-purple-600">
              UI/UX Designer
            </span>{" "}
            and <span className="font-semibold text-purple-600">Developer</span>{" "}
            based in London, England. I strive to build immersive and beautiful
            web applications through carefully crafted code and user-centric
            design.
          </p>

          <button className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105">
            Say Hello!
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <Image
            src="/image.png"
            alt="Mahabub Alam"
            width={400}
            height={500}
            className="rounded-2xl shadow-2xl object-cover w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>
      <NavbarPage />
    </div>
  );
}
