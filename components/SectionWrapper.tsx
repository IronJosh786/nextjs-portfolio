export function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <div key={id} className={`border-b border-dashed container-padding`}>
      <div
        className={`container-padding py-8 border-l border-r border-dashed container ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
