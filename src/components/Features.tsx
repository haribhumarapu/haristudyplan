import { motion } from 'framer-motion'
import { Brain, Calendar, Target, BookOpen, Code, BarChart3 } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Study Coach',
      description: 'Personalized AI-powered coaching that adapts to your learning style and pace.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      icon: Calendar,
      title: 'Smart Planner',
      description: 'Intelligent scheduling that optimizes your study sessions for maximum retention.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.1,
    },
    {
      icon: Target,
      title: 'GATE Tracker',
      description: 'Specialized tracking and analytics for GATE exam preparation with expert insights.',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.2,
    },
    {
      icon: BookOpen,
      title: 'SSC Tracker',
      description: 'Comprehensive SSC CGL preparation with strategic study plans and mock tests.',
      gradient: 'from-orange-500 to-yellow-500',
      delay: 0.3,
    },
    {
      icon: Code,
      title: 'Coding Tracker',
      description: 'Master coding interviews with curated problems and real-time performance metrics.',
      gradient: 'from-red-500 to-pink-500',
      delay: 0.4,
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Detailed insights into your progress, strengths, and areas for improvement.',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Premium Features</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need to excel in your studies and career
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ delay: feature.delay }}
                whileHover={{ y: -5 }}
                className="feature-card"
              >
                {/* Icon Container */}
                <div className="mb-4">
                  <div
                    className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.gradient} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>

                {/* Hover Effect Line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`mt-4 h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
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
