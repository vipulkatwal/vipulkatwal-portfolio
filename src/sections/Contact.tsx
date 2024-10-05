'use client';

import React, { useEffect, useState } from "react";
import emailjs from 'emailjs-com';
import { Calistoga } from 'next/font/google';
import Image from 'next/image';
import grainImage from "../assets/images/grain.jpg";
import mailIcon from "../assets/icons/IconMail.png";
import sentIcon from "../assets/icons/sent.png";
import messageIcon from "../assets/icons/message.png";
import userIcon from "../assets/icons/user.png";

const calistoga = Calistoga({ subsets: ['latin'], weight: ['400'] });

export const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error('EmailJS public key is not defined');
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      setStatus('Configuration error. Please try again later.');
      return;
    }

    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      }, (error) => {
        setStatus(`Failed to send message: ${error.text}`);
      });
  };

  return (
    <section id="contact" className="py-8 lg:py-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-emerald-300 to-sky-400 text-gray-900 py-8 px-6 rounded-3xl shadow-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url(${grainImage.src})`,
          }}></div>
          <div className="relative z-10">
            <h2 className={`${calistoga.className} text-center text-3xl md:text-4xl mb-6`}>
              Let&apos;s Connect 👋
            </h2>

            <div className="flex flex-col gap-8 items-start md:flex-row">
              <div className="w-full space-y-4 md:w-1/2">
                <h3 className="text-base text-justify md:text-lg leading-relaxed">
                  Whether you have a question, feedback, or just want to connect, feel free to reach out using the form.
                </h3>
                <div className="flex items-center space-x-2 text-sm md:text-base">
                  <Image src={mailIcon} alt="Email icon" width={20} height={20} />
                  <span>vipulkatwal17@gmail.com</span>
                </div>
                {status && (
                  <div className="bg-white/20 text-white p-3 rounded-lg text-sm">
                    {status}
                  </div>
                )}
              </div>
              <form onSubmit={handleSubmit} className="w-full space-y-4 md:w-1/2">
                <div className="relative">
                  <Image src={userIcon} alt="User icon" width={18} height={18} className="absolute top-3 left-3" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white text-sm md:text-base"
                    required
                  />
                </div>
                <div className="relative">
                  <Image src={mailIcon} alt="Email icon" width={18} height={18} className="absolute top-3 left-3" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white text-sm md:text-base"
                    required
                  />
                </div>
                <div className="relative">
                  <Image src={messageIcon} alt="Message icon" width={18} height={18} className="absolute top-3 left-3" />
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white text-sm md:text-base"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all border border-gray-800 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2"
                >
                  <span className="flex items-center justify-center">
                    Send Message
                    <Image src={sentIcon} alt="Send icon" width={18} height={18} className="ml-2" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};