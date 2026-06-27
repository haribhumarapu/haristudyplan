import { motion } from 'framer-motion'
import {
  Brain,
  Calendar,
  Target,
  BookOpen,
  Code,
  BarChart3,
  ArrowRight,
} from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Study Coach',
      description: 'Personalized AI guidance that adapts to your learning style and optimizes retention.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      icon: Calendar,
      title: 'Smart Planner',
      description: 'Intelligent scheduling that adapts to your lifestyle for maximum productivity.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.1,
    },
    {
      icon: Target,
      title: 'GATE Tracker',
      description: 'Specialized preparation with advanced analytics and expert recommendations.',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.2,
    },
    {
      icon: BookOpen,
      title: 'SSC Tracker',
      description: 'Comprehensive SSC CGL prep with strategic study plans and mock assessments.',
      gradient: 'from-orange-500 to-yellow-500',
      delay: 0.3,
    },
    {
      icon: Code,
      title: 'Coding Trainer',
      description: 'Master interview problems with real-time performance metrics and feedback.',
      gradient: 'from-red-500 to-pink-500',
      delay: 0.4,
    },
    {
      icon: BarChart3,
      title: 'Analytics Suite',
      description: 'Deep insights into your progress with actionable recommendations for improvement.',
      gradient: 'from-indigo-500 to-purple-500',
      delay: 0.5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span className="text-sm text-blue-300 font-medium">Premium Features</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Powerful tools designed to accelerate your learning journey and unlock your potential
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ delay: feature.delay }}
                whileHover={{
                  y: -12,
                  boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4)`,
                }}
                className="feature-card group relative overflow-hidden"
              >
                {/* Gradient background on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} pointer-events-none`}
                ></motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 shadow-xl`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                    {feature.description}
                  </p>

                  {/* Learn More Link */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-blue-400 font-semibold cursor-pointer group/link"
                  >
                    <span>Learn more</span>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="group-hover/link:translate-x-1 transition-transform"
                    >
                      <ArrowRight size={18} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Border animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-br ${feature.gradient} opacity-0 pointer-events-none`}
                  style={{ backgroundClip: 'padding-box' }}
                ></motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
