export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-16">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          We build modern, user-friendly web experiences that help businesses
          grow. Explore our site to learn more about what we do and how we can
          help you succeed.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            About Us
          </a>
          <a
            href="/contact"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
