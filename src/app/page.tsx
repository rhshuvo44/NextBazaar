import Banner from "@/components/modules/home/Banner";
import Deal from "@/components/modules/home/Deal";
export default function Home() {
  return (
    <>
      <Banner />
      <main className="max-w-7xl mx-auto p-10 w-full">
        <Deal />
      </main>
    </>
  );
}
