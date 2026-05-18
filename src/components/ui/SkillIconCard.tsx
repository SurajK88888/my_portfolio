// ============================================================
// SkillIconCard.tsx — Reusable skill card with emoji icon + level badge.
// Props: icon (emoji), name, level ("Beginner" | "Intermediate" | "Advanced" | "Expert")
// Used by: Skills.tsx
// ============================================================

interface SkillIconCardProps {
  icon: string;   // Emoji representing the tech
  name: string;   // Skill name
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

// Level → color mapping — edit here to change badge colors
const levelColors: Record<SkillIconCardProps["level"], string> = {
  Expert:       "bg-primary/20 text-primary border-primary/30",
  Advanced:     "bg-blue-500/15 text-blue-400 border-blue-500/30",
  Intermediate: "bg-purple-500/15 text-purple-400 border-purple-500/30",
  Beginner:     "bg-secondary text-muted-foreground border-border",
};

const SkillIconCard = ({ icon, name, level }: SkillIconCardProps) => {
  return (
    <div className="group flex flex-col items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default">
      {/* Icon */}
      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>

      {/* Skill name */}
      <span className="text-sm font-medium text-center leading-tight">{name}</span>

      {/* Level badge */}
      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${levelColors[level]}`}>
        {level}
      </span>
    </div>
  );
};

export default SkillIconCard;
