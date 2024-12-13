import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
        <div>
          <Image
            src="/images/logo.svg"
            alt="Company logo"
            width={292}
            height={108}
            className="w-full lg:w-auto"
          />
        </div>
        <div>
          <h2 className="font-bold mb-1">About</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                How it works
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Featured
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Partnership
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Business Relation
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-1">Community</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Podcast
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Invite a friend
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-1">Socials</h2>
          <ul>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Discord
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="mb-1">
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center text-xs text-black border-t border-black pt-4">
        <div className="text-center lg:text-left mt-2">
          <p>© 2022 MORENT. All rights reserved</p>
        </div>
        <div className="flex space-x-4 mt-2 lg:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

