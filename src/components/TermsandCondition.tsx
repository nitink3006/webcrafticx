import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Terms and Conditions
        </h1>
        <p className="text-center text-gray-600 mb-8">
          📅 Effective Date: March 15, 2025
        </p>

        {/* Section: Introduction */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            1. Introduction
          </h2>
          <p className="text-gray-700 mb-4 leading-7">
            WebCrafticX (referred to as "the Company," "we," "our," or "us"
            throughout this document) specializes in providing cutting-edge web
            solutions, including web development, UI/UX design, e-commerce
            solutions, SEO optimization, app development, digital marketing, and
            graphic design services.
          </p>
          <p className="text-gray-700 leading-7">
            📩 Contact Us:
            <a
              href="mailto:webcraftix3@gmail.com"
              className="text-blue-600 ml-1 hover:underline"
            >
              webcraftix3@gmail.com
            </a>
          </p>
        </div>

        {/* Section: Services Offered */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            2. Services Offered
          </h2>
          <ul className="list-none space-y-3 text-gray-700 mb-4">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <span>
                <strong>Web Development:</strong> Custom website design and
                development.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <span>
                <strong>UI/UX Design:</strong> Crafting user-friendly interfaces
                and seamless experiences.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <span>
                <strong>E-commerce Solutions:</strong> Developing online stores,
                payment gateway integration, and inventory management systems.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <span>
                <strong>SEO Optimization:</strong> Enhancing website rankings
                for better visibility.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <span>
                <strong>App Development:</strong> Building mobile and web
                applications tailored to your needs.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <span>
                <strong>Digital Marketing:</strong> Implementing social media
                marketing, PPC, content marketing, and more.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✔</span>
              <span>
                <strong>Graphic Designing:</strong> Delivering logos, branding,
                and creative UI/UX designs.
              </span>
            </li>
          </ul>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-blue-500 mr-2">📌</span>
            <span>
              All services are governed by individual project agreements.
            </span>
          </p>
        </div>

        {/* Section: Client Responsibilities */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            3. Client Responsibilities
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li className="leading-7">
              Provide accurate and complete project details.
            </li>
            <li className="leading-7">
              Ensure they hold rights to any content shared with us.
            </li>
            <li className="leading-7">
              Respond promptly to communications and approvals to prevent
              project delays.
            </li>
          </ul>
        </div>

        {/* Section: Payment Terms */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            4. Payment Terms
          </h2>
          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">💰</span>
              <span>
                <strong>Advance Payment:</strong> A non-refundable 30% of the
                total project cost is required before work commences.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">💰</span>
              <span>
                <strong>Final Payment:</strong> The remaining 70% must be
                cleared within 15 days of project handover.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">💰</span>
              <span>
                <strong>Late Payments:</strong> Overdue payments may incur
                additional fees or service suspension.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">💰</span>
              <span>
                <strong>Payment Methods:</strong> Acceptable payment modes
                include Bank Transfer and UPI (transaction fees are borne by the
                client).
              </span>
            </li>
          </ul>
        </div>

        {/* Section: Revisions & Modifications */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            5. Revisions & Modifications
          </h2>
          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">✏</span>
              <span>Minor revisions within the agreed scope are included.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">✏</span>
              <span>
                Additional revisions beyond scope will be billed separately.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">✏</span>
              <span>
                Major modifications requested post-completion will be subject to
                extra charges.
              </span>
            </li>
          </ul>
        </div>

        {/* Section: Cancellations & Refunds */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            6. Cancellations & Refunds
          </h2>
          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span>Advance payments are non-refundable.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span>
                If a project is canceled after significant progress,
                compensation will be determined based on completed work.
              </span>
            </li>
          </ul>
        </div>

        {/* Section: Refund Policy */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            7. Refund Policy
          </h2>
          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">🔄</span>
              <span>
                <strong>Advance Payment Refund Window:</strong> Clients may
                request a full refund within 7 days of payment.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">🚫</span>
              <span>
                <strong>No Refund After 7 Days:</strong> Beyond this period, the
                advance becomes non-refundable.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-gray-500 mr-2">⚖</span>
              <span>
                <strong>Refund After Work Has Started:</strong> Any refund
                requested post-commencement will be adjusted against services
                already rendered.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-500 mr-2">💡</span>
              <span>
                <strong>Company-Initiated Refunds:</strong> If an issue arises
                from WebCrafticX's side that prevents project completion, the
                full amount will be refunded. However, any third-party services
                or materials purchased for the project will be deducted from the
                refund amount.
              </span>
            </li>
          </ul>
        </div>

        {/* Section: Intellectual Property */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            8. Intellectual Property
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li className="leading-7">
              Clients retain ownership of their provided content.
            </li>
            <li className="leading-7">
              WebCrafticX reserves the right to feature completed projects in
              its portfolio unless explicitly stated otherwise.
            </li>
            <li className="leading-7">
              Proprietary tools and software remain the intellectual property of
              WebCrafticX unless explicitly transferred.
            </li>
          </ul>
        </div>

        {/* Section: Confidentiality */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            9. Confidentiality
          </h2>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-blue-500 mr-2">🔒</span>
            <span>
              Both parties agree to maintain strict confidentiality regarding
              all project-related information. NDAs can be signed upon request.
            </span>
          </p>
        </div>

        {/* Section: Third-Party Services */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            10. Third-Party Services
          </h2>
          <p className="text-gray-700 leading-7 flex items-start">
            <span className="text-yellow-500 mr-2">⚠</span>
            <span>
              We may utilize third-party platforms (e.g., hosting providers,
              APIs, marketing tools). WebCrafticX holds no liability for
              disruptions or failures caused by such services.
            </span>
          </p>
        </div>

        {/* Section: Limitation of Liability */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            11. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-4 leading-7 flex items-start">
            <span className="text-gray-500 mr-2">⚖</span>
            <span>WebCrafticX shall not be liable for:</span>
          </p>
          <ul className="list-disc pl-8 text-gray-700 space-y-2">
            <li className="leading-7">
              Any indirect damages, including data loss or revenue loss.
            </li>
            <li className="leading-7">
              Guarantees of specific outcomes (e.g., search engine rankings,
              sales conversions).
            </li>
            <li className="leading-7">
              The maintenance of client digital assets (clients are advised to
              keep their own backups).
            </li>
          </ul>
        </div>

        {/* Section: Termination of Services */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            12. Termination of Services
          </h2>
          <p className="text-gray-700 mb-4 leading-7">
            WebCrafticX reserves the right to terminate services under the
            following conditions:
          </p>
          <ul className="list-none space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span>Violation of these Terms & Conditions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span>Non-payment of invoices within the agreed timeframe.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">❌</span>
              <span>
                Any form of abusive or unethical behavior from the client.
              </span>
            </li>
          </ul>
        </div>

        {/* Section: Governing Law */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            13. Governing Law
          </h2>
          <p className="text-gray-700 leading-7">
            These Terms are governed by the laws of India. Any disputes will be
            resolved via arbitration or legal proceedings in a court of law.
          </p>
        </div>

        {/* Section: Updates to These Terms */}
        <div className="border-b border-gray-200 pb-6 mb-6">
          <h2 className="text-2xl font-semibold text-black mb-4">
            14. Updates to These Terms
          </h2>
          <p className="text-gray-700 leading-7">
            WebCrafticX may update these Terms periodically. Clients will be
            notified of any major amendments.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">
            📞 Contact Information
          </h2>
          <p className="text-gray-700 mb-4 leading-7">
            For inquiries, reach out to us:
          </p>
          <div className="text-gray-700 leading-7">
            <p className="mb-2">
              <span className="text-blue-500 mr-2">📧</span>
              <span>Email: </span>
              <a
                href="mailto:webcraftix3@gmail.com"
                className="text-blue-600 hover:underline"
              >
                webcraftix3@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <span className="text-blue-500 mr-2">📱</span>
              <span>Phone:</span>
            </p>
            <ul className="list-none pl-8 mb-6">
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
            Thank you for choosing WebCrafticX – where innovation meets
            excellence! 🚀
          </p>
        </footer>
      </div>
    </div>
  );
};

export default TermsAndConditions;
