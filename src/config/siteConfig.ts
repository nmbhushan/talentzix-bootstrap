import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export const siteConfig = {
  name: 'Talentzix', // Your site name
  description: 'Talentzix : Craft Your Dream Resume in 10 Minutes with GenA',
  authPageTitle: 'Talentzix',
  authPageDesc: 'Craft Your Dream Resume in 10 Minutes with GenA',
  logo: 'https://talentzixmedia.s3.ap-south-1.amazonaws.com/logo.webp',
  logoWidth: 131,
  logoHeight: 34,
  links: {
    linkedin: 'https://www.linkedin.com/',
    website:
      'https://talentzixmedia.s3.ap-south-1.amazonaws.com/logo.webp'
  },
  contact: {
    email: 'support@talentzix.ai',
    phone: '+91 95607 40175'
  },
  //site header links
  header: {
    headerLinks: [
      { title: 'Home', href: '/' },
      { title: 'Resume Templates', href: '/resume-templates' },
      { title: 'CV Templates', href: '/cv-templates' },
      { title: 'Blogs', href: '/blogs' },
      { title: 'Faqs', href: '/faqs' }
    ]
  },
  //site footer links
  footer: {
    quickLinks: {
      title: 'Quick Links',
      links: [
        { title: 'About Us', href: '/about-us' },
        { title: 'Resume Templates', href: '/resume-templates' },
        { title: 'CV Templates', href: '/cv-templates' },
        { title: 'Blogs', href: '/blogs' },
        { title: 'Faqs', href: '/faqs' }
      ],
    },
    subscribe: {
      title: 'Subscribe',
    },
    socialLinks: {
      title: 'Connect',
      links: [
        { icon: FaFacebookSquare, title: 'Facebook', href: 'https://facebook.com' },
        { icon: FaTwitterSquare, title: 'Twitter', href: 'https://twitter.com' },
        { icon: FaLinkedin, title: 'LinkedIn', href: 'https://linkedin.com' }
      ]
    },

  },
  address: {
    bengaluru: {
      address: '4th Floor, SAKET CALLIPOLIS, 403, Doddakannelli, Sarjapur road, Bengaluru, Karnataka 560035',
      phone: '+91 95607 40175',
    }
  },
  needHelp: [
    { icon: '/images/landing/customer-service.png', title: '24/7 chat support', description: 'Get 24/7 chat support with our friendly customer service agents at your service', link: '#', linkText: 'Chat Now' },
    { icon: '/images/landing/faq.png', title: 'FAQs', description: 'View FAQs for detailed instructions on specific features.', link: '', linkText: 'Learn more' },
    { icon: '/images/landing/blogging.png', title: 'Blog', description: 'Stay up date with the latest stories and commentary', link: '', linkText: 'Learn more' }
  ]
};
