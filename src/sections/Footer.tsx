import React from 'react';
import TwitterIcon from "../assets/icons/twitter.svg";
import LinkedinIcon from "../assets/icons/linkedin.svg";
import GithubIcon from "../assets/icons/github.svg";

// Array of footer links with titles, hrefs, and corresponding icons
const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/vipulkatwal/",
    Icon: LinkedinIcon
  },
  {
    title: "Github",
    href: "https://github.com/vipulkatwal",
    Icon: GithubIcon
  },
  {
    title: "Twitter",
    href: "https://x.com/vipulkatwal",
    Icon: TwitterIcon
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      {/* Decorative background effect */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Footer text */}
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          {/* Navigation for footer links */}
          <nav className="flex flex-row md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                className="inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Display corresponding icons */}
                <link.Icon className="w-8 h-8 text-white hover:text-emerald-300 transition-colors" />
                <span className="sr-only">{link.title}</span> {/* Screen reader label */}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
