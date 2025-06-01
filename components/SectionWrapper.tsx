export function SectionWrapper({
  children,
  className = "",
}: {
  children: any;
  className?: string;
}) {
  return (
    <div className={`border-b border-dashed container-padding`}>
      <div
        className={`px-6 lg:px-8 py-8 border-l border-r border-dashed container ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
