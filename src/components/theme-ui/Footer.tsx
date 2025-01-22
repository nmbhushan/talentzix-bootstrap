'use client'
import { LogoIcon } from "./Icons";
import { ChevronsRight, Mail, Twitter, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Newsletter } from "@/components/theme-ui/Newsletter";

export const Footer = () => {
  return (
    <footer id="footer" className="relative bg-[#17012C] pt-10 mt-[100px]">
      <Newsletter />
      <section className="container border-b border-[#D9D9D9] pt-20 pb-14 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl text-[#FFFFFF] flex pb-3"
          >
            Talentzix
          </a>
          <p className="text-[#D9D9D9] text-[12px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
          <a
            rel="noreferrer noopener"
            href="/contact-us"
            className="inline-flex justify-center items-center my-4 text-center h-[39px] min-w-[99px] !rounded-[71px] font-bold text-white text-[11px] hover:bg-none hover:!bg-[#219be4] bg-gradient-to-r from-[#C21EFC] to-[#0081EC]"
          >Contact Us
          </a>
          <div className="flex items-center mt-2">
            <p className="text-[#D9D9D9] text-[12px] font-medium me-3">- Follow on</p>
            <Link className="text-[#D9D9D9] text-[12px]" href=""><Twitter className="w-[15px]"/></Link>
            <Link className="text-[#D9D9D9] text-[12px]" href=""><Linkedin className="w-[15px] ms-2"/></Link>
            <Link className="text-[#D9D9D9] text-[12px]" href=""><Youtube className="w-[15px] ms-2"/></Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[12px] text-[#FFFFFF]"> Quick Link </h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/about-us"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
              <ChevronsRight className="me-1 w-[14px]"/> About Us
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/resume-templates"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
              <ChevronsRight className="me-1 w-[14px]"/> Resume Templates
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/cv-templates"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
              <ChevronsRight className="me-1 w-[14px]"/> CV Templates
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/blogs"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
              <ChevronsRight className="me-1 w-[14px]"/> Blogs
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/faqs"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
              <ChevronsRight className="me-1 w-[14px]"/> FAQ’S
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[12px] text-[#FFFFFF]">Policy Link</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/terms-and-conditions"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
              <ChevronsRight className="me-1 w-[14px]"/> Terms & Conditions
            </a>
          </div>


          <div>
            <a
              rel="noreferrer noopener"
              href="/privacy-policy"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
               <ChevronsRight className="me-1 w-[14px]"/> Privacy Policy
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/cookies-policy"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
              <ChevronsRight className="me-1 w-[14px]"/> Cookies Policy
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/payment-policy"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
              <ChevronsRight className="me-1 w-[14px]"/> Payment Policy
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/shipping-policy"
              className="text-[#D9D9D9] text-[12px] flex items-center"
            >
              <ChevronsRight className="me-1 w-[14px]"/> Shipping Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-[12px] text-[#FFFFFF]">Contact us</h3>
          <div>
            <p className="text-[#D9D9D9] text-[12px] flex items-center">
                <Mail className="me-1 w-[14px]"/> support@talentzix.ai
            </p>
          </div>
        </div>
      </section>

      <section className="container py-4 text-center">
        <h3 className="text-[#D9D9D9] text-[12px]">
          &copy; All Copyright 2025 by Talentzix
        </h3>
      </section>
    </footer>
  );
};
