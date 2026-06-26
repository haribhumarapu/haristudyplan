import { motion } from 'framer-motion'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Security', 'Status'],
    Company: ['About Us', 'Blog', 'Careers', 'Press'],
    Resources: ['Documentation', 'API Reference', 'Community', 'Support'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'License'],
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="relative z-10 bg-slate-900/50 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/50"
              ></motion.div>
              <span className="font-bold text-lg gradient-text">HariStudyPlan</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering students with intelligent learning solutions for career growth.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="font-semibold mb-4 text-white text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 3, color: '#60a5fa' }}
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mb-8 origin-left"
        ></motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          {/* Left */}
          <div className="text-slate-400 text-sm text-center md:text-left">
            <p>
              © {currentYear} HariStudyPlan. All rights reserved. | Crafted with passion for students.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/15 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
