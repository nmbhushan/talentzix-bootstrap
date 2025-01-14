'use client'
import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex pb-3"
          >
            Talentzix
          </a>
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg"> Quick Link </h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/about-us"
              className="opacity-60 hover:opacity-100"
            >
              About Us
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/resume-templates"
              className="opacity-60 hover:opacity-100"
            >
              Resume Templates
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/cv-templates"
              className="opacity-60 hover:opacity-100"
            >
              CV Templates
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/blogs"
              className="opacity-60 hover:opacity-100"
            >
              Blogs
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/faqs"
              className="opacity-60 hover:opacity-100"
            >
              FAQ’S
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/contact-us"
              className="opacity-60 hover:opacity-100"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Policy Link</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="/terms-and-conditions"
              className="opacity-60 hover:opacity-100"
            >
              Terms & Conditions
            </a>
          </div>


          <div>
            <a
              rel="noreferrer noopener"
              href="/privacy-policy"
              className="opacity-60 hover:opacity-100"
            >
               Privacy Policy
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/cookies-policy"
              className="opacity-60 hover:opacity-100"
            >
              Cookies Policy
            </a>
          </div>
          <div>
            <a
              rel="noreferrer noopener"
              href="/payment-policy"
              className="opacity-60 hover:opacity-100"
            >
              Payment Policy
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="/shipping-policy"
              className="opacity-60 hover:opacity-100"
            >
              Shipping Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Contact us</h3>
          <div>
            <p>support@talentzix.ai</p>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2025 Talentzix
        </h3>
      </section>
    </footer>
  );
};
