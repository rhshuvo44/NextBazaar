import Banner from "@/components/modules/home/Banner";
import BigSavingZone from "@/components/modules/home/BigSavingZone";
import BrandsDeal from "@/components/modules/home/BrandsDeal";
import CategoriesMen from "@/components/modules/home/CategoriesMen";
import CategoriesWomen from "@/components/modules/home/CategoriesWomen";
import Deal from "@/components/modules/home/Deal";
import Fashion from "@/components/modules/home/Fashion";
import Feedback from "@/components/modules/home/Feedback";
import Limelight from "@/components/modules/home/Limelight";
import NewArrival from "@/components/modules/home/NewArrival";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Banner />
      <main className="max-w-7xl mx-auto p-10 w-full">
        <AnimateOnScroll as="section" direction="up"><Deal /></AnimateOnScroll>
        <AnimateOnScroll as="section" direction="left"><NewArrival /></AnimateOnScroll>
        <AnimateOnScroll as="section" direction="up"><BigSavingZone /></AnimateOnScroll>
        <AnimateOnScroll as="section" direction="right"><Fashion /></AnimateOnScroll>
        <AnimateOnScroll as="section" direction="up"><CategoriesMen /></AnimateOnScroll>
        <AnimateOnScroll as="section" direction="up"><CategoriesWomen /></AnimateOnScroll>
        <AnimateOnScroll as="section" direction="zoom"><BrandsDeal /></AnimateOnScroll>
        <AnimateOnScroll as="section" direction="up"><Limelight /></AnimateOnScroll>
        <AnimateOnScroll as="section" direction="right"><Feedback /></AnimateOnScroll>
      </main>
    </>
  );
}
