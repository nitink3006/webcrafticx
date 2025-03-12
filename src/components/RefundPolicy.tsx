import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-black mb-4">
          Refund Policy - WebCrafticX
        </h1>
        <p className="text-center text-gray-600 mb-8">
          📅 Effective Date: March 15, 2025
        </p>

        {/* Section: Advance Payment Refund Window */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            1. Advance Payment Refund Window
          </h2>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-blue-500 mr-2">🔄</span>
            <span>Clients may request a full refund of the advance payment within 7 days of making the payment.</span>
          </p>
        </div>

        {/* Section: No Refund After 7 Days */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            2. No Refund After 7 Days
          </h2>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-red-500 mr-2">🚫</span>
            <span>After the 7-day buffer period, the advance payment becomes non-refundable.</span>
          </p>
        </div>

        {/* Section: Refund After Work Has Started */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            3. Refund After Work Has Started
          </h2>
          <p className="text-gray-700 mb-4 leading-7 flex items-start">
            <span className="text-gray-500 mr-2">⚖</span>
            <span>If a client requests a refund after work has begun, WebCrafticX will deduct the cost of services already performed, and the remaining amount (if any) will be refunded.</span>
          </p>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-yellow-500 mr-2">💡</span>
            <span><strong>Company-Initiated Refunds:</strong> If an issue arises from WebCrafticX's side that prevents project completion, the full amount will be refunded. However, any third-party services or materials purchased for the project will be deducted from the refund amount.</span>
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">
            📞 Contact Information
          </h2>
          <p className="text-gray-700 mb-4 leading-7">
            For any refund-related inquiries, reach out to us:
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
            Thank you for choosing WebCrafticX – where your satisfaction is our priority! 🚀
          </p>
        </footer>
      </div>
    </div>
  );
};

export default RefundPolicy;