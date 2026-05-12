import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for trying out SmartAI features.',
    features: ['100 Generations / month', 'Standard AI Model', 'Community Support', 'Basic Templates'],
    isPopular: false,
    buttonText: 'Start for free',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For professionals who need more power.',
    features: ['Unlimited Generations', 'Advanced AI Model (GPT-4)', 'Priority Support', 'Custom Templates', 'API Access'],
    isPopular: true,
    buttonText: 'Get Pro',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For teams needing scale and security.',
    features: ['Everything in Pro', 'Dedicated Account Manager', 'SSO & Advanced Security', 'Custom AI Training', 'SLA Guarantee'],
    isPopular: false,
    buttonText: 'Contact Sales',
  },
];

const Pricing = () => {
  return (
    <section className="py-24 relative" id="pricing">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Simple, <span className="text-gradient">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Choose the plan that best fits your needs. Upgrade or cancel anytime.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card rounded-3xl p-8 relative ${
                plan.isPopular ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] transform md:-translate-y-4' : 'border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <BsCheckCircleFill className="text-purple-500 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full ${
                  plan.isPopular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
