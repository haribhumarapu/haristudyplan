import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Flame, Target } from 'lucide-react'

const DashboardPreview = () => {
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
      className="relative group"
    >
      {/* Glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>

      <div className="glass-effect rounded-2xl p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Today's Dashboard</h3>
          <p className="text-sm text-slate-400">Real-time progress tracking</p>
        </div>

        {/* Today's Goals */}
        <motion.div variants={cardVariants} className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-300 flex items-center gap-2">
              <Target size={18} className="text-blue-400" />
              Today's Goals
            </span>
            <span className="text-lg font-bold text-green-400">5/7</span>
          </div>
          <div className="w-full bg-slate-800 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '71%' }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
            ></motion.div>
          </div>
        </motion.div>

        {/* Study Streak */}
        <motion.div variants={cardVariants} className="flex items-center justify-between bg-slate-800/50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            <Flame className="text-orange-400" size={24} />
            <div>
              <p className="text-slate-300">Study Streak</p>
              <p className="text-sm text-slate-400">Keep the momentum</p>
            </div>
          </div>
          <p className="text-2xl font-bold text-orange-400">42</p>
        </motion.div>

        {/* Progress Bars */}
        <motion.div variants={cardVariants} className="space-y-3">
          <p className="text-slate-300 font-semibold">Weekly Progress</p>
          {[
            { name: 'GATE', progress: 85, color: 'from-blue-400 to-blue-500' },
            { name: 'SSC CGL', progress: 72, color: 'from-purple-400 to-purple-500' },
            { name: 'Coding', progress: 90, color: 'from-green-400 to-emerald-500' },
          ].map((item) => (
            <div key={item.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">{item.name}</span>
                <span className="text-slate-300 font-semibold">{item.progress}%</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                  className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div variants={cardVariants} className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-700">
          <div className="bg-slate-800/30 p-3 rounded-lg text-center">
            <p className="text-slate-400 text-xs">Study Hours</p>
            <p className="text-lg font-bold text-blue-400 mt-1">24.5h</p>
          </div>
          <div className="bg-slate-800/30 p-3 rounded-lg text-center">
            <p className="text-slate-400 text-xs">Topics Done</p>
            <p className="text-lg font-bold text-green-400 mt-1">18/32</p>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
        >
          <CheckCircle size={18} />
          View Full Dashboard
        </motion.button>
      </div>
    </motion.div>
  )
}

export default DashboardPreview
