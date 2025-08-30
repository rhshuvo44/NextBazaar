import banner from "@/assets/images/404/1.jpg";
import Image from "next/image";
import Link from "next/link";
export default function Custom404() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center p-4 text-center mt-10">
      {/* 404 Section */}
      <div className="flex flex-col items-center max-w-lg mx-auto">
        {/* 404 Image with Person */}
        <div className="relative">
          <div className="relative text-[150px] sm:text-[200px] md:text-[250px] text-base-content font-extrabold flex justify-center items-center -top-2">
            4
            <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden z-10">
              {/* Replace with your image */}
              <Image
                src={banner}
                alt="Person with shopping bags"
                className="w-full h-full object-cover"
              />
            </div>
            4
          </div>
          {/* OOPS text on top of the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-3xl font-bold">
            <span className="sr-only">404</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Oops! Page not found</h1>
        <p className="text-gray-500 mb-8 max-w-xs">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>

        <Link href="/">
          <button className="btn btn-primary">Back to HomePage</button>
        </Link>
      </div>
    </main>
  );
}
