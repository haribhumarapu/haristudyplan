import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import FloatingDashboard from './FloatingDashboard'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect cursor-pointer"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-green-400"
                ></motion.div>
                <span className="text-sm bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-medium">
                  Trusted by 10,000+ Students
                </span>
              </motion.div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="block text-white">One Platform.</span>
                <span className="gradient-text inline-block">Every Goal.</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl"
            >
              AI-powered study planner for GATE, SSC CGL, Coding Interviews, and Career Growth. Achieve your dreams with intelligent learning paths.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center group rounded-xl"
              >
                Get Started Free
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center group rounded-xl"
              >
                <Play size={20} className="mr-2" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
              {[
                { value: '500K+', label: 'Study Hours' },
                { value: '10K+', label: 'Active Users' },
                { value: '94%', label: 'Success Rate' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs md:text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative h-full min-h-[500px] md:min-h-[600px]"
          >
            <FloatingDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
