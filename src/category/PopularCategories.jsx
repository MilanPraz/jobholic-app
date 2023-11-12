import Category from "./Category";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function PopularCategories() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    
  }, []);

  return (
    <div>
      <div className="  pb-4  bg-[#f6f7fa]">
        <h2 className=" mb-6 text-center text-xl font-bold text-orange-600">
          Popular Categories
        </h2>
        <div className="">
          <div
            data-aos="fade"
            className=" container mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 cursor-pointer   justify-items-center justify-self-center"
          >
            <Category Category={"it-computer"} />
            <Category Category={"bank-finance"} />
            <Category Category={"ngo-ingo"} />
            <Category Category={"sales-marketing"} />
            <Category Category={"government"} />
            <Category Category={"army-police"} />
            <Category Category={"cooperative"} />
            <Category Category={"school-college"} />
            <Category Category={"healthcare"} />
            <Category Category={"hotel-restaurant"} />
            <Category Category={"customer_care"} />
            <Category Category={"logistics-supply_chain"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;
