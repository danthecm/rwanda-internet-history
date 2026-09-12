const SectionWrapper = ({
  id,
  className = "w-full py-16 md:py-24",
  innerClassName = "",
  maxWidth = "max-w-[1240px]",
  children,
  ...props
}) => {
  return (
    <section id={id} className={className} {...props}>
      <div className="px-4 md:px-8">
        <div className={`mx-auto ${maxWidth} ${innerClassName}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
