export default function SectionHeading({
    eyebrow,
    title,
    description,
    align = "left",
}) {
    return (
        <div
            className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
            {eyebrow && (
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-(--color-accent)">
                    {eyebrow}
                </p>
            )}
            <h2>{title}</h2>
            {description && (
                <p className="mt-5 text-base leading-7 text-(--color-secondary-text) sm:text-lg">
                    {description}
                </p>
            )}
        </div>
    );
}
