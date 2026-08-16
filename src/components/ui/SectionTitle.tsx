const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-3 mb-8 group">
      <span className="w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-fuchsia-500 transition-transform duration-300 group-hover:scale-y-110" />
      <h2 className="text-4xl font-bold">{title}</h2>
      <span className="hidden sm:block flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
  );
};

export default SectionTitle;