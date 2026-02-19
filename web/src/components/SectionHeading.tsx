type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-3xl sm:text-4xl text-charcoal tracking-tightest">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 text-sm sm:text-base text-slate">{subtitle}</p>
      ) : null}
    </div>
  );
}
