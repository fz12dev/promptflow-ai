import { motion } from 'framer-motion';
import { BsLightningCharge, BsShieldCheck, BsGlobe, BsCpu } from 'react-icons/bs';

const features = [
  {
    icon: <BsLightningCharge size={24} className="text-blue-400" />,
    title: 'Lightning Fast',
    description: 'Generate high-quality content in seconds, not hours. Optimized for speed and performance.',
  },
  {
    icon: <BsCpu size={24} className="text-purple-400" />,
    title: 'Smart AI Models',
    description: 'Powered by the latest LLMs to understand context and produce human-like text.',
  },
  {
    icon: <BsShieldCheck size={24} className="text-emerald-400" />,
    title: 'Secure & Private',
    description: 'Enterprise-grade security ensures your data and generated content remain strictly yours.',
  },
  {
    icon: <BsGlobe size={24} className="text-pink-400" />,
    title: 'Global Access',
    description: 'Access our platform from anywhere in the world with zero latency and high availability.',
  },
];

const Features = () => {
  return (
    <section className="py-24 relative" id="features">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Why Choose <span className="text-gradient">SmartAI?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-lg"
          >
            Everything you need to scale your content creation and streamline your workflow in one powerful platform.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
