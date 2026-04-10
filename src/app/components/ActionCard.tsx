import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  onClick?: () => void;
  delay?: number;
}

export function ActionCard({ icon: Icon, title, description, action, onClick, delay = 0 }: ActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 150, damping: 20 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="bg-white rounded-[24px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#1C1C1C]/5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F6EFE5] to-[#ede3d5] flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-[#B89068]" strokeWidth={2} />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-[17px] font-semibold text-[#1C1C1C] mb-1">
            {title}
          </h3>
          <p className="text-[14px] text-[#1C1C1C]/60 mb-3 leading-relaxed">
            {description}
          </p>
          <span className="text-[13px] font-medium text-[#B89068]">
            {action} →
          </span>
        </div>
      </div>
    </motion.div>
  );
}
