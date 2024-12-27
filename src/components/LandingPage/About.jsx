import React from 'react';

const About = () => {
  return (
    <section className="bg-[#ddd] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-[#f4f4f4]">
              At <span className="font-semibold text-blue-600">Resume Maker</span>, we believe that every job seeker deserves a chance to shine. Our platform is designed to help you create a professional resume that stands out in today’s competitive job market.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">User -Friendly Interface</h3>
            <p className="text-lg text-[#f4f4f4]">
              With our intuitive interface, you can easily customize your resume to reflect your unique skills and experiences. Whether you’re a recent graduate or an experienced professional, we provide the tools and resources you need to succeed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-left text-lg text-[#f4f4f4]">
              <li className="mb-2">✅ User-friendly interface for quick resume creation.</li>
              <li className="mb-2">✅ Professionally designed templates to enhance your profile.</li>
              <li className="mb-2">✅ Expert tips and resources for effective job applications.</li>
              <li className="mb-2">✅ Accessible from any device, anytime, anywhere.</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Join Us Today!</h3>
            <p className="text-lg text-[#f4f4f4]">
              Our mission is to simplify the resume-building process, allowing you to focus on what truly matters—landing your dream job. Join our community of successful users who have transformed their job applications with Resume Maker.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;