const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="border-l-4 border-primary">
      <h2 className="text-4xl font-bold px-2 mb-8">{title}</h2>
    </div>
  );
};

export default SectionTitle;
