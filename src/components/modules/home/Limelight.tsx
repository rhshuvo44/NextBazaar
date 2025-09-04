import SectionTitle from "@/components/ui/SectionTitle";
import { limelight } from "@/DB/data";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
const Limelight = () => {
  return (
    <section className="py-10">
      <SectionTitle title="In The Limelight" />
      <div className="grid grid-cols-4 gap-10">
        {limelight.map((item, i) => (
          <div className="bg-base-100 shadow-sm relative" key={i}>
            <div className="bg-white absolute top-2 right-2 rounded-full p-1">
              <CiHeart className=" text-lg text-black hover:text-red-500 cursor-pointer" />
            </div>
            <figure className="h-48 w-full overflow-hidden">
              <Image
                src={item.src}
                alt="{item.title}"
                width={200}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />
            </figure>
            <div className="p-2 mt-2">
              {/* Conditional rendering for the "Explore Now" and arrow icon */}

              <div className="flex justify-between items-center">
                <h2 className="card-title text-base">{item.title}</h2>
                <p className="bg-accent px-2 rounded-md font-bold">${item.price}</p>
              </div>

              <p className="text-sm text-gray-500">{item.brand}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Limelight;
