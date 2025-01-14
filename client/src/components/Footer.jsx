import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsGithub, BsX, BsFacebook, BsDiscord, } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500 ">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 rounded-lg text-white">
                Coder's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="ABOUT" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                  Coder's Blog
                </Footer.Link>
                <Footer.Link href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                  React.js
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="FOLLOW US" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Github
                </Footer.Link>
                <Footer.Link href="#">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="LEGAL" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">
                  Terms &amp; conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Coder's Blog" year={new Date().getFullYear()}/> 
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsX} />
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsDiscord} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
