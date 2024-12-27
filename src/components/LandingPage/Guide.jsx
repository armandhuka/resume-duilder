import React from 'react';

const Guide = () => {
  return (
    <section className="bg-[#ddd] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">User  Guide</h2>
        <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
          Welcome to the Resume Maker User Guide! Here, you'll find helpful tips and instructions to create a standout resume that captures the attention of employers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Guide Step 1 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Step 1: Choose a Template</h3>
            <p className="text-lg text-[#f4f4f4]">
              Start by selecting a professional template that suits your style. Our templates are designed to highlight your skills and experiences effectively.
            </p>
          </div>

          {/* Guide Step 2 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Step 2: Fill in Your Information</h3>
            <p className="text-lg text-[#f4f4f4]">
              Enter your personal details, work experience, education, and skills. Be sure to tailor your information to the job you are applying for.
            </p>
          </div>

          {/* Guide Step 3 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Step 3: Customize Your Resume</h3>
            <p className="text-lg text-[#f4f4f4]">
              Use our editing tools to customize your resume. Adjust fonts, colors, and layouts to make your resume unique and visually appealing.
            </p>
          </div>

          {/* Guide Step 4 */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">Step 4: Preview and Download</h3>
            <p className="text-lg text-[#f4f4f4]">
              Once you are satisfied with your resume, preview it to ensure everything looks perfect. Then, download it in your preferred format (PDF, Word, etc.).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;