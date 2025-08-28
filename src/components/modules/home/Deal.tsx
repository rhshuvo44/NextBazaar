import PolymorphicButton from "@/components/ui/PolymorphicButton";
import { deals } from "@/DB/data";
import Image from "next/image";
const Deal = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {deals.map((deal, index) => (
          <section key={index} className={`relative flex p-4 text-white h-96`}>
            {/* Background wrapper */}
            <div className="absolute inset-0 ">
              <Image
                src={deal.src}
                alt={"Banner image"}
                fill
                priority
                className="object-cover object-left-bottom"
              />

              {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 flex flex-col items-start justify-center">
              <h3 className="text-xl font-light mb-2 ">{deal.brand}</h3>
              {/* Title */}
              <h1
                className="text-xl sm:text-4xl  font-extrabold mb-4 drop-shadow-lg animate-fadeIn text-left py-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                {deal.title}
              </h1>
              {/* Subtitle */}

              <h3
                className="text-md sm:text-lg md:text-xl mb-6 font-light"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                {deal.description}
              </h3>
              <PolymorphicButton
                href={"/shop"}
                text={"Explore Items"}
                variant={"outline"}
                color={"primary"}
                ariaLabel={"Explore Items"}
                className={`font-rubik }`}
              />
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Deal;
