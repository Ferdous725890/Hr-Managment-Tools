// pages/showcase.tsx
"use client";
import CodeBlock from "@/components/CodeBlock";

const navbarCode = `
<header className="flex justify-between items-center px-6 py-4 bg-white shadow relative">
  <h1 className="text-2xl font-bold text-purple-700">
    {user?.name || "Mahabub Alam"}
  </h1>

  <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
    <a href="#" className="hover:text-purple-900">Home</a>
    <a href="#" className="hover:text-purple-900">About</a>
    <a href="#" className="hover:text-purple-700">Services</a>
    <a href="#" className="hover:text-purple-700">Process</a>
    <a href="#" className="hover:text-purple-700">Portfolio</a>
    <Link href="/blog" className="hover:text-purple-700">Blog</Link>
  </nav>
</header>
`;

export default function NavbarPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">🧑‍💻 Navbar Code Example</h1>

      {/* Optional: Screenshot of the Navbar */}
      <img
        src="/navbar-preview.png"
        alt="Navbar Preview"
        className="rounded-xl shadow-md mb-6"
      />

      {/* Code block */}
      <CodeBlock code={navbarCode} />
    </div>
  );
}
