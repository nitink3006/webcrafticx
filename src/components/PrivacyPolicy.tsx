import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Privacy Policy - WebCrafticX
        </h1>
        <p className="text-center text-gray-600 mb-8">
          📅 Effective Date: March 15, 2025
        </p>

        {/* Section: Information We Collect */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4 leading-7 flex items-start">
            <span className="text-blue-500 mr-2">📝</span>
            <span>We collect client details such as name, email, phone number, and project-related information to facilitate our services.</span>
          </p>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-blue-500 mr-2">🔒</span>
            <span><strong>Payment Information:</strong> We do not store payment details. All transactions are processed securely via third-party payment gateways.</span>
          </p>
        </div>

        {/* Section: How We Use Information */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            2. How We Use Information
          </h2>
          <div className="text-gray-700 mb-4 leading-7 flex items-start">
            <span className="text-yellow-500 mr-2">💡</span>
            <div>
              <p className="mb-2">Client information is used exclusively for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Project execution and service delivery.</li>
                <li>Communication regarding ongoing projects.</li>
                <li>Enhancing and improving our services.</li>
                <li>Internal analytics and performance tracking.</li>
              </ul>
              <p>We do <strong>not</strong> sell or share client data with third parties for marketing purposes.</p>
            </div>
          </div>
        </div>

        {/* Section: Data Security */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            3. Data Security
          </h2>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-green-500 mr-2">🔐</span>
            <span>We implement industry-standard security measures to protect client data from unauthorized access, misuse, or disclosure. However, while we strive for absolute security, no digital platform can guarantee <strong>100% protection</strong>.</span>
          </p>
        </div>

        {/* Section: Third-Party Services */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-blue-500 mr-2">🌐</span>
            <span>WebCrafticX may utilize third-party tools such as hosting services, analytics platforms, or marketing integrations. While we choose reputable service providers, we are <strong>not responsible</strong> for their individual privacy policies or data handling practices.</span>
          </p>
        </div>

        {/* Section: Client Rights */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            5. Client Rights
          </h2>
          <div className="text-gray-700 mb-4 leading-7 flex items-start">
            <span className="text-blue-500 mr-2">📜</span>
            <div>
              <p className="mb-2">Clients have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Request <strong>access, modification, or deletion</strong> of their personal data.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Raise concerns regarding their data privacy.</li>
              </ul>
              <p>📩 To exercise these rights, contact us at <strong>webcrafticx3@gmail.com</strong>.</p>
            </div>
          </div>
        </div>

        {/* Section: Policy Updates */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            6. Policy Updates
          </h2>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-blue-500 mr-2">🔄</span>
            <span>We may update this Privacy Policy periodically to reflect service changes or legal requirements. Clients will be notified of <strong>significant updates</strong> via email or our website.</span>
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">
            📞 Contact Information
          </h2>
          <p className="text-gray-700 mb-4 leading-7">
            For any privacy-related inquiries, feel free to reach out:
          </p>
          <div className="text-gray-700 leading-7">
            <p className="mb-2">
              <span className="text-blue-500 mr-2">📧</span>
              <span>Email: </span>
              <a href="mailto:webcraftix3@gmail.com" className="text-blue-600 hover:underline">
                webcraftix3@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <span className="text-blue-500 mr-2">📱</span>
              <span>Phone:</span>
            </p>
            <ul className="list-none pl-6 mb-6">
              <li className="mb-1">
                <span className="text-blue-500 mr-2">📞</span>
                <span>+91 8789088935 (Sarthak)</span>
              </li>
              <li>
                <span className="text-blue-500 mr-2">📞</span>
                <span>+91 74886 68170 (Nitin)</span>
              </li>
            </ul>
          </div>
        </div>

        <footer className="mt-12 text-center">
          <p className="text-gray-700">
            Thank you for trusting WebCrafticX – Your privacy is our priority! 🔐
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;