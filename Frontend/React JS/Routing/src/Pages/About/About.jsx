export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          About Us
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to{" "}
          <span className="font-semibold text-blue-500">Our Company</span>. We
          are passionate about building modern, scalable, and user-friendly
          digital experiences.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our mission is to empower developers and businesses with high-quality
          software products that solve real-world problems. From web development
          to cloud solutions, we strive to deliver excellence in everything we
          do.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          We believe in innovation, collaboration, and continuous learning.
          Thank you for visiting us!
        </p>
      </div>
    </div>
  );
}
