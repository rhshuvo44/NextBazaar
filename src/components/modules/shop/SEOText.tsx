import SectionTitle from "@/components/ui/SectionTitle";

const SEOText = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="mt-12">
      <SectionTitle title={title} />
      <p>{description}</p>
    </section>
  );
};

export default SEOText;
