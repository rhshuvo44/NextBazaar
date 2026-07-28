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
    brand: "Jeans / Bottoms",
    title: (
      <>
        Denim <br /> Collection
      </>
    ),
    description: "trendy / durable / stylish",
  },
  {
    src: banner1,
    brand: "Shoes / Sneakers",
    title: (
      <>
        Step Up <br /> Your Style
      </>
    ),
    description: "comfortable / casual / fresh",
  },
];
export const deals: Deals[] = [
  {
    src: deal1,
    brand: "Low Price",
    title: "High Coziness",
    description: "UP TO 50% OFF",
  },
  {
    src: deal2,
    brand: "Beyoung Presents",
    title: "Breezy Summer Style",
    description: "UP TO 50% OFF",
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
    description: "UP TO 50% OFF",
  },
  {
    src: savingZone2,
    brand: "Summer Essentials",
    title: "Lightweight Tees",
    description: "UP TO 30% OFF",
  },
  {
    src: savingZone3,
    brand: "Cozy Layers",
    title: "Warm Hoodies",
    description: "UP TO 40% OFF",
  },
  {
    src: savingZone4,
    brand: "Denim Edit",
    title: "Classic Jeans",
    description: "UP TO 35% OFF",
  },
  {
    src: savingZone5,
    brand: "Accessories",
    title: "Must-Have Extras",
    description: "UP TO 25% OFF",
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

export const products: Product[] = [
  // Arrivals
  {
    id: 1,
    src: arrivals1,
    title: "Knitted Joggers",
    category: "Unisex",
    price: "45.00",
  },
  {
    id: 2,
    src: arrivals2,
    title: "Full Sleeve",
    category: "Unisex",
    price: "45.00",
  },
  {
    id: 3,
    src: arrivals3,
    title: "Active T-Shirts",
    category: "Unisex",
    price: "45.00",
  },
  {
    id: 4,
    src: arrivals4,
    title: "Urban Shirts",
    category: "Unisex",
    price: "45.00",
  },

  // Women
  {
    id: 5,
    src: TeesTShirt,
    title: "Tees & T-Shirt",
    category: "Women",
    price: "45.00",
  },
  {
    id: 6,
    src: coatsParkas,
    title: "Coats & Parkas",
    category: "Women",
    price: "45.00",
  },
  {
    id: 7,
    src: hoodies1,
    title: "Hoodies & Sweatshirts",
    category: "Women",
    price: "45.00",
  },
  {
    id: 8,
    src: boxersWomen,
    title: "Boxers",
    category: "Women",
    price: "45.00",
  },

  // Men
  {
    id: 9,
    src: tShirt,
    title: "T-Shirts",
    category: "Men",
    price: "45.00",
  },
  {
    id: 10,
    src: printTShirt,
    title: "Printed T-Shirts",
    category: "Men",
    price: "45.00",
  },
  {
    id: 11,
    src: planTShirt,
    title: "Plain T-Shirt",
    category: "Men",
    price: "45.00",
  },
  {
    id: 12,
    src: poloTShirt,
    title: "Polo T-Shirt",
    category: "Men",
    price: "45.00",
  },
  {
    id: 13,
    src: hoodies,
    title: "Hoodies & Sweatshirts",
    category: "Men",
    price: "45.00",
  },
  {
    id: 14,
    src: jeans,
    title: "Jeans",
    price: "45.00",
    category: "Men",
  },
  {
    id: 15,
    src: arrivals1,
    title: "Active wear",
    category: "Men",
    price: "45.00",
  },
  {
    id: 16,
    src: boxers,
    title: "Boxers",
    category: "Men",
    price: "45.00",
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

  // Combos
  {
    id: 21,
    src: deal1,
    title: "Summer Style Combo",
    brand: "Beyoung",
    price: "79.99",
    category: "Combos",
    discount: 20,
    description: "Complete summer look with matching tee, shorts, and accessories.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#ffffff", "#ffa500"],
  },
  {
    id: 22,
    src: deal2,
    title: "Casual Weekender",
    brand: "Urban Threads",
    price: "89.99",
    category: "Combos",
    discount: 15,
    description: "Weekend getaway combo: hoodie, joggers, and a cap.",
    sizes: ["M", "L", "XL"],
    colors: ["#3C4242", "#000080", "#6a0dad"],
  },
  {
    id: 23,
    src: savingZone1,
    title: "Office Ready Pack",
    brand: "Formal Fit",
    price: "129.99",
    category: "Combos",
    discount: 25,
    description: "Two formal shirts, one blazer, and tailored trousers.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["#000000", "#ffffff", "#000080"],
  },
  {
    id: 24,
    src: savingZone2,
    title: "Gym Essential Kit",
    brand: "ActiveGear",
    price: "59.99",
    category: "Combos",
    discount: 10,
    description: "Performance tee, shorts, gym bag, and sweatband.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["#000000", "#ff0000", "#000080"],
  },
  {
    id: 25,
    src: savingZone3,
    title: "Winter Warmers",
    brand: "CozyCasa",
    price: "99.99",
    category: "Combos",
    discount: 30,
    description: "Premium hoodie, beanie, gloves, and thermal socks.",
    sizes: ["M", "L", "XL"],
    colors: ["#3C4242", "#6a0dad", "#000000"],
  },

  // Joggers
  {
    id: 26,
    src: arrivals1,
    title: "Classic Jogger",
    brand: "SportFlex",
    price: "34.99",
    category: "Joggers",
    description: "Cotton-blend joggers with elastic cuffs and drawstring waist.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#3C4242", "#ffffff"],
  },
  {
    id: 27,
    src: arrivals2,
    title: "Cargo Joggers",
    brand: "Urban Street",
    price: "39.99",
    category: "Joggers",
    description: "Cargo-style joggers with zip pockets and tapered fit.",
    sizes: ["M", "L", "XL", "2XL"],
    colors: ["#3C4242", "#000000", "#6a0dad"],
  },
  {
    id: 28,
    src: arrivals3,
    title: "Slim Fit Joggers",
    brand: "FlexWear",
    price: "29.99",
    category: "Joggers",
    discount: 10,
    description: "Slim-fit joggers with moisture-wicking fabric.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#000000", "#3C4242"],
  },
  {
    id: 29,
    src: arrivals4,
    title: "Tapered Sweatpants",
    brand: "ComfortCore",
    price: "32.99",
    category: "Joggers",
    description: "French terry sweatpants with tapered legs and ribbed cuffs.",
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: ["#3C4242", "#000080", "#000000"],
  },
  {
    id: 30,
    src: boxers,
    title: "Mesh Training Joggers",
    brand: "ProFit",
    price: "44.99",
    category: "Joggers",
    discount: 15,
    description: "Breathable mesh joggers designed for high-intensity training.",
    sizes: ["M", "L", "XL"],
    colors: ["#000000", "#ff0000"],
  },
];
