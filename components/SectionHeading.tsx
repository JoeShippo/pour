type SectionHeadingProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  tone?: "dark" | "light";
};

export default function SectionHeading({
  children,
  as: Tag = "h2",
  className = "",
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Tag
        className={`font-display text-4xl leading-none tracking-wide sm:text-5xl ${
          tone === "light" ? "text-paper" : "text-ink"
        }`}
      >
        {children}
      </Tag>
    </div>
  );
}
