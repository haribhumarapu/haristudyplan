import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const CTA = () => {
  const benefits = [
    'Personalized learning paths',
    'AI-powered study coach',
    'Real-time progress tracking',
    'Expert mentorship access',
    'Lifetime platform updates',
    '30-day money-back guarantee',
  ]

  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect-light rounded-3xl p-8 md:p-16 text-center space-y-10 relative overflow-hidden"
        >
          {/* Animated background gradient */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 pointer-events-none"
            style={{ backgroundSize: '200% 200%' }}
          ></motion.div>

          {/* Content */}
          <div className="relative z-10">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to <span className="gradient-text">Transform</span> Your Learning?
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto">
                Join 10,000+ students who are already achieving their goals with HariStudyPlan. Start your free trial today.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto my-10"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="flex items-center justify-start gap-3 text-left"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="text-green-400 flex-shrink-0 w-5 h-5" />
                  </motion.div>
                  <span className="text-slate-300 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center group text-lg rounded-xl px-8 py-4"
              >
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg rounded-xl px-8 py-4"
              >
                Schedule Demo
              </motion.button>
            </motion.div>

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm text-slate-500 pt-4"
            >
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
