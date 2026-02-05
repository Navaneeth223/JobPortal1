export default function SectionWrapper({ children }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
}
