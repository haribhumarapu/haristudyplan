import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Flame, Target, Clock, AlertCircle } from 'lucide-react'

const FloatingDashboard = () => {
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative group h-full"
    >
      {/* Floating animation */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition duration-1000"></div>

        <div className="glass-effect-light rounded-3xl p-6 md:p-8 space-y-6 relative">
          {/* Header */}
          <motion.div variants={cardVariants} className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Your Dashboard</h3>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
              ></motion.div>
            </div>
            <p className="text-sm text-slate-400">Real-time learning progress</p>
          </motion.div>

          {/* Today's Goals */}
          <motion.div variants={cardVariants} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Target size={18} className="text-blue-400" />
                <span className="text-slate-300 font-semibold">Today's Goals</span>
              </div>
              <span className="text-lg font-bold text-green-400">5/7</span>
            </div>
            <div className="w-full bg-slate-800/50 rounded-full h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '71%' }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500 shadow-lg shadow-green-400/50"
              ></motion.div>
            </div>
          </motion.div>

          {/* Study Streak */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-between glass-effect p-4 rounded-xl cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-orange-400"
              >
                <Flame size={24} />
              </motion.div>
              <div>
                <p className="text-slate-300 font-semibold">Study Streak</p>
                <p className="text-xs text-slate-400">Keep momentum going</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-orange-400">42</p>
          </motion.div>

          {/* Weekly Progress */}
          <motion.div variants={cardVariants} className="space-y-3">
            <p className="text-slate-300 font-semibold flex items-center gap-2">
              <TrendingUp size={18} className="text-purple-400" />
              Weekly Progress
            </p>
            {[
              { name: 'GATE', progress: 85, color: 'from-blue-400 to-blue-500' },
              { name: 'SSC CGL', progress: 72, color: 'from-purple-400 to-purple-500' },
              { name: 'Coding', progress: 90, color: 'from-green-400 to-emerald-500' },
            ].map((item) => (
              <div key={item.name} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">{item.name}</span>
                  <span className="text-slate-300 font-semibold">{item.progress}%</span>
                </div>
                <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                    className={`h-full rounded-full bg-gradient-to-r ${item.color} shadow-lg shadow-blue-400/30`}
                  ></motion.div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Upcoming Task */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="glass-effect p-4 rounded-xl cursor-pointer border-l-2 border-blue-500"
          >
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-400 flex-shrink-0 mt-1" size={20} />
              <div className="flex-1">
                <p className="text-slate-300 font-semibold text-sm">Next: Data Structures</p>
                <p className="text-xs text-slate-400 mt-1">45 minutes • 3 topics</p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, ease: 'easeOut', delay: 0.7 }}
                  className="h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mt-2"
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.button
            variants={cardVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle size={18} />
            Open Dashboard
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default FloatingDashboard
