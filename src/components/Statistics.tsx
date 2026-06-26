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
    },
    {
      icon: Users,
      label: 'Active Users',
      value: '10K+',
      description: 'Learning and growing daily',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      label: 'Goal Completion',
      value: '94%',
      description: 'Success rate',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      label: 'Daily Streak',
      value: '42 Days',
      description: 'Average streak',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join a growing community of students achieving their career goals with HariStudyPlan
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
                whileHover={{ y: -5 }}
                className="group glass-effect rounded-xl p-6 space-y-4 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div>
                  <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-sm">{stat.description}</p>
                </div>

                {/* Progress bar animation */}
                <div className="pt-2">
                  <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${stat.gradient}`}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
