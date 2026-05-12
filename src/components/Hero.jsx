import { motion } from 'framer-motion';
import { BsArrowRight, BsStars } from 'react-icons/bs';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="hero">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-slate-300 mb-8 border-white/10"
          >
            <BsStars className="text-purple-400" />
            <span>Introducing SmartAI 2.0</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Build Smarter with <br className="hidden md:block" />
            <span className="text-gradient">AI-Powered Tools</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            Automate your workflow, generate high-quality content, and scale your business with the most advanced artificial intelligence platform.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a href="#demo" className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2 text-lg px-8 py-4">
              Try Free Tool <BsArrowRight />
            </a>
            <a href="#pricing" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4">
              View Pricing
            </a>
          </motion.div>

          {/* Social Proof / Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10 w-full"
          >
            {[
              { label: 'Active Users', value: '100K+' },
              { label: 'Words Generated', value: '10M+' },
              { label: 'Uptime', value: '99.9%' },
              { label: 'Customer Rating', value: '4.9/5' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-sm text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
