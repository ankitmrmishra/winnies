"use client";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  // Link arrays matching navbar structure
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Kasauli", href: "/Kasauli" },
        { name: "Weddings", href: "/Weddings" },
        { name: "Restaurant", href: "/Restaurant" },
        { name: "Spa", href: "/Spa" },
      ],
    },
    {
      title: "More",
      links: [
        { name: "Tariff", href: "/Packages" },
        { name: "Adventure Activities", href: "/Activities" },
        { name: "Contact", href: "/ContactUs" },
      ],
    },
  ];

  const socialIcons = [
    { Icon: Facebook, href: "https://www.facebook.com/winnies.resorts" },
    { Icon: Twitter, href: "https://x.com/WKasauli" },
    { Icon: Instagram, href: "https://www.instagram.com/winniesresorts/" },
    // { Icon: Linkedin, href: "#" },
  ];

  const router = useRouter();

  return (
    <div className="lg:p-20 bg-[#faf9f6]">
      <footer className="bg-[#0B3B2D] text-white px-6 py-16 md:px-12 lg:px-24 md:rounded-lg rounded-t-lg">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid gap-8 lg:grid-cols-2 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Experience nature in a new way.
                <span className="block">
                  <span className="text-[#FFA500]">Visit us.</span>
                </span>
              </h2>
              <p className="text-gray-300 max-w-2xl">
                Though Himachal is studded with many picturesque hill stations,
                by virtue of its general terrain Kasauli is a little gem with
                its own charm and splendor. Winnies Holiday Resort is a peaceful
                destination away from all the hustle & bustle of city life. We
                are ideally situated on the main Kasauli road on the slopes of
                Sanawar hill.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-2 max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-white text-black"
                />
                <Button className="bg-[#0B3B2D] border-2 hover:bg-[#0a3528]">
                  Subscribe
                </Button>
              </div>
              <div className="flex gap-4">
                {socialIcons.map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="hover:text-[#FFA500] transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-5 h-5" />
                <a href="tel:919805633007">91-9805633007</a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-5 h-5" />
                <a href="mailto:sales@winniesholidayresort.com">
                  sales@winniesholidayresort.com
                </a>
              </div>
              <div className="text-gray-300 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <a
                  href="https://www.winnies.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.winnies.in
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="hover:text-[#FFA500] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Logo and CTA */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">Winnies</div>
              <Button
                onClick={() =>
                  router.push(
                    "https://bookings.resavenue.com/resBooking/availsearch?regCode=GATE0402"
                  )
                }
                className="bg-white text-[#0B3B2D] hover:bg-gray-100"
              >
                Reserve now
              </Button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-700 text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © {year} Winnies Holiday Resort & Spa. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="hover:text-[#FFA500] transition-colors"
              >
                Privacy Policy
              </Link>
              <a href="#" className="hover:text-[#FFA500] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
