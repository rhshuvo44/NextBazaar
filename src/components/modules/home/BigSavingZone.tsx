import SavingZoneCard from "@/components/ui/SavingZoneCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { savingZone } from "@/DB/data";
const BigSavingZone = () => {
  return (
    <section className="py-10">
      <SectionTitle title="Big Saving Zone" />
      <div className="grid grid-cols-3 gap-10">
        {savingZone.slice(0, 3).map((item, index) => (
          <SavingZoneCard
            key={index}
            src={item.src}
            title={item.title}
            brand={item.brand}
            description={item.description}
            className="w-96"
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-10 mt-10">
        {savingZone.slice(-2).map((item, index) => (
          <SavingZoneCard
            key={index}
            src={item.src}
            title={item.title}
            brand={item.brand}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BigSavingZone;
