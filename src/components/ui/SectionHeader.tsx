interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 lg:mb-16 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span className="eyebrow inline-block mb-4">{eyebrow}</span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-[1.15] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-text-muted max-w-xl mx-auto text-[15px] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
