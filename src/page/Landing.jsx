

import { motion } from "framer-motion"
// import { MessageCircle, MapPin, Zap, Shield, Heart } from "lucide-react"
// import logo from '../assets/logo.png'
import logo from '../assets/logo2.png'
import {
  MessageCircle,
  MapPin,
  Zap,
  Shield,
  Heart,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"

export default function IronoxLanding() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 20 },
  }

  return (
    <div className="min-h-screen bg-background grid-pattern overflow-hidden">
      {/* Hero Section */}
      <motion.main
        className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, -100, null],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Coming Soon Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <motion.span
            className="inline-block mt-2 px-6 py-3 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-medium tracking-wide glow-effect backdrop-blur-sm"
            {...scaleOnHover}
          >
            ✨ Coming Soon
          </motion.span>
        </motion.div>

        {/* Brand Name & Logo */}
    
          <div className="flex items-center justify-center gap-6">
            <motion.div
              className="relative mt-0"
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
               <img 
                    src={logo} 
                    
                    alt="IRONOX Logo" 
                    className="w-32 sm:w-40 md:w-56 lg:w-64 h-auto object-contain m-0 p-0"
                />
            </motion.div>
            {/* <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-shimmer mb-2">IRONOX</h1>
            
            </div> */}
          
        </div>

        {/* Description */}
        <motion.div variants={fadeInUp} className="max-w-2xl mt-16 mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Premium build quality cycles for kids, adults, and every age group. Designed with{" "}
            <span className="text-accent font-semibold">durability</span>,{" "}
            <span className="text-primary font-semibold">comfort</span>, and{" "}
            <span className="text-accent font-semibold">style</span> in mind.
            Ironox Cycles stand for strength, reliability, and performance — built to ride{" "}
            <span className="text-accent font-semibold">longer</span>,{" "}
            <span className="text-primary font-semibold">smoother</span>, and{" "}
            <span className="text-accent font-semibold">stronger</span>
            
          </p>
        </motion.div>

        <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 max-w-4xl mb-16"
            >
            {[
                { icon: Zap, title: "Performance", desc: "Built for speed and agility" },
                { icon: Shield, title: "Durability", desc: "Premium materials that last" },
                { icon: Heart, title: "Comfort", desc: "Ergonomic design for all ages" },
            ].map((feature, index) => (
                <motion.div
                key={feature.title}
                className="flex-1 card-hover bg-card/50 p-6 rounded-2xl text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
                >
                <feature.icon className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </motion.div>
            ))}
            </motion.div>

        {/* Location Section */}
        

        {/* Contact Details Section */}
        <motion.div variants={fadeInUp} className="w-full max-w-4xl mb-16">
          <div className="card-hover bg-card/50 rounded-3xl p-8 backdrop-blur-sm">
            <motion.div className="flex items-center gap-3 mb-8" variants={fadeInLeft}>
              <Phone className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-semibold">Get In Touch</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Phone Contact */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 card-hover bg-background/50 p-6 rounded-2xl text-center border border-border/50"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm mb-3">Ready to help you choose</p>
                <motion.a
                  href="tel:+918901445543"
                  className="text-accent font-medium hover:text-accent/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +91 89014 45543
                </motion.a>
                <motion.a
                  href="tel:+917015718004"
                  className="text-accent font-medium hover:text-accent/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  +91 70157 18004
                </motion.a>
              </motion.div>

              {/* Email Contact */}
              <motion.div
                className="card-hover bg-background/50 p-6 rounded-2xl text-center border border-border/50"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm mb-3">Quick response guaranteed</p>
                <motion.a
                  href="mailto:ironoxbikes@gmail.com"
                  className="text-primary font-medium hover:text-primary/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ironoxbikes@gmail.com
                </motion.a>
              </motion.div>

              {/* Business Hours */}
              
            </div>

            {/* Social Media Links */}
            {/* <motion.div
              className="mt-8 pt-6 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <h3 className="text-lg font-semibold text-center mb-6">Follow Our Journey</h3>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Instagram, href: "https://instagram.com/ironoxcycles", color: "hover:text-pink-400" },
                  { icon: Facebook, href: "https://facebook.com/ironoxcycles", color: "hover:text-blue-400" },
                  { icon: Twitter, href: "https://twitter.com/ironoxcycles", color: "hover:text-sky-400" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-card/50 rounded-full flex items-center justify-center text-muted-foreground transition-all duration-300 border border-border/50 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.7 + index * 0.1, type: "spring", stiffness: 200 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div> */}
          </div>
        </motion.div>
      </motion.main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="pb-8 px-6 text-center"
      >
        <p className="text-muted-foreground text-pretty">
          Thank you for visiting <span className="text-accent font-semibold">IRONOX</span> — Ride into the future with
          us.
        </p>
      </motion.footer>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.a
          href="https://wa.me/+918901445543"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 pulse-animation backdrop-blur-sm border border-green-400/20"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <MessageCircle className="w-7 h-7" />
        </motion.a>
      </motion.div>
    </div>
  )
}