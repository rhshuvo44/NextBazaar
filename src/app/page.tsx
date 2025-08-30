import Banner from "@/components/modules/home/Banner";
import BigSavingZone from "@/components/modules/home/BigSavingZone";
import Deal from "@/components/modules/home/Deal";
import Fashion from "@/components/modules/home/Fashion";
import NewArrival from "@/components/modules/home/NewArrival";
export default function Home() {
  return (
    <>
      <Banner />
      <main className="max-w-7xl mx-auto p-10 w-full">
        <Deal />
        <NewArrival />
        <BigSavingZone />
        <Fashion />
      </main>
    </>
  );
}
