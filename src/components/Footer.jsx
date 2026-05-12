import { BsStars, BsTwitter, BsGithub, BsLinkedin, BsDiscord } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 pt-20 pb-10 mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                <BsStars className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Smart<span className="text-gradient">AI</span></span>
            </div>
            <p className="text-slate-400 max-w-xs mb-8 text-sm leading-relaxed">
              Empowering creators and businesses with next-generation artificial intelligence tools for unparalleled productivity.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <BsTwitter size={18} />, href: '#' },
                { icon: <BsGithub size={18} />, href: '#' },
                { icon: <BsLinkedin size={18} />, href: '#' },
                { icon: <BsDiscord size={18} />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            {
              title: 'Product',
              links: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Careers', 'Blog', 'Contact', 'Partners'],
            },
            {
              title: 'Legal',
              links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'],
            },
          ].map((column, i) => (
            <div key={i}>
              <h4 className="text-white font-medium mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} SmartAI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>Designed with</span>
            <span className="text-rose-500">♥</span>
            <span>for the future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
