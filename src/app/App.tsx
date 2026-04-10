import { motion } from "motion/react";
import { Check, ArrowRight, Sparkles, Zap } from "lucide-react";
import { PawIcon } from "./components/PawIcon";
import { CustomCursor } from "./components/CustomCursor";
import productImage1 from "figma:asset/8f77315aef8029abbb1c96252901b75f31fb0edb.png";
import productImage2 from "figma:asset/eb242aeeb67037de052b12e788ace5f3b3f1b36b.png";
import productImage3 from "figma:asset/b2b9613d42e2880c7f1ceef27dd258de66a43833.png";
import productImage4 from "figma:asset/3ee8fb79d02411a54a39820ce1dc2b67f25820e1.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0B14] overflow-hidden cursor-none">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Hero Section - Purple/Aqua Gradient */}
      <section className="relative px-5 md:px-10 lg:px-20 pt-24 pb-32 md:pt-32 md:pb-40 bg-gradient-to-br from-[#7C3AED] via-[#4FE3D6] to-[#A78BFA] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-[#4FE3D6] rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#7C3AED] rounded-full blur-[120px]"
          />
        </div>

        {/* Decorative paw prints */}
        <div className="absolute top-20 left-10 opacity-10">
          <PawIcon size={80} className="text-white" />
        </div>
        <div className="absolute bottom-20 right-20 opacity-10">
          <PawIcon size={120} className="text-white" delay={0.2} />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <PawIcon size={60} className="text-white" delay={0.4} />
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left - Huge Typography */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 space-y-8"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <PawIcon size={28} className="text-white" />
                  <Sparkles className="w-5 h-5 text-white" />
                  <span className="text-[12px] uppercase tracking-[0.25em] text-white font-black">
                    FUTURE OF HOME SECURITY
                  </span>
                </div>
                
                <h1 
                  className="text-[72px] md:text-[96px] lg:text-[120px] font-black text-white leading-[0.9] tracking-[-0.03em] uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  MEET
                  <br />
                  YOUR
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FE3D6] to-white">
                    CYBER
                  </span>
                  <br />
                  GUARDIAN
                </h1>
              </div>

              <p className="text-[16px] md:text-[18px] text-white/90 leading-[1.6] max-w-[480px] font-semibold">
                GuardPup is your adorable AI-powered security companion—combining cutting-edge technology with the loyal heart of man's best friend. 🐾✨
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(79, 227, 214, 0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-white text-[#0A0B14] text-[14px] font-black uppercase tracking-[0.15em] rounded-full transition-all flex items-center gap-3 shadow-[0_8px_32px_rgba(79,227,214,0.4)]"
              >
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Right - Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -25, 0],
                  rotate: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative"
              >
                {/* Cyan/Purple glow */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-[#4FE3D6] to-[#7C3AED] rounded-full blur-[120px]"
                />
                
                <img
                  src={productImage1}
                  alt="GuardPup Robot Dog"
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                />

                {/* Floating sparkles */}
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 right-10"
                >
                  <Sparkles className="w-8 h-8 text-[#4FE3D6]" />
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, -10, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-20 left-10"
                >
                  <Zap className="w-6 h-6 text-[#A78BFA]" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Character Introduction Section - Dark with Gradient Card */}
      <section className="px-5 md:px-10 lg:px-20 py-24 md:py-32 bg-[#0A0B14]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left - Product in Futuristic Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="aspect-square rounded-[48px] bg-gradient-to-br from-[#7C3AED]/30 via-[#4FE3D6]/20 to-[#0A0B14] p-12 flex items-center justify-center relative overflow-hidden shadow-[0_0_80px_rgba(79,227,214,0.3)] border border-[#4FE3D6]/20">
                {/* Animated grid background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" 
                       style={{
                         backgroundImage: `linear-gradient(#4FE3D6 1px, transparent 1px), linear-gradient(90deg, #4FE3D6 1px, transparent 1px)`,
                         backgroundSize: '20px 20px'
                       }}
                  />
                </div>
                
                <motion.img
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  src={productImage2}
                  alt="GuardPup Character"
                  className="w-full h-auto relative z-10 drop-shadow-2xl"
                />
                
                {/* Glowing orbs */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-8 right-8 w-4 h-4 bg-[#4FE3D6] rounded-full blur-sm"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-8 left-8 w-3 h-3 bg-[#7C3AED] rounded-full blur-sm"
                />
              </div>
            </motion.div>

            {/* Right - Description */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <PawIcon size={24} className="text-[#4FE3D6]" />
                  <Sparkles className="w-4 h-4 text-[#A78BFA]" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#4FE3D6] font-black">
                    Character Introduction
                  </span>
                </div>
                
                <h2 
                  className="text-[40px] md:text-[56px] font-black text-white mb-6 uppercase leading-[0.95] tracking-tight"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FE3D6] to-[#A78BFA]">
                    GUARDPUP
                  </span>
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[16px] font-black text-[#4FE3D6] mb-2 uppercase tracking-wide">
                      Description:
                    </h3>
                    <p className="text-[15px] text-white/70 leading-[1.7] font-medium">
                      GuardPup is your friendly, loyal AI-powered home security companion with next-gen intelligent monitoring. Combining cutting-edge robotics with warmth and personality, it watches over your space with the devotion of a trusted friend. Featuring glowing cyan eyes, purple accents, and adorable animations—it's security that feels like family. 🤖💜
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-black text-[#4FE3D6] mb-3 uppercase tracking-wide">
                      Color Palette:
                    </h3>
                    <div className="flex gap-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="group cursor-none"
                      >
                        <div className="w-20 h-20 rounded-[20px] bg-[#4FE3D6] shadow-[0_0_30px_rgba(79,227,214,0.5)]" />
                        <p className="text-[10px] font-bold text-center mt-2 uppercase tracking-wider text-white/50">
                          Aqua
                        </p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="group cursor-none"
                      >
                        <div className="w-20 h-20 rounded-[20px] bg-[#7C3AED] shadow-[0_0_30px_rgba(124,58,237,0.5)]" />
                        <p className="text-[10px] font-bold text-center mt-2 uppercase tracking-wider text-white/50">
                          Purple
                        </p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="group cursor-none"
                      >
                        <div className="w-20 h-20 rounded-[20px] bg-[#0A0B14] border-2 border-[#4FE3D6]/30 shadow-lg" />
                        <p className="text-[10px] font-bold text-center mt-2 uppercase tracking-wider text-white/50">
                          Black
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bold Feature Section - Gradient Background */}
      <section className="relative px-5 md:px-10 lg:px-20 py-32 md:py-40 bg-gradient-to-br from-[#7C3AED] to-[#0A0B14] overflow-hidden">
        {/* Futuristic grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `linear-gradient(#4FE3D6 1px, transparent 1px), linear-gradient(90deg, #4FE3D6 1px, transparent 1px)`,
                 backgroundSize: '40px 40px'
               }}
          />
        </div>

        {/* Glowing orbs */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#4FE3D6]/30 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#A78BFA]/30 rounded-full blur-[120px]"
        />

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left - Massive Typography */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <h2 
                className="text-[64px] md:text-[84px] lg:text-[100px] font-black text-white leading-[0.92] uppercase tracking-[-0.02em] mb-12"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                CYBER
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4FE3D6] to-[#A78BFA]">
                  SMART
                </span>
                <br />
                PROTECTION
              </h2>

              <div className="space-y-6 max-w-[500px]">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 cursor-none"
                >
                  <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-[#4FE3D6] to-[#4FE3D6]/50 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(79,227,214,0.5)]">
                    <PawIcon size={24} className="text-[#0A0B14]" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-black text-white mb-1 uppercase">
                      AI Vision
                    </h3>
                    <p className="text-[14px] text-white/70 font-medium">
                      Advanced neural networks recognize patterns and learn your home's rhythm
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 cursor-none"
                >
                  <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-[#A78BFA] to-[#7C3AED] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(167,139,250,0.5)]">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-black text-white mb-1 uppercase">
                      Instant Alerts
                    </h3>
                    <p className="text-[14px] text-white/70 font-medium">
                      Real-time quantum-speed notifications when something needs attention
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 cursor-none"
                >
                  <div className="w-12 h-12 rounded-[16px] bg-gradient-to-br from-[#4FE3D6] to-[#7C3AED] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(79,227,214,0.5)]">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-black text-white mb-1 uppercase">
                      24/7 Guardian
                    </h3>
                    <p className="text-[14px] text-white/70 font-medium">
                      Always vigilant, never sleeping—your loyal cyber companion on duty
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right - Product Breaking Layout */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                {/* Cyan/Purple glow */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.4, 1],
                    rotate: [0, 90, 180],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-[#4FE3D6] to-[#7C3AED] rounded-full blur-[120px]"
                />
                
                <img
                  src={productImage3}
                  alt="GuardPup"
                  className="w-full max-w-[500px] h-auto relative z-10 drop-shadow-2xl lg:absolute lg:-right-20"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Views Section - Dark with Neon Accents */}
      <section className="px-5 md:px-10 lg:px-20 py-24 md:py-32 bg-[#0A0B14]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <PawIcon size={28} className="text-[#4FE3D6]" />
              <Sparkles className="w-5 h-5 text-[#A78BFA]" />
              <h2 
                className="text-[36px] md:text-[48px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4FE3D6] to-[#A78BFA] uppercase tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                #3D-VIEWS
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Front View */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              whileHover={{ y: -10, boxShadow: "0 0 40px rgba(79, 227, 214, 0.4)" }}
              className="aspect-[3/4] rounded-[40px] bg-gradient-to-br from-[#1a1b2e] to-[#0A0B14] flex flex-col items-center justify-center p-8 shadow-lg border border-[#4FE3D6]/20 cursor-none"
            >
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={productImage1}
                  alt="Front View"
                  className="w-full h-auto max-h-full object-contain drop-shadow-[0_0_30px_rgba(79,227,214,0.3)]"
                />
              </div>
              <p className="text-[13px] font-black uppercase tracking-[0.15em] text-[#4FE3D6] mt-6">
                Front
              </p>
            </motion.div>

            {/* Side View */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 0 40px rgba(167, 139, 250, 0.4)" }}
              className="aspect-[3/4] rounded-[40px] bg-gradient-to-br from-[#1a1b2e] to-[#0A0B14] flex flex-col items-center justify-center p-8 shadow-lg border border-[#A78BFA]/20 cursor-none"
            >
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={productImage2}
                  alt="Side View"
                  className="w-full h-auto max-h-full object-contain drop-shadow-[0_0_30px_rgba(167,139,250,0.3)]"
                />
              </div>
              <p className="text-[13px] font-black uppercase tracking-[0.15em] text-[#A78BFA] mt-6">
                Side
              </p>
            </motion.div>

            {/* Action View */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 0 40px rgba(79, 227, 214, 0.4)" }}
              className="aspect-[3/4] rounded-[40px] bg-gradient-to-br from-[#1a1b2e] to-[#0A0B14] flex flex-col items-center justify-center p-8 shadow-lg border border-[#4FE3D6]/20 cursor-none"
            >
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={productImage4}
                  alt="Action View"
                  className="w-full h-auto max-h-full object-contain drop-shadow-[0_0_30px_rgba(79,227,214,0.3)]"
                />
              </div>
              <p className="text-[13px] font-black uppercase tracking-[0.15em] text-[#4FE3D6] mt-6">
                Action
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Buy Now Section - Vibrant Gradient */}
      <section className="relative px-5 md:px-10 lg:px-20 py-32 md:py-40 bg-gradient-to-br from-[#4FE3D6] via-[#7C3AED] to-[#A78BFA] overflow-hidden">
        {/* Animated background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full blur-[150px]"
        />
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <PawIcon size={150} className="text-white" />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <PawIcon size={100} className="text-white" />
        </div>

        <div className="max-w-[900px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <PawIcon size={32} className="text-white" />
                <Sparkles className="w-6 h-6 text-white" />
                <span className="text-[12px] uppercase tracking-[0.25em] text-white font-black">
                  Join the Cyber Pack
                </span>
              </div>

              <h2 
                className="text-[64px] md:text-[84px] lg:text-[96px] font-black text-white leading-[0.9] uppercase tracking-[-0.02em]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                GET
                <br />
                YOURS
                <br />
                NOW
              </h2>
              
              <p className="text-[16px] md:text-[18px] text-white/90 font-semibold max-w-[500px] mx-auto">
                Protect your home with GuardPup's intelligent cyber watch ✨🐾
              </p>
            </div>

            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(79, 227, 214, 0.6)" }}
              className="bg-[#0A0B14] rounded-[40px] p-10 md:p-12 shadow-[0_0_60px_rgba(79,227,214,0.4)] inline-block border-2 border-[#4FE3D6]/30 cursor-none"
            >
              <div className="space-y-8">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[#4FE3D6] font-black mb-3 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Special Launch Price
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="flex items-baseline justify-center gap-4">
                    <span 
                      className="text-[72px] md:text-[88px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4FE3D6] to-[#A78BFA] leading-none"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      $299
                    </span>
                    <span className="text-[28px] text-white/30 line-through font-bold">
                      $399
                    </span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-12 py-6 bg-gradient-to-r from-[#4FE3D6] to-[#7C3AED] text-white text-[14px] font-black uppercase tracking-[0.15em] rounded-full transition-all shadow-[0_0_30px_rgba(79,227,214,0.5)] hover:shadow-[0_0_50px_rgba(79,227,214,0.8)] cursor-none"
                >
                  Buy GuardPup Now
                </motion.button>

                <div className="flex items-center justify-center gap-8 text-[12px] text-white/50 font-black uppercase tracking-wider pt-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4FE3D6]" strokeWidth={3} />
                    Free Ship
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4FE3D6]" strokeWidth={3} />
                    Warranty
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#4FE3D6]" strokeWidth={3} />
                    Returns
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Dark */}
      <footer className="px-5 md:px-10 lg:px-20 py-12 bg-[#0A0B14] border-t border-[#4FE3D6]/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <PawIcon size={32} className="text-[#4FE3D6]" />
              <span 
                className="text-[28px] md:text-[32px] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#4FE3D6] to-[#A78BFA] uppercase tracking-tight"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                GUARDPUP
              </span>
              <Sparkles className="w-5 h-5 text-[#A78BFA]" />
            </div>
            
            <p className="text-[11px] text-white/40 uppercase tracking-[0.15em] font-bold">
              © 2026 — Cyber Smart Home Security 🐾✨
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
