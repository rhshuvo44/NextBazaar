import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import { limelight } from "@/DB/data";
const PriceTable = () => {
  return (
    <div className=" py-10">
      <SectionTitle title="Buy Women's Clothing at Best Price" />
      <div className="overflow-x-auto ">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className=" text-base-content">
              <th>Women&apos;s Clothing</th>
              <th>Best Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {limelight.map((item, index) => (
              <tr key={index}>
                <td>{item.title}</td>
                <td>${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceTable;
