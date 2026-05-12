import { motion } from 'framer-motion';
import { BsGrid1X2, BsFileText, BsGraphUp, BsGear, BsBell, BsSearch, BsChatLeftText } from 'react-icons/bs';

const DashboardPreview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Powerful <span className="text-gradient">Dashboard</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Manage your AI generations, track analytics, and optimize your workflow from one intuitive interface.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] lg:h-[600px]"
        >
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-white/5 border-r border-white/10 p-6 hidden md:flex flex-col">
            <div className="flex items-center gap-2 mb-10">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">AI</span>
              </div>
              <span className="font-bold text-white tracking-wide">SmartAI</span>
            </div>

            <nav className="flex-1 space-y-2">
              {[
                { icon: <BsGrid1X2 />, label: 'Overview', active: true },
                { icon: <BsFileText />, label: 'Documents', active: false },
                { icon: <BsChatLeftText />, label: 'AI Chat', active: false },
                { icon: <BsGraphUp />, label: 'Analytics', active: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
                    item.active ? 'bg-purple-500/20 text-purple-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </nav>

            <div className="mt-auto">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                <BsGear />
                <span className="text-sm font-medium">Settings</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col bg-gradient-to-br from-black/40 to-purple-900/10">
            {/* Header */}
            <header className="flex justify-between items-center mb-6 sm:mb-8">
              <h3 className="text-xl font-bold text-white">Overview</h3>
              <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                  <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm text-white focus:outline-none focus:border-purple-500/50"
                  />
                </div>
                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors">
                  <BsBell size={16} />
                </button>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 border-2 border-white/10 shrink-0" />
              </div>
            </header>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { label: 'Total Words', value: '24,592', trend: '+12%' },
                { label: 'Documents', value: '142', trend: '+5%' },
                { label: 'Time Saved', value: '48h', trend: '+18%' },
                { label: 'API Calls', value: '8,420', trend: '-2%' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-xl sm:text-2xl font-bold text-white">{stat.value}</span>
                    <span className={`text-xs mb-1 ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {stat.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Area Mockup */}
            <div className="h-56 md:flex-1 min-h-[200px] bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 flex flex-col relative overflow-hidden mt-2">
              <h4 className="text-sm font-medium text-slate-300 mb-4 sm:mb-6">Generation Activity</h4>
              
              {/* Fake Graph Lines */}
              <div className="flex-1 h-full flex items-end justify-between gap-1 sm:gap-2 md:gap-4 relative z-10">
                {[40, 70, 45, 90, 65, 85, 50, 100, 75, 60, 80, 55].map((height, i) => (
                  <div key={i} className={`w-full bg-purple-500/20 rounded-t-sm hover:bg-purple-500/40 transition-colors relative group ${i > 7 ? 'hidden sm:block' : ''}`} style={{ height: `${height}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                      {height * 10}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Background grid lines */}
              <div className="absolute inset-x-0 top-14 bottom-6 flex flex-col justify-between pointer-events-none opacity-20">
                <div className="w-full border-t border-white/20" />
                <div className="w-full border-t border-white/20" />
                <div className="w-full border-t border-white/20" />
                <div className="w-full border-t border-white/20" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
