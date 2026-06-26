import { motion } from 'framer-motion'
import { Users, Clock, Target, Zap } from 'lucide-react'

const Statistics = () => {
  const stats = [
    {
      icon: Clock,
      label: 'Study Hours',
      value: '500K+',
      description: 'Completed by our community',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      icon: Users,
      label: 'Active Users',
      value: '10K+',
      description: 'Learning and growing daily',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.1,
    },
    {
      icon: Target,
      label: 'Goal Completion',
      value: '94%',
      description: 'Success rate on platform',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.2,
    },
    {
      icon: Zap,
      label: 'Daily Streak',
      value: '42 Days',
      description: 'Average streak maintained',
      gradient: 'from-orange-500 to-yellow-500',
      delay: 0.3,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Trusted by Thousands</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join a thriving community of students achieving their career goals with HariStudyPlan
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ delay: stat.delay }}
                whileHover={{ y: -8, boxShadow: `0 0 40px rgba(${stat.gradient === 'from-blue-500 to-cyan-500' ? '59, 130, 246' : stat.gradient === 'from-purple-500 to-pink-500' ? '168, 85, 247' : stat.gradient === 'from-green-500 to-emerald-500' ? '16, 185, 129' : '249, 115, 22'}, 0.3)` }}
                className="stat-card group cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 10 }}
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stat.gradient} p-3 group-hover:shadow-2xl transition-all duration-300 mb-4`}
                >
                  <Icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <div>
                  <p className="text-slate-400 text-sm mb-2 font-medium">{stat.label}</p>
                  <motion.p
                    whileHover={{ scale: 1.05 }}
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-slate-500 text-sm leading-relaxed">{stat.description}</p>
                </div>

                {/* Animated underline */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`mt-4 h-1.5 bg-gradient-to-r ${stat.gradient} rounded-full shadow-lg`}
                ></motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
