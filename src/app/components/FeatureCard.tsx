import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-[28px] p-8 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
    >
      <div className="w-16 h-16 rounded-[20px] bg-gradient-to-br from-[#4FE3D6]/10 to-[#6C63FF]/10 flex items-center justify-center mb-6 shadow-[0_4px_16px_rgba(79,227,214,0.15)]">
        <Icon className="w-8 h-8 text-[#4FE3D6]" strokeWidth={2} />
      </div>
      <h3 className="text-[22px] font-semibold text-[#1C1C1E] mb-3 leading-tight">
        {title}
      </h3>
      <p className="text-[16px] text-[#1C1C1E]/60 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
