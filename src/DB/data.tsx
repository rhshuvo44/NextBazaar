import client1 from "@/assets/images/client/1.png";
import client2 from "@/assets/images/client/2.png";
import client3 from "@/assets/images/client/3.png";
import client4 from "@/assets/images/client/4.png";
import client5 from "@/assets/images/client/5.png";
import banner1 from "@/assets/images/home/1.jpg";
import boxers from "@/assets/images/home/Boxers.jpg";
import coatsParkas from "@/assets/images/home/CoatsParkas.png";
import hoodies from "@/assets/images/home/Hoodies.jpg";
import jeans from "@/assets/images/home/Jeans.jpg";
import limelight0 from "@/assets/images/home/Limelight.jpg";
import limelight1 from "@/assets/images/home/Limelight1.jpg";
import limelight2 from "@/assets/images/home/Limelight2.jpg";
import limelight3 from "@/assets/images/home/Limelight3.jpg";
import TeesTShirt from "@/assets/images/home/Tees&T-Shirt.jpg";
import arrivals1 from "@/assets/images/home/arrivals1.jpg";
import arrivals2 from "@/assets/images/home/arrivals2.jpg";
import arrivals3 from "@/assets/images/home/arrivals3.jpg";
import arrivals4 from "@/assets/images/home/arrivals4.jpg";
import boxersWomen from "@/assets/images/home/boxersWomen.png";
import deal1 from "@/assets/images/home/deals.jpg";
import deal2 from "@/assets/images/home/deals1.jpg";
import hoodies1 from "@/assets/images/home/hoodie1.png";
import planTShirt from "@/assets/images/home/plan-t-shirt.jpg";
import poloTShirt from "@/assets/images/home/polo-t-shirt.jpg";
import printTShirt from "@/assets/images/home/print-t-shirt.jpg";
import savingZone1 from "@/assets/images/home/savingZone.jpg";
import savingZone2 from "@/assets/images/home/savingZone2.jpg";
import savingZone3 from "@/assets/images/home/savingZone3.jpg";
import savingZone4 from "@/assets/images/home/savingZone4.jpg";
import savingZone5 from "@/assets/images/home/savingZone5.jpg";
import tShirt from "@/assets/images/home/t-shirt.jpg";
import feedback1 from "@/assets/images/testimonial/1.png";
import feedback2 from "@/assets/images/testimonial/2.png";
import feedback3 from "@/assets/images/testimonial/3.png";
import {
  Banner,
  Clients,
  Deals,
  Feedbacks,
  Product,
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

export const products: Product[] = [
  // Arrivals
  {
    id: 1,
    src: arrivals1,
    title: "Knitted Joggers",
    category: "Unisex",
  },
  {
    id: 2,
    src: arrivals2,
    title: "Full Sleeve",
    category: "Unisex",
  },
  {
    id: 3,
    src: arrivals3,
    title: "Active T-Shirts",
    category: "Unisex",
  },
  {
    id: 4,
    src: arrivals4,
    title: "Urban Shirts",
    category: "Unisex",
  },

  // Women
  {
    id: 5,
    src: TeesTShirt,
    title: "Tees & T-Shirt",
    category: "Women",
  },
  {
    id: 6,
    src: coatsParkas,
    title: "Coats & Parkas",
    category: "Women",
  },
  {
    id: 7,
    src: hoodies1,
    title: "Hoodies & Sweatshirts",
    category: "Women",
  },
  {
    id: 8,
    src: boxersWomen,
    title: "Boxers",
    category: "Women",
  },

  // Men
  {
    id: 9,
    src: tShirt,
    title: "T-Shirts",
    category: "Men",
  },
  {
    id: 10,
    src: printTShirt,
    title: "Printed T-Shirts",
    category: "Men",
  },
  {
    id: 11,
    src: planTShirt,
    title: "Plain T-Shirt",
    category: "Men",
  },
  {
    id: 12,
    src: poloTShirt,
    title: "Polo T-Shirt",
    category: "Men",
  },
  {
    id: 13,
    src: hoodies,
    title: "Hoodies & Sweatshirts",
    category: "Men",
  },
  {
    id: 14,
    src: jeans,
    title: "Jeans",
    category: "Men",
  },
  {
    id: 15,
    src: arrivals1,
    title: "Active wear",
    category: "Men",
  },
  {
    id: 16,
    src: boxers,
    title: "Boxers",
    category: "Men",
  },

  // Limelight (Featured)
  {
    id: 17,
    src: limelight0,
    title: "Black Sweatshirt with ....",
    brand: "Jhanvi’s Brand",
    price: "45.00",
    category: "Featured",
  },
  {
    id: 18,
    src: limelight1,
    title: "Line Pattern Black H...",
    brand: "AS’s Brand",
    price: "45.00",
    category: "Featured",
  },
  {
    id: 19,
    src: limelight2,
    title: "Black Shorts",
    brand: "MM’s Brand",
    price: "45.00",
    category: "Featured",
  },
  {
    id: 20,
    src: limelight3,
    title: "Lavender Hoodie with ....",
    brand: "Nike’s Brand",
    price: "45.00",
    category: "Featured",
  },
];
