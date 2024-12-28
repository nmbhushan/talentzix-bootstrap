import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

export const siteConfig = {
  name: 'Realcube 2.0', // Your site name
  description: 'A realcube 2.0 product.',
  authPageTitle: 'Base Portal',
  authPageDesc: 'Base Portal - A Realcube 2.0 Product',
  logo: 'https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg',
  logoWidth: 131,
  logoHeight: 34,
  links: {
    linkedin: 'https://www.linkedin.com/company/realcubecommunity/',
    website:
      'https://www.realcube.estate/assets/web/img/home-page-img/menu-logo.svg'
  },
  contact: {
    email: 'realcube@exalogic.co',
    phone: '+971 391 3570'
  },
  //site header links
  header: {
    headerLinks: [
      { title: 'Home', href: '/' },
      { title: 'Properties', href: '/properties-listing' },
      { title: 'Area Guide', href: '#' },
      { title: 'Marketing', href: '#' }
    ],
    buylinks: [
      { title: 'Buy', href: '#' },
      { title: 'Rent', href: '#' }
    ],
    quickPay: [
      { title: 'Quick Pay', href: '#' },
    ]
  },
  //site footer links
  footer: {
    quickLinks: {
      title: 'Quick Links',
      links: [
        { title: 'About Us', href: '/about-us' },
        { title: 'Blog', href: '/blog' },
        { title: 'Contact Us', href: '/contact-us' },
        { title: 'Privacy & Policy', href: '/privacy-policy' },
        { title: 'Terms & Conditions', href: '/terms-and-conditions' }
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
    abudhabi: {
      address: 'Level 35, PO Box 73801 ,Maqam Tower,Sowwah Square, Maryah Island.',
      phone: '+971 800 3570',
    },
    london: {
      address: 'Kemp House, 160 City Road,EC1V 2NX, London, UK',
      phone: '+44 20 3907 7737',
    },
    dubai: {
      address: 'Level 14,PO Box 634321 Fortune Executive Towers Jumeirah Lakes Towers',
      phone: '+971 391 3570',
    },
    bengaluru: {
      address: 'Level 7, Raheja Paramount.Residency road,Bengaluru, Karnataka 560025',
      phone: '+91 804 101 0727',
    }
  },
  needHelp: [
    { icon: '/images/landing/customer-service.png', title: '24/7 chat support', description: 'Get 24/7 chat support with our friendly customer service agents at your service', link: '#', linkText: 'Chat Now' },
    { icon: '/images/landing/faq.png', title: 'FAQs', description: 'View FAQs for detailed instructions on specific features.', link: '', linkText: 'Learn more' },
    { icon: '/images/landing/blogging.png', title: 'Blog', description: 'Stay up date with the latest stories and commentary', link: '', linkText: 'Learn more' }
  ]
};
