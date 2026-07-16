"use client";

interface ProjectCardProps {
  title: string;
  desc: string;
  images: string[];
  stack: string[];
  index?: number;
}

const VISIBLE_TAGS = 3;

// Full literal class strings per category (Tailwind's compiler scans source
// text statically — it can't see classes assembled from interpolated
// fragments like `text-${color}`, so each theme is written out in full).
const CATEGORY_THEME: Record<
  string,
  { eyebrow: string; bar: string; border: string; tint: string }
> = {
  "Web Development": {
    eyebrow: "text-aqua",
    bar: "from-signal via-aqua to-signal",
    border: "hover:border-signal/70",
    tint: "to-signal/[0.08]",
  },
  "Mobile Game Development": {
    eyebrow: "text-ember",
    bar: "from-ember via-signal to-ember",
    border: "hover:border-ember/70",
    tint: "to-ember/[0.10]",
  },
};
const DEFAULT_THEME = CATEGORY_THEME["Web Development"];

export default function ProjectCard({
  title,
  desc,
  images,
  stack,
  index = 0,
}: ProjectCardProps) {
  const [category, titleText] = title.includes(" - ")
    ? title.split(" - ")
    : ["", title];
  const theme = CATEGORY_THEME[category] ?? DEFAULT_THEME;
  const visibleStack = stack.slice(0, VISIBLE_TAGS);
  const remaining = stack.length - visibleStack.length;

  return (
    <div
      className={`group relative h-[340px] sm:h-[390px] md:h-[420px] w-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 transition-colors duration-300 ${theme.border}`}
    >
      <img
        src={images[0]}
        alt={titleText}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 ${theme.tint}`}
      />
      <div
        className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r ${theme.bar} transition-transform duration-500 ease-out group-hover:scale-x-100`}
      />

      <span className="absolute -top-3 right-2 font-display text-[92px] sm:text-[108px] md:text-[120px] font-bold text-paper/[0.07] select-none leading-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {category && (
        <span
          className={`absolute top-4 left-4 font-mono text-[10px] sm:text-xs uppercase tracking-wide ${theme.eyebrow}`}
        >
          <span className="group-hover:hidden">{category}</span>
          <span className="hidden group-hover:inline">View Project →</span>
        </span>
      )}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-paper mb-2 leading-snug drop-shadow-sm">
          {titleText}
        </h3>
        <p className="text-xs sm:text-sm text-paper-muted/90 leading-relaxed line-clamp-2 mb-4">
          {desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {visibleStack.map((tech, idx) => (
            <span
              key={idx}
              className="rounded-full bg-ink-950/60 border border-ink-700 text-paper-muted px-2.5 py-1 text-[10px] sm:text-xs font-mono backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {remaining > 0 && (
            <span className="rounded-full bg-ink-950/60 border border-ink-700 text-paper-faint px-2.5 py-1 text-[10px] sm:text-xs font-mono backdrop-blur-sm">
              +{remaining}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}   