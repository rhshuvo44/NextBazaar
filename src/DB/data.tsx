import client1 from "@/assets/images/client/1.png";
import client2 from "@/assets/images/client/2.png";
import client3 from "@/assets/images/client/3.png";
import client4 from "@/assets/images/client/4.png";
import client5 from "@/assets/images/client/5.png";
import feedback1 from "@/assets/images/testomonial/1.png";
import feedback2 from "@/assets/images/testomonial/2.png";
import feedback3 from "@/assets/images/testomonial/3.png";
import banner1 from "@/assets/images/home/1.jpg";
import boxers from "@/assets/images/home/Boxers.jpg";
import coatsParkas from "@/assets/images/home/CoatsParkas.png";
import hoodies from "@/assets/images/home/Hoodies.jpg";
import jeans from "@/assets/images/home/Jeans.jpg";
import TeesTShirt from "@/assets/images/home/Tees&T-Shirt.jpg";
import arrivals1 from "@/assets/images/home/arrivals1.jpg";
import arrivals2 from "@/assets/images/home/arrivals2.jpg";
import arrivals3 from "@/assets/images/home/arrivals3.jpg";
import arrivals4 from "@/assets/images/home/arrivals4.jpg";
import boxersWomen from "@/assets/images/home/boxersWomen.png";
import deal1 from "@/assets/images/home/deals.jpg";
import deal2 from "@/assets/images/home/deals1.jpg";
import hoodies1 from "@/assets/images/home/hoodie1.png";
import planTShart from "@/assets/images/home/plan-t-shart.jpg";
import poloTShart from "@/assets/images/home/polo-t-shart.jpg";
import printTShart from "@/assets/images/home/print-t-shart.jpg";
import savingZone1 from "@/assets/images/home/savingZone.jpg";
import savingZone2 from "@/assets/images/home/savingZone2.jpg";
import savingZone3 from "@/assets/images/home/savingZone3.jpg";
import savingZone4 from "@/assets/images/home/savingZone4.jpg";
import savingZone5 from "@/assets/images/home/savingZone5.jpg";
import tShart from "@/assets/images/home/t-shart.jpg";
import {
  Arrivals,
  Banner,
  Categories,
  Clients,
  Deals,
  Feedbacks,
  SavingZone,
} from "@/types";
export const homeBanner: Banner[] = [
  {
    src: banner1,
    brand: "T-shirt / Tops",
    title: (
      <>
        Summer <br /> Value Pack
      </>
    ),
    description: "cool / colorful / comfy",
  },
  {
    src: banner1,
    brand: "T-shirt / Tops",
    title: (
      <>
        Summer <br /> Value Pack
      </>
    ),
    description: "cool / colorful / comfy",
  },
  {
    src: banner1,
    brand: "T-shirt / Tops",
    title: (
      <>
        Summer <br /> Value Pack
      </>
    ),
    description: "cool / colorful / comfy",
  },
];
export const deals: Deals[] = [
  {
    src: deal1,
    brand: "Low Price",
    title: "High Coziness",
    description: "UPTO 50% OFF",
  },
  {
    src: deal2,
    brand: "Beyoung Presents",
    title: "Breezy Summer Style",
    description: "UPTO 50% OFF",
  },
];
export const arrivals: Arrivals[] = [
  {
    src: arrivals1,
    title: "Knitted Joggers",
  },
  {
    src: arrivals2,
    title: "Full Sleeve",
  },
  {
    src: arrivals3,
    title: "Active T-Shirts",
  },
  {
    src: arrivals4,
    title: "Urban Shirts",
  },
  {
    src: arrivals2,
    title: "Full Sleeve",
  },
  {
    src: arrivals3,
    title: "Active T-Shirts",
  },
  {
    src: arrivals4,
    title: "Urban Shirts",
  },
];
export const categoriesWomen: Categories[] = [
  {
    src: TeesTShirt,
    title: "Tees & T-Shirt",
  },
  {
    src: coatsParkas,
    title: "Coats & Parkas",
  },
  {
    src: hoodies1,
    title: "Hoodies & Sweatshirts",
  },

  {
    src: boxersWomen,
    title: "Boxers",
  },
];
export const clients: Clients[] = [
  {
    src: client1,
  },
  {
    src: client2,
  },
  {
    src: client3,
  },
  {
    src: client4,
  },
  {
    src: client5,
  },
];
export const categoriesMen: Categories[] = [
  {
    src: tShart,
    title: "T-Shirts",
  },
  {
    src: printTShart,
    title: "Printed T-Shirts",
  },
  {
    src: planTShart,
    title: "Plain T-Shirt",
  },
  {
    src: poloTShart,
    title: "Polo T-Shirt",
  },
  {
    src: hoodies,
    title: "Hoodies & Sweatshirts",
  },
  {
    src: jeans,
    title: "Jeans",
  },
  {
    src: arrivals1,
    title: "Activewear",
  },
  {
    src: boxers,
    title: "Boxers",
  },
];
export const savingZone: SavingZone[] = [
  {
    src: savingZone1,
    brand: "Low Price",
    title: "High Coziness",
    description: "UPTO 50% OFF",
  },
  {
    src: savingZone2,
    brand: "Beyoung Presents",
    title: "Breezy Summer Style",
    description: "UPTO 50% OFF",
  },
  {
    src: savingZone3,
    brand: "Beyoung Presents",
    title: "Breezy Summer Style",
    description: "UPTO 50% OFF",
  },
  {
    src: savingZone4,
    brand: "Beyoung Presents",
    title: "Breezy Summer Style",
    description: "UPTO 50% OFF",
  },
  {
    src: savingZone5,
    brand: "Beyoung Presents",
    title: "Breezy Summer Style",
    description: "UPTO 50% OFF",
  },
];
export const feedbacks: Feedbacks[] = [
  {
    src: feedback1,
    name: "Floyd Miles",
    rating: 5,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    src: feedback2,
    name: "Ronald Richards",
    rating: 5,
    description:
      "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    src: feedback3,
    name: "Savannah Nguyen",
    rating: 5,
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];
