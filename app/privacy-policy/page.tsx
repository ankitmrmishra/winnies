import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Users,
  FileText,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="bg-emerald-800 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            Privacy Notice
          </h1>
          <p className="text-emerald-100 text-lg">
            Last Updated: December 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed mb-4">
            Winnies Holiday Resort &amp; Spa Kasauli, along with its affiliated
            entities (hereafter collectively, &quot;Winnies Kasauli&quot;,
            &quot;we&quot;, or &quot;us&quot;), values you as our esteemed guest
            and recognizes that privacy is a fundamental right. We are committed
            to transparency, handling your Personal Data with the utmost
            respect, sensitivity, and integrity across all global interactions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Notice describes the privacy practices of Winnies
            Kasauli for Personal Data that we collect in connection with:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 ml-4">
            <li>
              The websites from which you are accessing this Notice, including{" "}
              <a
                href="https://www.winnies.in"
                className="text-emerald-700 hover:underline"
              >
                www.winnies.in
              </a>{" "}
              (collectively, the &quot;Websites&quot;).
            </li>
            <li>
              Your visit or stay as a guest at our resort and spa, and your use
              of our various hospitality services including the Spa &amp;
              Wellness Centre, Restaurants, Boutiques, or other offline
              interactions.
            </li>
            <li>
              Our social media pages through which you are accessing this
              Privacy Notice (collectively, our &quot;Social Media Pages&quot;).
            </li>
            <li>
              The email messages and messages via platforms like WhatsApp that
              we send you that link to this Privacy Notice and through your
              other online communications with us, including your pre-arrival
              preferences.
            </li>
            <li>
              Your online inquiries and purchases of resort-related items or
              services.
            </li>
            <li>Your marketing preferences.</li>
            <li>
              Your use of software applications (including automated tools and
              chat functionalities) we provide for use.
            </li>
          </ul>
        </section>

        {/* Types of Personal Data */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-emerald-700" />
            <h2 className="text-3xl font-serif text-emerald-800">
              Types of Personal Data We Collect
            </h2>
          </div>

          <p className="text-gray-700 mb-6">
            &quot;Personal Data&quot; are data that identify you as an
            individual or relate to an identifiable individual. We collect the
            following Personal Data:
          </p>

          <div className="space-y-6">
            <DataCategory
              title="Identifying and Contact Information"
              items={[
                "Salutation, full name, preferred pronouns (shared voluntarily)",
                "Telephone number (098056 33007)",
                "Date of birth",
                "Email address (sales@winniesholidayresort.com)",
                "Postal address",
                "Social media account ID and profile photo",
              ]}
            />

            <DataCategory
              title="Financial and Transaction Information"
              items={[
                "Credit and debit card data (processed securely by third-party payment gateways)",
                "Billing address and transaction details",
              ]}
            />

            <DataCategory
              title="Official Identification"
              items={[
                "Passport, visa, or other official identification (e.g., Aadhaar/PAN) details, as required by Indian law for check-in",
              ]}
            />

            <DataCategory
              title="Travel Profile Information"
              items={[
                "Arrival and departure time",
                "Nationality",
                "Accommodation and travel preferences",
                "Language preference",
                "Travel agent/company",
              ]}
            />

            <DataCategory
              title="Resort Stays or Interactions"
              items={[
                "Records of purchases of goods and services during visits",
                "Restaurant visits, preferred room types",
                "Spa services, concierge requests",
              ]}
            />

            <DataCategory
              title="Technical Data & Tracking"
              items={[
                "IP address and approximate location",
                "Computer type, screen resolution, operating system",
                "Device manufacturer and model",
                "Internet browser type and version",
                "Pages viewed and digital interaction data",
              ]}
            />
          </div>

          <div className="mt-8 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
            <h3 className="font-semibold text-emerald-900 mb-3">
              Additional Information (with consent):
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Family Members and Companions:</strong> Names and ages
                of children for comfortable accommodations
              </li>
              <li>
                <strong>Important Dates:</strong> Birthdays, anniversaries,
                special occasions
              </li>
              <li>
                <strong>Guest Preferences &amp; Sensitive Data:</strong> Dietary
                restrictions, allergies, mobility requirements, health
                information for Spa services
              </li>
              <li>
                <strong>Images, Video and Audio:</strong> CCTV footage in public
                areas for safety and security
              </li>
              <li>
                <strong>Survey Responses:</strong> Guest satisfaction,
                complaints, or emergencies
              </li>
            </ul>
          </div>
        </section>

        {/* Methods of Collection */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Eye className="w-8 h-8 text-emerald-700" />
            <h2 className="text-3xl font-serif text-emerald-800">
              Methods of Personal Data Collection
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-emerald-700 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Source</th>
                  <th className="px-6 py-4 text-left font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                <CollectionRow
                  source="Online Services"
                  details="Personal Data collected through browsing, reservations, purchases via Websites, social media engagement, and newsletter sign-ups."
                />
                <CollectionRow
                  source="Visits to Properties"
                  details="Data gathered when guests use on-property services through the relevant forms, including restaurants, concierge, and spa & wellness centres."
                />
                <CollectionRow
                  source="Customer Support"
                  details="Personal Data obtained through phone reservations (098056 33007), email (sales@winniesholidayresort.com), WhatsApp, and customer service interactions."
                />
                <CollectionRow
                  source="Winnies Kasauli Affiliates"
                  details="Personal Data disclosed internally within Winnies Kasauli Group for personalization, communication, and business operations."
                />
                <CollectionRow
                  source="Winnies Kasauli Partners"
                  details="Information from independent partners providing services, such as travel booking platforms and marketing firms."
                />
                <CollectionRow
                  source="Other Sources"
                  details="Data from publicly available records, joint marketing partners, or individuals sending gifts."
                />
                <CollectionRow
                  source="Internet-Connected Devices"
                  details="Data gathered when guests connect devices to resort/hotel internet."
                />
              </tbody>
            </table>
          </div>
        </section>

        {/* How We Use Personal Data */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-8 h-8 text-emerald-700" />
            <h2 className="text-3xl font-serif text-emerald-800">
              How We Use Personal Data
            </h2>
          </div>

          <div className="space-y-4">
            <UsageItem
              title="Processing bookings and reservations"
              description="Handling bookings, payments, reservations, and inquiries."
              legal="Contractual obligation, legitimate interests, legal compliance"
            />
            <UsageItem
              title="On-Site Recognition"
              description="Facilitating guest check-in, personalised services, payment processing, and handling requests."
              legal="Contractual obligation, legitimate interests, consent, legal compliance"
            />
            <UsageItem
              title="Marketing and communications"
              description="Sending newsletters, surveys, and marketing emails; managing customer databases and social sharing."
              legal="Consent, legitimate interests"
            />
            <UsageItem
              title="Responding to public authorities"
              description="Providing information to law enforcement and authorities for security and legal requirements."
              legal="Legal compliance"
            />
            <UsageItem
              title="On-site security and incident documentation"
              description="Ensuring safety, documenting incidents, and protecting individuals (via CCTV)."
              legal="Contractual obligation, legal compliance"
            />
            <UsageItem
              title="Providing personalised services"
              description="Analysing preferences, honouring health-related and dietary restrictions in the context of our services."
              legal="Legitimate interests, explicit consent"
            />
            <UsageItem
              title="Business operations"
              description="Fraud prevention, audits, data analysis, product and service improvements, investigation of complaints."
              legal="Contractual obligation, legal compliance, legitimate interests"
            />
          </div>
        </section>

        {/* Sharing and Disclosure */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-emerald-700" />
            <h2 className="text-3xl font-serif text-emerald-800">
              Sharing and Disclosure of Personal Data
            </h2>
          </div>

          <p className="text-gray-700 mb-4">We disclose Personal Data to:</p>

          <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
            <li>
              <strong>Winnies Kasauli affiliates</strong> for purposes described
              in this Privacy Notice, such as service provision,
              personalisation, and communication.
            </li>
            <li>
              <strong>Owners of Winnies Kasauli branded properties</strong> (if
              applicable) to comply with their legal obligations.
            </li>
            <li>
              <strong>On-Property service providers</strong> offering goods,
              services, and experiences that enhance your stay (e.g., Spa
              partners, taxi services).
            </li>
            <li>
              <strong>Digital service providers</strong> who support our
              operation, such as website hosting, payment processing, data
              analysis, customer service, and email delivery.
            </li>
            <li>
              <strong>Advertising partners</strong> (e.g., Google Ads, Meta,
              Trivago) to facilitate marketing communications and personalized
              advertisements.
            </li>
          </ul>

          <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
            <h3 className="font-semibold text-amber-900 mb-2">
              Other Uses and Disclosures
            </h3>
            <p className="text-gray-700">
              We may use and disclose your Personal Data when necessary or
              appropriate, including to comply with applicable law, cooperate
              with law enforcement, protect our terms and conditions, or in
              connection with business transactions such as mergers or sales.
            </p>
          </div>
        </section>

        {/* Your Options */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-emerald-700" />
            <h2 className="text-3xl font-serif text-emerald-800">
              Your Options for Managing Your Personal Data
            </h2>
          </div>

          <p className="text-gray-700 mb-4">
            You have control over how we use and share your Personal Data for
            marketing purposes. You may opt out from:
          </p>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Receiving marketing-related emails
              </h3>
              <p className="text-gray-700">
                To stop receiving these emails, email{" "}
                <a
                  href="mailto:sales@winniesholidayresort.com"
                  className="text-emerald-700 hover:underline"
                >
                  sales@winniesholidayresort.com
                </a>{" "}
                or use the unsubscribe link at the bottom of each marketing
                email.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Sharing with affiliates for direct marketing
              </h3>
              <p className="text-gray-700">
                If you prefer that we no longer share your data with our
                affiliates for marketing purposes, email{" "}
                <a
                  href="mailto:sales@winniesholidayresort.com"
                  className="text-emerald-700 hover:underline"
                >
                  sales@winniesholidayresort.com
                </a>{" "}
                or use the unsubscribe link.
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-4 italic">
            We will process your request as soon as reasonably practicable.
            Opting out of marketing emails will not affect your receipt of
            important administrative messages.
          </p>
        </section>

        {/* Other Important Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif text-emerald-800 mb-6">
            Other Important Information
          </h2>

          <div className="space-y-6">
            <InfoBlock
              title="Retention"
              content="We retain Personal Data for as long as needed or permitted in light of the purpose(s) for which it was obtained and consistent with applicable law. The criteria used to determine our retention periods include the length of time we have an ongoing relationship with you, legal obligations, and whether retention is advisable in light of our legal position."
            />
            <InfoBlock
              title="Security"
              content="We seek to use reasonable organisational, technical, and administrative measures to protect Personal Data within our organisation. If you have reason to believe that your interaction with us is no longer secure, please immediately notify us."
            />
            <InfoBlock
              title="Sensitive Data"
              content="We only collect Sensitive Data which may be necessary to perform expected services or as required by law. Unless we request it, please do not send us, or disclose, any sensitive Personal Data (e.g., social security numbers, information related to racial or ethnic origin, political opinions, religion, criminal background, or trade union membership)."
            />
            <InfoBlock
              title="Use of Services by Minors"
              content="The Services are not directed to individuals under the age of eighteen (18), and we do not knowingly collect Personal Data directly from individuals under 18."
            />
            <InfoBlock
              title="International Transfers"
              content="Your Personal Data may be stored and processed in any country where we have facilities or in which we engage service providers. We utilize legally recognized transfer mechanisms (such as Standard Contractual Clauses) to protect your Personal Data during international transfers."
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-8 h-8 text-emerald-700" />
            <h2 className="text-3xl font-serif text-emerald-800">Contact Us</h2>
          </div>

          <p className="text-gray-700 mb-6">
            Winnies Holiday Resort &amp; Spa, Kasauli, is responsible (data
            controller) for the Personal Data we hold about you.
          </p>

          <div className="bg-emerald-50 rounded-lg p-8 space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Resort Address
                </h3>
                <p className="text-gray-700">
                  Tehsil, Village Sanawar on Main Dharampur Kasauli Road
                  <br />
                  1 Km after Pinegrove School Sanawar Resorts
                  <br />
                  Sanawar, Kasauli, Himachal Pradesh 173202
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a
                  href="tel:09805633007"
                  className="text-emerald-700 hover:underline"
                >
                  098056 33007
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a
                  href="mailto:sales@winniesholidayresort.com"
                  className="text-emerald-700 hover:underline"
                >
                  sales@winniesholidayresort.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-emerald-700 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                <a
                  href="https://www.winnies.in"
                  className="text-emerald-700 hover:underline"
                >
                  www.winnies.in
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Updates */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif text-emerald-800 mb-4">
            Updates to This Privacy Notice
          </h2>
          <p className="text-gray-700">
            The &quot;LAST UPDATED&quot; legend at the top of this Privacy
            Notice indicates when this Privacy Notice was last revised. Any
            changes will become effective when we post the revised Privacy
            Notice on our Website.
          </p>
        </section>

        {/* Regional Provisions */}
        <section className="mb-12 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-serif text-emerald-800 mb-6">
            Additional Privacy Provisions for Residents of Certain Countries
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                EU/EEA/UK Residents
              </h3>
              <p className="text-gray-700">
                You may request access, correction, update, suppression,
                restriction, or deletion of your Personal Data, object to its
                processing, or receive a copy of your Personal Data for
                transfer. We will respond within 1 month. You may also lodge a
                complaint with your local data protection authority.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                USA Residents
              </h3>
              <p className="text-gray-700">
                You have the right to know if we process your personal
                information, request deletion, correct inaccurate information,
                and opt out of sales, sharing, or targeted advertising. You have
                the right to be free from unlawful discrimination for exercising
                your rights.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                People&apos;s Republic of China (PRC) Residents
              </h3>
              <p className="text-gray-700">
                We may collect sensitive information including payment card
                information, stay records, web browsing history, and precise
                location. We will obtain your consent as required by PRC law and
                only share data internationally with your separate consent.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="bg-emerald-800 text-white py-8 px-6 text-center">
        <p className="text-emerald-100">
          © {new Date().getFullYear()} Winnies Holiday Resort &amp; Spa Kasauli.
          All rights reserved.
        </p>
      </div>
    </div>
  );
}

function DataCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-emerald-900 mb-3">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function CollectionRow({
  source,
  details,
}: {
  source: string;
  details: string;
}) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-6 py-4 font-semibold text-gray-900">{source}</td>
      <td className="px-6 py-4 text-gray-700">{details}</td>
    </tr>
  );
}

function UsageItem({
  title,
  description,
  legal,
}: {
  title: string;
  description: string;
  legal: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-emerald-500">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-emerald-700">
        <span className="font-semibold">Legal Basis:</span> {legal}
      </p>
    </div>
  );
}

function InfoBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
